# vue-HIMIT-7.26

这是一个尝试重新尝试复刻OQC看板的项目

## 项目启动

### 使用淘宝镜像

```sh
npm config set registry https://registry.npm.taobao.org
```

### 安装项目依赖

```sh
npm install
```

### 运行开发环境

```sh
npm run dev
```

### 打包项目

```sh
npm run build
```

## 复刻需要添加的依赖

### 生产环境依赖安装

```sh
# 安装 echarts
npm install echarts

# 安装 element-plus
npm install element-plus

# 安装 router
npm install router

# 安装 vue
npm install vue
```

### 开发环境依赖安装

```sh
# 安装 lib-flexible
npm install -D lib-flexible

# 安装 postcss-pxtorem
npm install -D postcss-pxtorem

# 安装 sass
npm install -D sass

# 安装 unplugin-vue-components
npm install -D unplugin-vue-components
```

### 手动修改淘宝适配依赖文件

> 手动修改 node_modules/lib-flexible/flexible.js 文件，修改refreshRem() 函数

```sh
function refreshRem(){
  var width = docEl.getBoundingClientRect().width;
  if (width / dpr > 540) {
      width = 540 * dpr;
  }
  var rem = width / 10;
  docEl.style.fontSize = rem + 'px';
  flexible.rem = win.rem = rem;
}
```