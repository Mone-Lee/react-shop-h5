# react-shop-h5
参考[极客时间商城（h5）](https://shop18793264.m.youzan.com/v2/feature/TJe4bYhxyP?dc_ps=2293231415741009926.200001)，使用react进行开发，webpack配合进行项目构建。

## 开发环境
未使用create-react-app，基于webpack4.x版本进行环境搭建。  
通过直接引入自己编写的npm包（[webpack-project-builder](https://www.npmjs.com/package/webpack-project-builder)）简化搭建过程。  
开发环境支持热更新。  

使用koa2.x + mongodb(mongoose)进行接口模拟开发。 

## 功能列表  
![功能列表](http://note.youdao.com/yws/public/resource/2f9dd0205a972ef294d6906edeb10a61/xmlnote/29B3878E95B94A8BB23E520634A7E55A/8256)    

## 项目说明  
#### 启动命令  
1. 启动后端服务  `node server/index.js`  
2. 启动本地运行环境  `npm run dev`  

#### 项目结构说明  
`/server/index.js`  
后端接口实现逻辑， 数据库连接实现逻辑  

`/server/ssr.js`  
ssr渲染服务器端逻辑实现  

`/src`  
前端页面逻辑

## 本地开发访问地址  
注册页： `http://localhost:8080/register.html`  
登录页： `http://localhost:8080/login.html`  
首页： `http://localhost:8080` 或 `http://localhost:8080/index.html`  
商品详情页： `http://localhost:8080/goods.html?gid=*`   

## ssr渲染结果访问  
仅实现首页与商品详情页。 先执行`npm run build:ssr`, 再执行`node server/ssr.js`  
  
首页： `http://localhost:3001/index`  
商品详情页： `http://localhost:8080/goods/*`  

## 备忘录  
启动数据库命令  
`mongod`  
`mongo`