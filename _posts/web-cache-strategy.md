---
title: "Web 缓存策略"
date: "2024-08-30"
author:
  name: qiqzhao
---

### 强缓存

- Expire：客户端时间决定失败
- Cache-Control：max-age 指定时间

### 协商缓存

- 响应：Last-Modified
- 请求： If-Modify-Since 304

--

- 响应：Etag（值为 hash）
- 请求： If-None-Match 304

### 策略缓存

service-worker：拦截前端资源请求，并约定缓存请求策略

- 仅限缓存：直接走缓存
- 仅限网络：直接走 network
- 缓存优先：命中缓存后，将缓存返回给前端，然后发请求，如果发生变化，再将缓存更新
- 网络优先
