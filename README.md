# react-shop-h5
参考[极客时间商城（h5）](https://shop18793264.m.youzan.com/v2/feature/TJe4bYhxyP?dc_ps=2293231415741009926.200001)，使用react进行开发，webpack配合进行项目构建。

## 开发环境
未使用create-react-app，基于webpack4.x版本进行环境搭建。  
通过直接引入自己编写的npm包（[webpack-project-builder](https://www.npmjs.com/package/webpack-project-builder)）简化搭建过程。  
开发环境支持热更新。  

接口使用koa2.x + mongodb(mongoose)进行模拟开发。 

## 功能列表  
![功能列表](http://note.youdao.com/yws/public/resource/2f9dd0205a972ef294d6906edeb10a61/xmlnote/18153039C77D472D879F9A6AA3358EF4/8247)    

## 项目说明  
#### 启动命令  
1. 启动后端服务  `node server/index.js`  
2. 启动本地运行环境  `npm run dev`  

#### 项目结构说明  
`/server`  
后端接口实现逻辑， 数据库连接实现逻辑  

`/src`  
前端页面逻辑

## 本地开发访问地址  
首页： `http://localhost:8080` 或 `http://localhost:8080/index.html`  
注册页： `http://localhost:8080/register.html`  

## 备忘录  
启动数据库命令  
`mongod`  
`mongo`