---
title: "从0开始做一个自己专属组件库"
date: "2024-08-27"
author:
  name: qiqzhao
---

## 介绍

实现：React + vite

文档：storybook + vite

## 步骤

1. 创建空文件夹
2. 初始化`npm init -y`
3. 创建 components 文件夹，[参考](https://github.com/choco-ui/choco-ui)
4. npm 登录 `npm login`
5. 发布 `npm publish`

此时发布的包是源代码，没有经过打包压缩的，如需要打包压缩，可继续

6. 创建 vite.config.js

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    cache: false,
    lib: {
      entry: "components/index.js",
      name: "choco-ui",
      fileName: (format) => `choco-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
```

7. 修改 package.json

```
  "main": "./dist/choco-ui-library.umd.js",
  "module": "./dist/choco-ui-library.es.js",
  "files": [
    "dist"
  ],

  //...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "vite build",
  },

```

8. 打包 `npm run build`
9. 发布 `npm run publish`

## 使用

- [参考文档](https://github.com/choco-ui/choco-ui/blob/master/readme.md)

- [例子](https://github.com/choco-ui/ui-demo)
