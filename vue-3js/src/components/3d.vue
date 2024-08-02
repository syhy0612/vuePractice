<template>
  <div>
    <input type="file" ref="fileInput" accept=".stl" @change="handleFileSelect">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const fileInput = ref(null);
let scene, camera, renderer, controls, material, mesh;
let ambientLight, directionalLight, pointLight;
let gui, folderOptions, folderAnimations;
let gizmoVisible = ref(true);

const cameras = ['正交', '透视'];
const cameraType = ref({ type: '透视' });

const perspectiveDistance = 2.5;
const orthographicDistance = 120;

function init() {
  scene = new THREE.Scene();

  camera = makePerspectiveCamera();
  camera.position.set(0, 0, perspectiveDistance);

  renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 3;
  renderer.domElement.style.background = 'linear-gradient( 180deg, rgba( 0,0,0,1 ) 0%, rgba( 128,128,255,1 ) 100% )';
  document.body.appendChild(renderer.domElement);

  material = new THREE.MeshStandardMaterial({
    color: 0xc8c8c8,
    metalness: 0.5,
    roughness: 0.5
  });

  setupLights();

  loadSTL('./assets/stl/海信螺丝机.stl');

  setupControls();

  setupGUI();

  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener('keydown', onKeyDown);

  animate();
}

function makePerspectiveCamera() {
  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.01;
  const far = 2000;
  return new THREE.PerspectiveCamera(fov, aspect, near, far);
}

function makeOrthographicCamera() {
  const halfFovV = THREE.MathUtils.DEG2RAD * 45 * 0.5;
  const halfFovH = Math.atan((window.innerWidth / window.innerHeight) * Math.tan(halfFovV));
  const halfW = perspectiveDistance * Math.tan(halfFovH);
  const halfH = perspectiveDistance * Math.tan(halfFovV);
  const near = 0.01;
  const far = 2000;
  return new THREE.OrthographicCamera(-halfW, halfW, halfH, -halfH, near, far);
}

function setupLights() {
  ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.set(0, 5, 0);
  pointLight.castShadow = false;
  scene.add(pointLight);
}

function loadSTL(url) {
  const loader = new STLLoader();
  loader.load(url, function (geometry) {
    if (mesh) scene.remove(mesh);
    mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(0, 0, 0);
    mesh.rotation.set(-Math.PI / 2, 0, 0);
    mesh.scale.set(0.1, 0.1, 0.1);
    scene.add(mesh);

    adjustCameraToModel();
  });
}

function adjustCameraToModel() {
  const box = new THREE.Box3().setFromObject(mesh);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  camera.position.copy(center);
  camera.position.z += maxDim * 2;
  camera.lookAt(center);
  controls.target.copy(center);
  controls.update();
}

function setupControls() {
  controls = new ArcballControls(camera, renderer.domElement, scene);
  controls.addEventListener('change', render);
  controls.setGizmosVisible(gizmoVisible.value);
}

function setupGUI() {
  gui = new GUI();

  gui.add(cameraType.value, 'type', cameras).name('选择相机').onChange(setCamera);

  folderOptions = gui.addFolder('弧形球控制器参数');
  folderOptions.add(controls, 'enabled').name('启用控制器');
  folderOptions.add(controls, 'enableGrid').name('启用网格');
  folderOptions.add(controls, 'enableRotate').name('启用旋转');
  folderOptions.add(controls, 'enablePan').name('启用平移');
  folderOptions.add(controls, 'enableZoom').name('启用缩放');
  folderOptions.add(controls, 'cursorZoom').name('光标缩放');
  folderOptions.add(controls, 'adjustNearFar').name('调整近/远平面');
  folderOptions.add(controls, 'scaleFactor', 1.1, 10, 0.1).name('缩放因子');
  folderOptions.add(controls, 'minDistance', 0, 50, 0.5).name('最小距离');
  folderOptions.add(controls, 'maxDistance', 0, 50, 0.5).name('最大距离');
  folderOptions.add(controls, 'minZoom', 0, 50, 0.5).name('最小缩放');
  folderOptions.add(controls, 'maxZoom', 0, 50, 0.5).name('最大缩放');
  folderOptions.add(gizmoVisible, 'value').name('显示坐标轴').onChange(function (value) {
    controls.setGizmosVisible(value);
  });
  folderOptions.add(controls, 'copyState').name('复制状态(Ctrl+C)');
  folderOptions.add(controls, 'pasteState').name('粘贴状态(Ctrl+V)');
  folderOptions.add(controls, 'reset').name('重置');

  folderAnimations = folderOptions.addFolder('动画');
  folderAnimations.add(controls, 'enableAnimations').name('启用动画');
  folderAnimations.add(controls, 'dampingFactor', 0, 100, 1).name('阻尼');
  folderAnimations.add(controls, 'wMax', 0, 100, 1).name('角速度');

  const lightFolder = gui.addFolder('光照控制');
  lightFolder.add(ambientLight, 'intensity', 0, 1).name('环境光强度');
  lightFolder.add(directionalLight, 'intensity', 0, 1).name('平行光强度');
  lightFolder.add(pointLight, 'intensity', 0, 1).name('点光源强度');
  lightFolder.add(directionalLight.position, 'x', -10, 10).name('平行光 X');
  lightFolder.add(directionalLight.position, 'y', -10, 10).name('平行光 Y');
  lightFolder.add(directionalLight.position, 'z', -10, 10).name('平行光 Z');

  const materialFolder = gui.addFolder('材质控制');
  materialFolder.addColor(material, 'color').name('颜色');
  materialFolder.add(material, 'metalness', 0, 1).name('金属度');
  materialFolder.add(material, 'roughness', 0, 1).name('粗糙度');
  materialFolder.add(material, 'wireframe').name('线框模式');

  const shadowFolder = gui.addFolder('阴影控制');
  shadowFolder.add(directionalLight, 'castShadow').name('启用阴影');
  shadowFolder.add(directionalLight.shadow, 'bias', -0.01, 0.01, 0.0001).name('阴影偏差');

  const shadowParams = {
    shadowIntensity: 1
  };
  shadowFolder.add(shadowParams, 'shadowIntensity', 0, 1).name('阴影强度').onChange(function (value) {
    directionalLight.shadow.intensity = value;
  });

  shadowFolder.add(directionalLight.shadow.mapSize, 'width', 0, 2048).name('阴影分辨率').onChange(function (value) {
    directionalLight.shadow.mapSize.width = value;
    directionalLight.shadow.mapSize.height = value;
    directionalLight.shadow.map.dispose();
    directionalLight.shadow.map = null;
  });
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const contents = e.target.result;
      const geometry = new STLLoader().parse(contents);
      if (mesh) scene.remove(mesh);
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      adjustCameraToModel();
    };
    reader.readAsArrayBuffer(file);
  }
}

function onWindowResize() {
  if (camera.type === 'OrthographicCamera') {
    const halfFovV = THREE.MathUtils.DEG2RAD * 45 * 0.5;
    const halfFovH = Math.atan((window.innerWidth / window.innerHeight) * Math.tan(halfFovV));
    const halfW = perspectiveDistance * Math.tan(halfFovH);
    const halfH = perspectiveDistance * Math.tan(halfFovV);
    camera.left = -halfW;
    camera.right = halfW;
    camera.top = halfH;
    camera.bottom = -halfH;
  } else if (camera.type === 'PerspectiveCamera') {
    camera.aspect = window.innerWidth / window.innerHeight;
  }
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();
}

function onKeyDown(event) {
  if (event.key === 'c' && (event.ctrlKey || event.metaKey)) {
    controls.copyState();
  } else if (event.key === 'v' && (event.ctrlKey || event.metaKey)) {
    controls.pasteState();
  }
}

function setCamera(type) {
  if (type === '正交') {
    camera = makeOrthographicCamera();
    camera.position.set(0, 0, orthographicDistance);
  } else if (type === '透视') {
    camera = makePerspectiveCamera();
    camera.position.set(0, 0, perspectiveDistance);
  }
  controls.setCamera(camera);
  render();
}

onMounted(() => {
  init();
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('keydown', onKeyDown);
  if (gui) gui.destroy();
  if (renderer) renderer.dispose();
  if (controls) controls.dispose();
});
</script>

<style scoped>
body {
  margin: 0;
}

canvas {
  display: block;
}

input[type="file"] {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
}
</style>