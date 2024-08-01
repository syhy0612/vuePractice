# ViewSTL使用指南

> 本使用指南具体来源于ViewSTL官方文档介绍，会有错误地方是难免的，具体参考[官方文档](https://www.viewstl.com/plugin/)为准。
>
> 在线演示地址：https://www.viewstl.com/
>
> 源码地址：https://github.com/omrips/viewstl

## 简介

ViewSTL JavaScript Plugin 是一个用于在网页上显示和操作 STL、OBJ 和 3MF 文件的插件。它基于 THREE.js 库，无需服务器端脚本。

## 下载和安装

您可以从 ViewSTL 的官方网站下载插件，并将其 JavaScript 文件上传到您的服务器。

```javascript
<!-- 在HTML页面中引入插件 -->
<script src="path_to/stl_viewer.min.js"></script>
```

## 基本用法

在 HTML 页面中引入 `stl_viewer.min.js` 文件，并创建一个容器元素用于加载模型。

```html
<!-- 创建一个容器并初始化 StlViewer -->
<div id="stl_container"></div>
<script>
    var stl_viewer = new StlViewer(document.getElementById("stl_container"), {
        models: [
            {id: 1, filename: "path_to_model/model.stl"}
        ]
    });
</script>
```

## 参数配置

- `bgcolor`: 容器的背景颜色。

```javascript
// 设置背景颜色为白色
stl_viewer.set_bg_color("#FFFFFF");
```

- `camera_position`: 摄像机的初始位置。

```javascript
// 设置摄像机位置到 (100, 100, 100)
stl_viewer.set_camera_position({x: 100, y: 100, z: 100});
```

- `models`: 要加载的模型数组。

```javascript
// 添加一个新的红色半透明模型
stl_viewer.add_model({
    id: 'new_model',
    filename: 'path_to_new_model.stl',
    color: '#FF5733',
    opacity: 0.5
});
```

## 方法

- `add_model({id, filename})`: 添加一个新模型。

```javascript
// 添加一个新模型到场景
stl_viewer.add_model({id: 2, filename: "path_to_model/another_model.stl"});
```

- `remove_model(id)`: 移除一个模型。

```javascript
// 从场景中移除 ID 为 1 的模型
stl_viewer.remove_model(1);
```

- `set_display(id, type)`: 设置模型的显示类型。

```javascript
// 将 'new_model' 的显示类型设置为 'flat'
stl_viewer.set_display('new_model', 'flat');
```

- `set_color(id, color)`: 设置模型颜色。

```javascript
// 将 'new_model' 的颜色设置为绿色
stl_viewer.set_color('new_model', '#00FF00');
```

- `set_opacity(id, opacity)`: 设置模型透明度。

```javascript
// 将 'new_model' 的透明度设置为 75%
stl_viewer.set_opacity('new_model', 0.75);
```

- `set_position(id, x, y, z)`: 设置模型位置。

```javascript
// 将 'new_model' 移动到位置 (50, 50, 50)
stl_viewer.set_position('new_model', {x: 50, y: 50, z: 50});
```

- `set_scale(id, scale)`: 设置模型缩放比例。

```javascript
// 将 'new_model' 放大 1.5 倍
stl_viewer.set_scale('new_model', 1.5);
```

- `set_edges(id, flag)`: 设置模型边缘显示。

```javascript
// 显示 'new_model' 的边缘
stl_viewer.set_edges('new_model', true);
```

- `set_grid(flag, size, divisions)`: 设置网格显示。

```javascript
// 显示一个 100x100 大小，10 等分的网格
stl_viewer.set_grid(true, 100, 10);
```

- `rotate(id, angle_x, angle_y, angle_z)`: 旋转模型。

```javascript
// 将 'new_model' 绕 X 轴旋转 90 度，绕 Z 轴旋转 45 度
stl_viewer.rotate('new_model', {angle_x: 90, angle_y: 0, angle_z: 45});
```

- `animate_model(id, animation)`: 对模型应用动画。

```javascript
// 对 'new_model' 应用 'spin' 动画
stl_viewer.animate_model('new_model', 'spin');
```

- `get_camera_state()`: 获取摄像机状态。

```javascript
// 获取并打印当前摄像机状态
console.log(stl_viewer.get_camera_state());
```

- `set_camera_state(state)`: 设置摄像机状态。

```javascript
// 设置摄像机位置和目标点
stl_viewer.set_camera_state({position: {x: 100, y: 100, z: 100}, target: {x: 0, y: 0, z: 0}});
```

- `set_auto_rotate(flag)`: 设置自动旋转。

```javascript
// 启用自动旋转
stl_viewer.set_auto_rotate(true);
```

- `set_mouse_zoom(flag)`: 设置鼠标滚轮缩放。

```javascript
// 启用鼠标滚轮缩放
stl_viewer.set_mouse_zoom(true);
```

- `set_auto_resize(flag)`: 设置自动调整容器尺寸。

```javascript
// 启用自动调整容器尺寸
stl_viewer.set_auto_resize(true);
```

- `clean()`: 清除所有模型。

```javascript
// 清除场景中的所有模型
stl_viewer.clean();
```

- `set_on_model_mouseclick(function)`: 设置模型点击事件。

```javascript
// 设置模型点击事件处理函数
stl_viewer.set_on_model_mouseclick(function (model_id) {
    alert('Model clicked: ' + model_id);
});
```

- `set_drag_and_drop(flag)`: 设置拖放加载模型。

```javascript
// 启用拖放加载模型功能
stl_viewer.set_drag_and_drop(true);
```

- `set_model_units(units, scale)`: 设置模型单位和比例。

```javascript
// 设置模型单位为毫米，比例为 1:1
stl_viewer.set_model_units('mm', 1);
```

- `dispose()`: 释放插件资源。

```javascript
// 释放插件占用的资源
stl_viewer.dispose();
```

## 事件

- `ready_callback`: THREE.js 文件加载完成时触发。

```javascript
// 设置 THREE.js 加载完成的回调函数
stl_viewer.ready_callback = function () {
    console.log("THREE.js library loaded.");
};
```

- `all_loaded_callback`: 所有模型加载完成时触发。

```javascript
// 设置所有模型加载完成的回调函数
stl_viewer.all_loaded_callback = function () {
    console.log("All models have been loaded.");
};
```

- `loading_progress_callback`: 模型加载过程中触发。

```javascript
// 设置加载进度的回调函数
stl_viewer.loading_progress_callback = function (progress) {
    console.log("Loading progress: " + progress + "%");
};
```

- `model_loaded_callback`: 单个模型加载完成时触发。

```javascript
// 设置单个模型加载完成的回调函数
stl_viewer.model_loaded_callback = function (model_id) {
    console.log("Model " + model_id + " loaded.");
};
```

- `load_error_callback`: 加载错误时触发。

```javascript
// 设置加载错误的回调函数
stl_viewer.load_error_callback = function (error) {
    console.error("Load error: " + error);
};
```

- `on_model_drop`: 模型拖放到场景中时触发。

```javascript
// 设置模型拖放到场景的回调函数
stl_viewer.on_model_drop = function (model_id) {
    console.log("Model " + model_id + " dropped into scene.");
};
```

- `on_model_mouseclick`: 模型被点击时触发。

```javascript
// 设置模型点击的回调函数
stl_viewer.on_model_mouseclick = function (model_id) {
    console.log("Model " + model_id + " clicked.");
};
```

## 保存/加载方法

- `get_stl_bin(id)`: 获取模型的STL二进制数据。

```javascript
// 获取 ID 为 0 的模型的 STL 二进制数据
var model_binary_data = stl_viewer.get_stl_bin(0);
```

- `download_model(id, filename)`: 下载模型为STL文件。

```javascript
// 下载 ID 为 0 的模型，并命名为 'my_model.stl'
stl_viewer.download_model(0, 'my_model.stl');
```

- `get_vsj(as_js_obj)`: 获取当前场景状态。

```javascript
// 获取场景状态为 JavaScript 对象和 JSON 字符串
var scene_status = stl_viewer.get_vsj(true); // 返回JavaScript对象
var scene_json = stl_viewer.get_vsj(false); // 返回JSON字符串
```

- `download_vsj(filename)`: 下载当前场景状态为JSON文件。

```javascript
// 下载当前场景状态为 'my_scene.vsj'
stl_viewer.download_vsj('my_scene.vsj');
```

- `load_vsj(filename)`: 从JSON文件加载场景。

```javascript
// 从 'my_scene.vsj' 文件加载场景
stl_viewer.load_vsj('my_scene.vsj');
```

- `get_vsb()`: 获取包含二进制数据的场景状态。

```javascript
// 获取包含二进制数据的场景状态
var vsb = stl_viewer.get_vsb();
```

- `get_vsb_blob()`: 以Blob格式获取场景状态。

```javascript
// 获取场景状态的 Blob 格式
stl_viewer.get_vsb_blob('1.vsb').then(function (content) {
    console.log("my vsb as blob: ", content);
});
```

- `download_vsb(filename)`: 下载场景状态为二进制文件。

```javascript
// 下载场景状态为 'my_scene.vsb'
stl_viewer.download_vsb('my_scene.vsb');
```

- `load_vsb(filename)`: 从二进制文件加载场景。

```javascript
// 从 'my_scene.vsb' 文件加载场景
stl_viewer.load_vsb('my_scene.vsb');
```
