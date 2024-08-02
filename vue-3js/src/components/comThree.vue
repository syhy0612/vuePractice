<template>
  <div class="stl-viewer">
    <div class="render-area" ref="renderArea"></div>
    <el-card class="control-panel">
      <!-- 文件上传部分 -->
      <el-upload
          class="upload-demo"
          drag
          action="#"
          :auto-upload="false"
          :on-change="handleFileUpload"
          :on-remove="handleFileRemove"
          :limit="1"
          accept=".stl"
      >
        <el-icon class="el-icon--upload">
          <upload-filled/>
        </el-icon>
        <div class="el-upload__text">
          拖拽文件到此处或 <em>点击上传</em>
        </div>
      </el-upload>

      <el-divider>模型设置</el-divider>

      <el-form label-position="top">
        <!-- 颜色选择器并排显示 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="模型颜色">
              <el-color-picker v-model="modelColor" @change="updateModelColor" show-alpha/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="背景颜色">
              <el-color-picker v-model="backgroundColor" @change="updateBackgroundColor" show-alpha/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="金属度">
          <el-slider v-model="metalness" :min="0" :max="1" :step="0.1" @change="updateMaterial"/>
        </el-form-item>
        <el-form-item label="粗糙度">
          <el-slider v-model="roughness" :min="0" :max="1" :step="0.1" @change="updateMaterial"/>
        </el-form-item>

        <el-divider>光照设置</el-divider>

        <!-- 环境光 -->
        <el-form-item label="环境光强度">
          <el-slider v-model="ambientLightIntensity" :min="0" :max="2" :step="0.1" @change="updateLights"/>
        </el-form-item>

        <!-- 平行光 -->
        <el-form-item label="平行光强度">
          <el-slider v-model="directionalLightIntensity" :min="0" :max="2" :step="0.1" @change="updateLights"/>
        </el-form-item>
        <el-form-item label="平行光位置">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="X">
                <el-slider v-model="directionalLightPosition.x" :min="-5" :max="5" :step="0.1"
                           @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Y">
                <el-slider v-model="directionalLightPosition.y" :min="-5" :max="5" :step="0.1"
                           @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Z">
                <el-slider v-model="directionalLightPosition.z" :min="-5" :max="5" :step="0.1"
                           @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>

        <!-- 点光源 -->
        <el-form-item label="点光源强度">
          <el-slider v-model="pointLightIntensity" :min="0" :max="2" :step="0.1" @change="updateLights"/>
        </el-form-item>
        <el-form-item label="点光源位置">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="X">
                <el-slider v-model="pointLightPosition.x" :min="-5" :max="5" :step="0.1"
                           @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Y">
                <el-slider v-model="pointLightPosition.y" :min="-5" :max="5" :step="0.1"
                           @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Z">
                <el-slider v-model="pointLightPosition.z" :min="-5" :max="5" :step="0.1"
                           @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>

        <!-- 聚光灯 -->
        <el-form-item label="聚光灯强度">
          <el-slider v-model="spotLightIntensity" :min="0" :max="2" :step="0.1" @change="updateLights"/>
        </el-form-item>
        <el-form-item label="聚光灯位置">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="X">
                <el-slider v-model="spotLightPosition.x" :min="-5" :max="5" :step="0.1" @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Y">
                <el-slider v-model="spotLightPosition.y" :min="-5" :max="5" :step="0.1" @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Z">
                <el-slider v-model="spotLightPosition.z" :min="-5" :max="5" :step="0.1" @change="updateLightPositions"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog v-model="loadingDialogVisible" title="加载中" width="30%" center :close-on-click-modal="false">
      <el-progress type="circle" :percentage="loadingProgress"/>
      <div v-if="showLongLoadingMessage" style="margin-top: 20px;">
        文件较大，加载可能需要一些时间。请耐心等待...
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import * as THREE from 'three';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {ElMessage} from 'element-plus';
import {UploadFilled} from '@element-plus/icons-vue';

// 渲染区域引用
const renderArea = ref(null);

// 模型和背景颜色
const modelColor = ref('#aaaaaa');
const backgroundColor = ref('#8C8C8C');

// 材质属性
const metalness = ref(0.5);
const roughness = ref(0.5);

// 光照强度
const ambientLightIntensity = ref(0.4);
const directionalLightIntensity = ref(0.5);
const pointLightIntensity = ref(0.5);
const spotLightIntensity = ref(0.5);

// 光照位置
const directionalLightPosition = ref({x: 1, y: 1, z: 1});
const pointLightPosition = ref({x: 2, y: 2, z: 2});
const spotLightPosition = ref({x: -2, y: 2, z: 2});

// 加载对话框状态
const loadingDialogVisible = ref(false);
const loadingProgress = ref(0);
const showLongLoadingMessage = ref(false);

// Three.js 相关变量
let scene, camera, renderer, mesh, controls, ambientLight, directionalLight, pointLight, spotLight;

// 组件挂载时初始化场景
onMounted(() => {
  initScene();
  updateBackgroundColor();
});

// 初始化Three.js场景
function initScene() {
  // 创建场景、相机和渲染器
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, renderArea.value.clientWidth / renderArea.value.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(renderArea.value.clientWidth, renderArea.value.clientHeight);
  renderArea.value.appendChild(renderer.domElement);

  // 添加轨道控制器
  controls = new OrbitControls(camera, renderer.domElement);

  // 添加环境光
  ambientLight = new THREE.AmbientLight(0x404040, ambientLightIntensity.value);
  scene.add(ambientLight);

  // 添加平行光
  directionalLight = new THREE.DirectionalLight(0xffffff, directionalLightIntensity.value);
  directionalLight.position.set(directionalLightPosition.value.x, directionalLightPosition.value.y, directionalLightPosition.value.z);
  scene.add(directionalLight);

  // 添加点光源
  pointLight = new THREE.PointLight(0xffffff, pointLightIntensity.value);
  pointLight.position.set(pointLightPosition.value.x, pointLightPosition.value.y, pointLightPosition.value.z);
  scene.add(pointLight);

  // 添加聚光灯
  spotLight = new THREE.SpotLight(0xffffff, spotLightIntensity.value);
  spotLight.position.set(spotLightPosition.value.x, spotLightPosition.value.y, spotLightPosition.value.z);
  spotLight.angle = Math.PI / 6;
  scene.add(spotLight);

  // 创建默认立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: modelColor.value,
    metalness: metalness.value,
    roughness: roughness.value
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 开始动画循环
  animate();
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// 处理文件上传
function handleFileUpload(file) {
  if (file) {
    loadingDialogVisible.value = true;
    loadingProgress.value = 0;
    showLongLoadingMessage.value = false;

    const startTime = Date.now();
    const reader = new FileReader();

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        loadingProgress.value = Math.round((event.loaded / event.total) * 100);
      }
      if (Date.now() - startTime > 5000 && !showLongLoadingMessage.value) {
        showLongLoadingMessage.value = true;
      }
    };

    reader.onload = (e) => {
      const stlLoader = new STLLoader();
      const geometry = stlLoader.parse(e.target.result);
      const material = new THREE.MeshStandardMaterial({
        color: modelColor.value,
        metalness: metalness.value,
        roughness: roughness.value
      });

      // 移除旧模型
      if (mesh) scene.remove(mesh);

      // 添加新模型
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // 居中模型
      const box = new THREE.Box3().setFromObject(mesh);
      const center = box.getCenter(new THREE.Vector3());
      mesh.position.sub(center);

      // 调整相机
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      camera.position.set(0, 0, maxDim * 2);
      camera.lookAt(0, 0, 0);

      controls.update();
      loadingDialogVisible.value = false;
      ElMessage.success('STL文件加载成功！模型已在场景中显示。');
    };
    reader.readAsArrayBuffer(file.raw);
  }
}

// 处理文件移除
function handleFileRemove() {
  // 移除当前模型
  if (mesh) {
    scene.remove(mesh);
    mesh = null;
  }

  // 重置为默认立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: modelColor.value,
    metalness: metalness.value,
    roughness: roughness.value
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 重置相机位置
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);
  controls.update();

  ElMessage.info('模型已移除，显示默认立方体。');
}

// 更新模型颜色
function updateModelColor() {
  if (mesh) {
    mesh.material.color.setStyle(modelColor.value);
  }
}

// 更新背景颜色
function updateBackgroundColor() {
  scene.background = new THREE.Color(backgroundColor.value);
}

// 更新材质属性
function updateMaterial() {
  if (mesh) {
    mesh.material.metalness = metalness.value;
    mesh.material.roughness = roughness.value;
  }
}

// 更新光照强度
function updateLights() {
  ambientLight.intensity = ambientLightIntensity.value;
  directionalLight.intensity = directionalLightIntensity.value;
  pointLight.intensity = pointLightIntensity.value;
  spotLight.intensity = spotLightIntensity.value;
}

// 更新光照位置
function updateLightPositions() {
  directionalLight.position.set(
      directionalLightPosition.value.x,
      directionalLightPosition.value.y,
      directionalLightPosition.value.z
  );
  pointLight.position.set(
      pointLightPosition.value.x,
      pointLightPosition.value.y,
      pointLightPosition.value.z
  );
  spotLight.position.set(
      spotLightPosition.value.x,
      spotLightPosition.value.y,
      spotLightPosition.value.z
  );
}

// 监听颜色变化
watch(modelColor, updateModelColor);
watch(backgroundColor, updateBackgroundColor);

</script>


<style scoped>
.stl-viewer {
  display: flex;
  height: 100vh;
}

.render-area {
  flex: 3;
}

.control-panel {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.el-form-item {
  margin-bottom: 20px;
}
</style>