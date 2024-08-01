<template>
  <div>
    <input type="file" @change="onFileSelected" accept=".stl" />
    <div>
      <label>
        背景颜色：
        <input type="color" v-model="backgroundColor" @input="updateBackgroundColor">
      </label>
      <label>
        <input type="checkbox" v-model="isTransparent" @change="toggleTransparency"> 透明背景
      </label>
    </div>
    <div ref="mountPoint" style="width: 800px; height: 600px;"></div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, watch} from 'vue';
import * as THREE from 'three';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const mountPoint = ref(null);
let scene, camera, renderer, controls;
let currentMesh = null;

const backgroundColor = ref('#ffffff');
const isTransparent = ref(true);

function initScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, mountPoint.value.offsetWidth / mountPoint.value.offsetHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize(mountPoint.value.offsetWidth, mountPoint.value.offsetHeight);
  renderer.setClearColor(0x000000, 0); // 初始设置为透明
  mountPoint.value.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  camera.position.z = 100;

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function loadSTL(file) {
  const loader = new STLLoader();
  const reader = new FileReader();

  reader.onload = function (e) {
    const geometry = loader.parse(e.target.result);
    const material = new THREE.MeshPhongMaterial({color: 0x999999, specular: 0x101010});
    const mesh = new THREE.Mesh(geometry, material);

    geometry.computeBoundingBox();
    const center = geometry.boundingBox.getCenter(new THREE.Vector3());
    mesh.position.sub(center);

    if (currentMesh) {
      scene.remove(currentMesh);
    }

    scene.add(mesh);
    currentMesh = mesh;

    const box = new THREE.Box3().setFromObject(mesh);
    const size = box.getSize(new THREE.Vector3());
    const distance = Math.max(size.x, size.y, size.z) * 2;
    camera.position.set(distance, distance, distance);
    camera.lookAt(scene.position);
    controls.update();
  };

  reader.readAsArrayBuffer(file);
}

function onFileSelected(event) {
  const file = event.target.files[0];
  if (file) {
    loadSTL(file);
  }
}

function updateBackgroundColor() {
  if (!isTransparent.value) {
    renderer.setClearColor(new THREE.Color(backgroundColor.value), 1);
  }
}

function toggleTransparency() {
  if (isTransparent.value) {
    renderer.setClearColor(0x000000, 0);
  } else {
    renderer.setClearColor(new THREE.Color(backgroundColor.value), 1);
  }
}

watch(isTransparent, toggleTransparency);

onMounted(() => {
  initScene();
});

onUnmounted(() => {
  if (renderer) {
    renderer.dispose();
  }
  if (controls) {
    controls.dispose();
  }
});
</script>