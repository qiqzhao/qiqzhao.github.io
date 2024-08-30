---
title: "Docker"
date: "2024-08-29"
author:
  name: qiqzhao
---

### Docker 命令

#### 镜像

- docker search 查询
- docker pull 下载
- docker images 镜像列表
- docker rmi 删除镜像

#### 容器

- docker run 运行容器
- docker ps 查看正在运行的容器

- docker stop 停止容器
- docker start 启动
- docker restart 重启
- docker stats 查看状态
- docker logs 查看日志
- docker exec 进入容器
- docker rm 删除容器

**docker ps**

- docker ps -a 查看所有的容器
- docker ps -aq 只打印所有的 id

**docker run**

语法：

```shell
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

```shell
# 简单例子
docker run nginx

# 复杂例子
docker run -d --name mynignx -p 80:80 nginx -p 90
```

-d 后台启动  
--name 命名  
-p 端口映射(本机端口：容器端口)

**docker exec**

语法：docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

```shell
docker exec -it mynignx bash
```

-it 交互  
bash bash 控制台

#### 保存镜像

- docker commit 提交

  ```shell
  docker commit -m "commit msg" mynginx mynginx:v1.0
  ```

- docker save 保存镜像成文件

  ```shell
  docker save mynginx mynginx:v1.0
  ```

  -o 导出成 tar 包

- docker load 加载

  ```shell
  docker load -i mynginx.tar
  ```

#### 分享

- docker login 登录
- docker tag 命名
- docker push 推送

#### 批量删除

```shell
docker rm -f $(docker ps -aq)
```

### Docker 存储

#### 挂载

```shell
docker run -d -p 80:80 -v /app/nghtml:/usr/share/nginx/html --name app nginx
```

-v /app/nghtml:/usr/share/nginx/html  
主机需要挂载的目录：容器内目录

#### 卷映射

```shell
docker run -d -p 80:80 -v /app/nghtml:/usr/share/nginx/html -v ngconf:/etc/nginx --name app01 nginx
```

-v ngconf:/etc/nginx  
卷名：容器  
卷统一放在： /var/lib/docker/volumes/[volume-name]

**卷命令**  
docker volume ls 查看所有的卷
docker volume create 创建卷
docker volume insepect 查看某个卷的详细信息

### Docker 网络

> 构建集群

例子：容器内部访问

```shell
# 启动 app1，app2
docker run -d -p 88:80 --name app1 nginx

docker run -d -p 99:80 --name app2 nginx

# 进入 app1
docker exec -it app1 bash

# 访问 app2
curl ip:99
```

快捷访问

```shell
# 查看 app 的 ip
dcoker inspect app1/app2

# 结果
# ...
 "Networks": {
    "bridge": {
      # ...
      "IPAddress": "172.17.0.2",
      # ...
    }
  }
```

**docker network**

```shell
# 创建网络
docker network create mynet

# 查看网络
docker network ls

# 结果
NETWORK ID     NAME      DRIVER    SCOPE
9c2d31adf935   bridge    bridge    local   # docker 0 默认桥接网络
91a1ff6a8773   host      host      local
1e74272bdcd9   mynet     bridge    local
07931a79c706   none      null      local

# 启动 app1
docker run -d -p 88:80 --name app1 --network mynet nginx

# 启动 app2
docker run -d -p 99:80 --name app2 --network mynet nginx

# 进入 app1

docker exec -it app bash

# 访问 app2（此时端口号是容器端口）
curl http://app2:80
```

### Docker Compose

#### 命令

- docker compose up -d 上线
- docker compose down 下线
- docker compose start x1 x2 x3 启动，x1,x2,x3 为 yml 指定名字
- docker compose stop x1 x3 停止,x1,x3 为 yml 指定名字
- docker compose start x2=3 扩容，启动三个实例

#### 语法

- name 名字
- services 服务
- networks 网络
- volumes 卷
  // 可不写
- configs 配置
- secrets 密钥

例子

```yaml
nname: mylbog
services:
  mysql:
    container_name: mysql
    image: mysql:8.0
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PWD=123456
      - MYSQL_DATABASE=wordpree
    volumes:
      - mysql-data:/var/lib/mysql
      - /app/myconf:/ect/mysql/conf.d
    restart: always
    networks:
      - blog
  wordpress:
    container_name: wordpress
    image: wordpress
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: mysql
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PWD: 123456
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress:/var/www/html
    restart: always
    networks:
      - blog
    depends_on:
      - mysql

volumes:
  mysql-data:
  wordpress:

networks:
  blog:
```

执行命令

```shell
docker compose -f compose.yaml up -d
```

#### 其他功能

1. 只会更改修改的内容
2. down 命令不会移除 volumes， 可以使用 docker componse -f compose.yaml down rmi all --v 移除卷

### Dockerfile

> 制作镜像

#### 基础用法

| 常见指令   | 作用               |
| ---------- | ------------------ |
| FROM       | 指定镜像基础环境   |
| RUN        | 运行自定义命令     |
| CMD        | 容器启动命令或参数 |
| LABEL      | 自定义标签         |
| EXPOSE     | 指定暴露端口       |
| ENV        | 环境变量           |
| ADD        | 添加文件到镜像     |
| COPY       | 复制文件到镜像     |
| ENTRYPOINT | 容器固定启动命令   |
| VOLUME     | 数据卷             |
| USER       | 指定用户和用户组   |
| WORKDIR    | 指定默认工作目录   |
| ARG        | 指定构建参数       |

例子

```Dockerfile
From openjdk:17

LABEL author=qiqzhao

COPY app.jar /app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar" "/app.jar"]
```

使用 Dockerfile 构建镜像

```shell
docker build -f Dockerfile -t myjavaapp:v1.0 .
```

#### 镜像分层存储机制

Dockerfile 中的每一行都会形成一个存储层

**展示镜像变更历史**

```shell
docker image histroy nginx
```

**展示镜像大小**

```shell
docker ps -s
```

### 一键启动开发环境

使用 docker compose 命令

```shell
docker compose up -d
```

默认会找 docker compose 文件
