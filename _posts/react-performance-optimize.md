---
title: "React 性能优化"
date: "2024-09-01"
author:
  name: qiqzhao
---

**rerender**

- 不可变数据结构，immutable：immer（proxy 实现，控制更新粒度）
- 组件异步加载：React.lazy，Suspense，import() -> 分 chunk
- 使用 React.meno 阻止一些不必要的更新
- useMemo， useCa
- 通过 performance 进行详细分析（一帧 16.7 毫秒）

关注点 1：**打包构建**
压缩，terser、chunk、tree-shaking、构建缓存

关注点 2：**应用层**
rerender、transform 优化，可阻止 reflow、webworker 耗时

关注点 3：**资源加载**
压缩 gzip、字体压缩（font-spider 只加载用到的字体）、oss、http2(缓存，长连接，多路复用)

关注点 4：**缓存策略**
强缓存、协商缓存、策略缓存

关注点 5：**首屏资源加载**
SSR：next 架构  
prefert、首屏方案
