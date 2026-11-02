import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  DirectionalLight,
  Group,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  TorusKnotGeometry,
  Vector3,
  WebGLRenderer,
} from "three";

export function createNeuralRenderer(host, controls) {
  let renderer;
  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);
  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 8.3);
  const group = new Group();
  scene.add(group);
  const knotGeometry = new TorusKnotGeometry(1.1, 0.39, 260, 36, 2, 3);
  const knotMaterial = new MeshPhysicalMaterial({
    color: 0xe16a32,
    metalness: 0.8,
    roughness: 0.28,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
  });
  const knot = new Mesh(knotGeometry, knotMaterial);
  knot.rotation.set(0.2, -0.3, 0.1);
  group.add(knot);
  const wireGeometry = new TorusKnotGeometry(1.11, 0.399, 135, 17, 2, 3);
  const wireMaterial = new MeshBasicMaterial({
    color: 0xffa16b,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  });
  const wire = new Mesh(wireGeometry, wireMaterial);
  wire.rotation.copy(knot.rotation);
  group.add(wire);
  const orbitMaterial = new LineBasicMaterial({
    color: 0xb77d5d,
    transparent: true,
    opacity: 0.3,
  });
  const orbitGeometries = [];
  for (let j = 0; j < 3; j++) {
    const points = Array.from({ length: 181 }, (_, i) => {
      const a = (i / 180) * Math.PI * 2;
      return new Vector3(
        Math.cos(a) * (2.02 + j * 0.13),
        Math.sin(a) * (2.02 + j * 0.13),
        0,
      );
    });
    const geometry = new BufferGeometry().setFromPoints(points);
    orbitGeometries.push(geometry);
    const orbit = new LineLoop(geometry, orbitMaterial);
    orbit.rotation.set(0.9 + j * 0.5, 0.1 + j * 0.65, j * 0.7);
    group.add(orbit);
  }
  const count = window.innerWidth < 600 ? 160 : 380;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = i * 2.399963,
      y = 1 - (i / (count - 1)) * 2,
      radius = 2.1 + Math.sin(i * 12.34) * 0.55,
      radial = Math.sqrt(1 - y * y);
    positions.set(
      [
        Math.cos(theta) * radial * radius,
        y * radius,
        Math.sin(theta) * radial * radius,
      ],
      i * 3,
    );
  }
  const particlesGeometry = new BufferGeometry();
  particlesGeometry.setAttribute("position", new BufferAttribute(positions, 3));
  const particlesMaterial = new PointsMaterial({
    color: 0xffb883,
    size: 0.018,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
  });
  const particles = new Points(particlesGeometry, particlesMaterial);
  group.add(particles);
  scene.add(new AmbientLight(0xf8dcc8, 0.65));
  const light = new DirectionalLight(0xffe3c5, 3.2);
  light.position.set(3, 4, 5);
  scene.add(light);
  const rim = new PointLight(0xff541e, 4, 15);
  rim.position.set(-3, -1, 2);
  scene.add(rim);
  const fill = new DirectionalLight(0x8195a8, 1.4);
  fill.position.set(-3, 2, -3);
  scene.add(fill);
  let targetX = 0,
    targetY = 0,
    time = 0,
    frame,
    visible = true,
    previous = 0;
  const render = () => renderer.render(scene, camera);
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  visibility.observe(host);
  const move = (event) => {
    const bounds = host.getBoundingClientRect();
    targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.65;
    targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.4;
  };
  const leave = () => {
    targetX = 0;
    targetY = 0;
  };
  const resetTime = () => {
    previous = 0;
  };
  host.addEventListener("pointermove", move);
  host.addEventListener("pointerleave", leave);
  document.addEventListener("visibilitychange", resetTime);
  const tick = (now) => {
    frame = requestAnimationFrame(tick);
    const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
    previous = now;
    if (!visible || document.hidden || controls.current.paused) return;
    time += delta;
    group.rotation.y = time * 0.11 + targetX;
    group.rotation.x += (targetY - group.rotation.x) * 0.025;
    group.rotation.z = Math.sin(time * 0.18) * 0.08;
    particles.rotation.y = -time * 0.045;
    render();
  };
  frame = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    visibility.disconnect();
    host.removeEventListener("pointermove", move);
    host.removeEventListener("pointerleave", leave);
    document.removeEventListener("visibilitychange", resetTime);
    knotGeometry.dispose();
    knotMaterial.dispose();
    wireGeometry.dispose();
    wireMaterial.dispose();
    orbitGeometries.forEach((geometry) => geometry.dispose());
    orbitMaterial.dispose();
    particlesGeometry.dispose();
    particlesMaterial.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
