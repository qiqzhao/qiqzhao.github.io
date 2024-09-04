---
title: "MySQL"
date: "2024-09-04"
author:
  name: qiqzhao
---

In Progress

### 前言

```shell
# docker 启动 mysql
docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql

# 进入 mysql container
docker exec -it 436d2fdfe14c bash

# 连接 mysql
mysql -u -p

# 输入 password
root
```

### 