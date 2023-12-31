# 说明
>	简单的vue.js + vuex项目，适合入门练习。
>	Mainly Redesigned by haoranwei -->

>	注:本项目参考自：https://github.com/bailicangdu/vue2-happyfri

>	本项目新增了登录注册页面和判定逻辑，优化了部分样式，为部分代码添加了中文注释。

>	特别感谢 cangdu
>	Salute cangdu~ 

# 项目介绍
## 文件树
```
├── build                     // 构建相关
├── config                    // 配置相关
├── src                       // 源码
│   ├── assets                // 资源
│   ├── components            // 组件
│   ├── page                  // 页面
│   ├── router                // 路由
│   ├── store                 // 全局状态管理
|   |   ├── actions.js         // actions
|   |   ├── index.js           // store
|   |   ├── mutations.js       // mutations
│   ├── App.vue               // 入口页面
│   ├── main.js               // 入口文件
├──.babelrc                  // babel-loader 配置
├──.eslintrc.js              // eslint 配置项
├──.gitignore                // git 忽略项
|—— COPYING                  // 原作者cangdu开源协议
├── index.html                // 入口模板
|—— LICENSE                  // 开源协议
├── package.json              // 项目配置
└── README.md                 // 项目说明	
```
## 项目运行（nodejs 6.0+）

### 安装依赖
```bash
npm install
```
若依赖配置冲突，请:
```bash
npm install --force
```

### 开启本地服务器,访问localhost:8088
```bash
npm run serve
```
### 发布环境
```bash
npm run build
```

## 路由配置
```js
import App from '../App'
export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')//首页
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')//答题过程
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')//最终得分
    }, {
        path: '/login',
        component: r => require.ensure([], () => r(require('../page/login')), 'login')//登录页
    }, {
        path: '/register',
        component: r => require.ensure([], () => r(require('../page/register')), 'register')//注册页
    },]
}]


```


## 配置actions
```js
import ajax from '../config/ajax'

export default {
	addNum({ commit, state }, id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	//初始化信息
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	}
}

```


## mutations
```js
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	//点击进入下一题
	[ADD_ITEMNUM](state, payload) {
		state.itemNum += payload.num;
	},
	//记录答案
	[REMBER_ANSWER](state, payload) {
		state.answerid[state.itemNum] = payload.id;
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
	},
}
```

## 创建store
```js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	level: '第一周',
	itemNum: 1,
	allTime: 0,
	timer: '',
	itemDetail: [],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
```


## 创建vue实例
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')
```
