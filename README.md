# MusicProject

音乐网站:musical_note:

- 前端：vue2+vuex+elementUi
- 后端 ：java+SpringBoot



前端进度：

- 后台登录页面:heavy_check_mark:
  - 登录细节:x:

- 后台首页总体布局:heavy_check_mark:

- 前台首页:x:



创建vue项目

前提安装node.js

- ```vue create projectName```

npm安装依赖

```js
npm install //默认安装package.json中的依赖

npm get registry //查看npm源地址
npm config set registry http://registry.npm.taobao.org //设置淘宝镜像源
//项目需要的依赖
// -S --save 生产环境依赖
npm i vuex -S
npm i vue-router -S
npm i axios -S
npm i element-ui -S
// -D --save-dev 开发环境依赖
npm i less -D
npm i less-loader@4.1.0 -D
```

package.json 关闭eslint变量未使用提示

- 1 警告  2 错误  0 关闭

```
"rules": {
      "no-unused-vars": [
        1,
        {
          "vars": "all",
          "args": "after-used"
        }
      ]
    }
```

dist文件——vue文件打包编译成的html+css+js文件，需要部署在服务器才能打开



### **目前效果 （暂定）**

**后台登录页面adminlogin**

![image-20211002203852002](C:\Users\QAQWQ\AppData\Roaming\Typora\typora-user-images\image-20211002203852002.png)

**后台首页adminindex**

![image-20211002204456613](C:\Users\QAQWQ\AppData\Roaming\Typora\typora-user-images\image-20211002204456613.png)

