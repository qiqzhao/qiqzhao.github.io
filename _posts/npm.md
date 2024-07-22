---
title: "NPM"
date: "2024-05-06"
author:
  name: qiqzhao
---

### 介绍
npm(Node Package Manager)Node 包管理器

是 Node 默认的、以 JavaScript 编写的软件包管理系统

### 安装
安装 node 后，会默认安装 npm，npm本身也是基于 node 开发的软件

推荐 node 安装，使用 nvm(Node Version Manager)
```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

or 

$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

$ nvm install 22

$ node -v 
v22.1.0
```

#### 镜像设置与查看
设置 taobao 镜像
```shell
npm config set registry https://registry.npm.taobao.ort --global

npm config set disturl https://npm.taobao.org/dist --global
```

设置当前地址
```shell
npm config set registry https://registry.npmjs.org
```

查看镜像的配置结果
```shell
npm config get registry

npm config get disturl
```

使用 nrm 工具切换 taobao 镜像
```shell
npx nrm use taobao
```

切回官方源
```shell
npx nrm use npm
```

### 使用

```shell
npm -v # 查看版本，

npm install <module name> # 安装模块

npm list -g # 查看所有全局安装的模块

npm list react # 查看某个模块的版本号

npm update <module name> # 更新包

npm uninstall <module name> # 卸载包

npm -g install npm@10.7.0 # @后跟版本号，更新 npm 版本

npm i -save <module name> # -save 在 dependencies 节点写入依赖
npm i -save-dev <module name> # -save-dev 在devDependencies 节点写入依赖

```

- dependencies：运行时的依赖，开发后，即生成环境下还需要用的依赖

- devDependencies：开发时的依赖，里面的模块是开发时用的，发布时用不到它。比如gulp、压缩 css、js 的模块

### package.json

```json
{
  "name": "demo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

- name - 包名
- verion - 版本号
- description - 描述
- homepage - 官网 url
- author - 作者
- contributors - 贡献者
- dependecies - 依赖包列表
- respository - 代码存放的地方的类型，git、svn
- main - 指定程序主入口文件
- keywords - 关键字

版本号说明:
`10.7.0` - 安装指定的 10.7.0 版本
`~10.7.0` - 安装 10.7.x 最新版本
`^10.7.0` - 安装 10.x.x 最新版本


### yarn

yarn 由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具，**为了弥补 npm 的一些缺陷而出现的**，npm5 以下会出现的问题：
1. npm install 的时候巨慢，特别是新项目拉下来要等半天，删除 node_modules 重新 install 的时候依旧如此
2. 同一个项目，多人开发时，由于安装的版本不一致出现bug

#### yarn 安装

```shell
npm install -g yarn
```

#### 基本使用

``` shell
yarn init # 初始化，同 npm init

yarn install # 安装 package.json 中所有依赖

yarn install --flat # 安装一个包的单一版本

yarn install --force # 强制重新下载所有包

yarn install --production # 只安装 dependencies 里

yarn install --no-lockfile # 不读取或生成 yarn.lock

yarn install --pure-lockfile # 不生成 yarn.lock

yarn add [package] # 添加依赖包

yarn add [package]@[version] # 安装指定版本的包

yarn add [package]#[tag] # 安装某个 tag

yarn add --dev/-D # 加到 devDependencies

yarn add --peer/-P # 加到 peerDependencies

yarn add --optional/--O # 加到 optionalDependencies
```

### pnpm

一个功能强大、高效的包管理工具，可以大大提高前端项目的构建和依赖管理效率

#### 常用命令

```shell
安装依赖: pnpm install <package>
全局安装: pnpm add -g <package>
更新依赖: pnpm update <package>
移除依赖: pnpm remove <package>
创建项目: pnpm create <template>
运行脚本: pnpm run <script>
```

### 对比npm、yarn、pnpm

1. 安装速度
  - pnpm：使用硬链接安装依赖，速度最快
  - yarn：采用并行下载的方式，比 npm 快
  - npm：在每个项目中都安装完整的依赖树，速度相对较慢

2. 磁盘空间使用
  - pnpm：通过共享相同的包内容，磁盘空间使用最少
  - yarn：磁盘空间介于 pnpm 和 npm 之间
  - npm：在每个项目中按照完整的依赖树，磁盘空间使用较高

3. 依赖管理
  - pnpm：使用 CAS 方式管理依赖，可以更好地处理依赖冲突和版本问题
  - yarn：plugin play 特性也能很好的管理依赖
  - npm：管理机制相对简单，在复杂场景下可能会遇到问题

4. 缓存机制
  - pnpm：有更好的缓存机制，可以更快地从缓存中获取依赖
  - yarn：offline mirror 功能也提供了较好的缓存支持
  - npm：相对简单

5. 跨平台兼容性
  - pnpm 和 yarn 在 Windows、macOS、Linux 有良好兼容性
  - npm：有较好跨平台兼容性，但某些情况可能会遇到问题

6. 命令行操作
  - pnpm、yarn、npm 的命令行操作都较为相似，可以容易地切换