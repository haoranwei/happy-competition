import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'
// 1. `import Vue from 'vue'`: 这行代码导入了Vue.js库，使得我们可以在当前文件中使用Vue.js的功能。
// 2. `import VueRouter from 'vue-router'`: 这行代码导入了Vue Router库，它是一个用于构建单页面应用（SPA）的路由管理器。
// 3. `import routes from './router/router'`: 这行代码从`./router/router`模块中导入了一个名为`routes`的对象，它包含了应用程序的路由配置。
// 4. `import store from './store/'`: 这行代码从`./store/`模块中导入了一个名为`store`的对象，它是用于管理应用程序的状态（state）和生命周期（lifecycle）的工具。
// 5. `import ajax from './config/ajax'`: 这行代码从`./config/ajax`模块中导入了一个名为`ajax`的对象，它可能是用于处理Ajax请求的配置对象。
// 6. `import './style/common'`: 这行代码导入了一个名为`common.css`的样式表文件，用于定义应用程序的通用样式。
// 7. `import './config/rem'`: 这行代码导入了一个名为`rem.js`的配置文件，它可能包含了一些与响应式设计相关的配置。
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes
})

// 8. `Vue.use(VueRouter)`: 这行代码调用了Vue.js的`use`方法，将Vue Router插件注册到Vue实例中，使得我们可以在组件中使用Vue Router的功能。
// 9. `const router = new VueRouter({ routes })`: 这行代码创建了一个Vue Router实例，并将之前导入的路由配置对象`routes`传递给它。
new Vue({
	router,
	store,
}).$mount('#app')

// 10. `new Vue({ router, store }).$mount('#app')`: 这行代码创建了一个新的Vue实例，并将之前创建的Vue Router实例和状态管理工具`store`传递给它。然后，通过调用`$mount`方法，将Vue实例挂载到具有`id`为"app"的HTML元素上，从而启动应用程序。
// 这段代码的作用是初始化一个Vue.js应用程序，并配置了路由和状态管理功能。
// 当用户访问应用程序时，会根据路由配置加载相应的组件，并通过状态管理工具来管理应用程序的状态和生命周期。