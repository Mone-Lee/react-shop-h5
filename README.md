# react-shop-h5
参考[极客时间商城（h5）](https://shop18793264.m.youzan.com/v2/feature/TJe4bYhxyP?dc_ps=2293231415741009926.200001)，使用react进行开发，webpack配合进行项目构建。

## 开发环境
未使用create-react-app作为项目构建工具，基于webpack4.x版本进行环境搭建。  
通过直接引入自己编写的npm包（[webpack-project-builder](https://www.npmjs.com/package/webpack-project-builder)）简化搭建过程。  
开发环境支持热更新。  

使用koa2.x + mongodb(mongoose)进行接口模拟开发。 

## 功能列表  
![功能列表](https://note.youdao.com/yws/public/resource/2f9dd0205a972ef294d6906edeb10a61/xmlnote/75D9BBBA8FB241AE951D9A77BE87E170/8322)    

## 项目说明  
#### 本地开发环境启动命令  
1. 启动后端服务  `node server/index.js`  
2. 启动本地运行环境  `npm run dev`  

注册页： `http://localhost:8080/register.html`  
登录页： `http://localhost:8080/login.html`  
首页： `http://localhost:8080` 或 `http://localhost:8080/index.html`  
商品详情页： `http://localhost:8080/goods.html?gid=*` 

#### SSR渲染环境启动命令 
目前仅实现 首页 和 商品详情页。  
1. 执行`npm run build`，进行客户端打包  
2. 执行`npm run build:ssr`，进行ssr打包  
3. 执行`node server/ssr.js`（进行服务器端页面导航）、执行`node server/index.js`（提供接口访问服务）
  
首页： `http://localhost:3001/index`    
商品详情页： `http://localhost:3001/goods/*`  

#### 项目结构说明  
`/server/index.js`  
后端接口实现逻辑， 数据库连接实现逻辑  

`/server/ssr.js`  
ssr渲染服务器端逻辑实现  

`/src`  
前端页面逻辑

#### ssr渲染流程  
1. 使用`./src/*/index.js`入口打包生成用于浏览器解析的html文件和`index-[hash].js`文件   
    - 此时，我们拥有html文件，用于浏览器解析的`index-[hash].js`文件
2. 使用`./src/*/index-server.js`入口打包生成用于服务器端解析的js文件，在服务器端使用**renderToString**处理该js文件输出的页面Component，生成页面字符串renderStr, 以及在服务器端预先获取的初始化数据initialData.  
    - 此时，我们拥有html文件，用于浏览器解析的`index-[hash].js`文件，页面字符串renderStr，初始化数据initialData    
3. 将**html文件**与**页面字符串renderStr**，**初始化数据initialData**结合，获得有内容的ssrHtml文件以及存储在全局变量`window`的初始化数据。  
    - 此时，我们拥有ssrHtml文件，用于浏览器解析的`index-[hash].js`文件，存储在全局变量`window`的初始化数据  
4. 当我们在浏览器中输入服务器定义的url时，服务器返回ssrHtml文件，使得源码中有能被搜索引擎抓到的页面内容。同时，浏览器会访问`index-[hash].js`对页面进行解析，为对应的元素绑定事件等。而在`index-[hash].js`中，可以通过访问全局变量`window`获取初始化数据，使得服务器端与客户端的数据能够同步。  

总结来说，就是把服务器端解析后的页面字符串，塞入正常客户端打包后生成的html文件中。并注意两端的数据同步。

#### 防止数据过多暴露  
在代码优化阶段，使用[lru-cache](https://www.npmjs.com/package/lru-cache)代替window.__initial_data对初始化数据进行缓存，避免数据直接暴露在源码上。

## 备忘录  
启动数据库命令  
`mongod`   启动数据库  
`mongo`