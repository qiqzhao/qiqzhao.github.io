---
title: "垂直居中的五种方法"
date: "2023-07-13"
author:
  name: qiqzhao
---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .box {
        width: 500px;
        height: 500px;
        border: 1px solid black;
      }

      .item {
        width: 200px;
        height: 300px;
        background-color: gray;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="item">使用媒体查询针对不同宽度的设备进行布局和样式的设置</div>
    </div>
  </body>
</html>
```

1. postition + margin 负值 —— 固定宽高

```css
.box {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

.item {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  margin-left: -100px;
  width: 200px;
  height: 300px;
  background-color: gray;
}
```

2. position + margin:auto —— 固定宽高

```css
.box {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

.item {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 200px;
  height: 300px;
  background-color: gray;
}
```

3. display: table-cell + vertical-align: middle —— 固定宽

```css
.box {
  display: table-cell;
  vertical-align: middle;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

.item {
  margin: auto;
  width: 200px;
  height: 300px;
  background-color: gray;
}
```

4. position + transform —— 不固定宽高

```css
.box {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

.item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 300px;
  background-color: gray;
}
```

5. flex —— 不固定宽高

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

.item {
  width: 200px;
  height: 300px;
  background-color: gray;
}
```
