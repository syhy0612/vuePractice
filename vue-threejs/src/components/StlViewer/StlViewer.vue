<template>
  <div class="stl-viewer-container">
    <div ref="stlContainer" class="stl-container"></div>
    <div v-if="error" class="error-message">{{ error }}</div>
    <div class="controls">
      <input type="color" v-model="backgroundColor" @change="updateBackground"/>
      <label>
        <input type="checkbox" v-model="isTransparent" @change="updateBackground"/>
        透明背景
      </label>
      <input type="file" @change="onFileSelected" accept=".stl"/>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted, watch} from 'vue';

export default {
  name: 'StlViewer',
  props: {
    initialModelUrl: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const stlContainer = ref(null);
    const backgroundColor = ref('#ffffff');
    const isTransparent = ref(false);
    const error = ref('');
    let stlViewer = null;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      const scripts = [
        'three.min.js',
        'webgl_detector.js',
        'Projector.js',
        'CanvasRenderer.js',
        'OrbitControls.js',
        'stl_viewer.min.js',
        'load_stl.min.js'
      ];

      for (const script of scripts) {
        try {
          // 使用 Vite 的动态导入来获取正确的 URL
          const url = new URL(`./stl-viewer-libs/${script}`, import.meta.url).href;
          await loadScript(url);
          console.log(`Loaded ${script}`);
        } catch (e) {
          console.error(`Failed to load ${script}`, e);
          error.value = `Failed to load ${script}: ${e.message}`;
          throw new Error(`Failed to load ${script}`);
        }
      }
    };

    const initStlViewer = () => {
      if (stlContainer.value && window.StlViewer) {
        console.log('Initializing StlViewer');
        try {
          stlViewer = new StlViewer(stlContainer.value, {
            models: props.initialModelUrl ? [{id: 1, filename: props.initialModelUrl}] : [],
            load_three_files: new URL('./stl-viewer-libs/', import.meta.url).href,
            bg_color: isTransparent.value ? 'transparent' : backgroundColor.value
          });
          console.log('StlViewer initialized successfully');
        } catch (e) {
          console.error('Error initializing StlViewer', e);
          error.value = 'Failed to initialize StlViewer: ' + e.message;
        }
      } else {
        console.error('StlViewer or container not available');
        error.value = 'StlViewer or container not available';
      }
    };

    const updateBackground = () => {
      if (stlViewer) {
        stlViewer.set_bg_color(isTransparent.value ? 'transparent' : backgroundColor.value);
      }
    };

    const onFileSelected = (event) => {
      const file = event.target.files[0];
      if (file && stlViewer) {
        stlViewer.clean();
        stlViewer.add_model({id: 1, local_file: file});
      } else if (!stlViewer) {
        error.value = 'StlViewer not initialized';
      }
    };

    onMounted(async () => {
      try {
        await loadAllScripts();
        initStlViewer();
      } catch (e) {
        console.error('Failed to setup StlViewer', e);
        error.value = 'Failed to setup StlViewer: ' + e.message;
      }
    });

    onUnmounted(() => {
      if (stlViewer) {
        stlViewer.dispose();
      }
    });

    watch(() => props.initialModelUrl, (newUrl) => {
      if (stlViewer && newUrl) {
        stlViewer.clean();
        stlViewer.add_model({id: 1, filename: newUrl});
      }
    });

    return {
      stlContainer,
      backgroundColor,
      isTransparent,
      updateBackground,
      onFileSelected,
      error
    };
  }
}
</script>

<style scoped>
.stl-viewer-container {
  width: 100%;
  height: 500px;
  position: relative;
  border: 1px solid #ccc;
}

.stl-container {
  width: 100%;
  height: 100%;
}

.controls {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
}

.error-message {
  color: red;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}
</style>