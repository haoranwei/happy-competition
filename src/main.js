// MIT License

// Copyright (c) 2023 haoranwei 

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// 以下为原作者 MIT License

// MIT License

// Copyright (c) 2017 cangdu 

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

// 1. 导入Vue.js库，
// 2. 导入Vue Router库，用于构建单页面应用（SPA）的路由管理器。
// 3. 这行代码从./router/router模块中导入`routes`的对象，它包含了应用程序的路由配置。
// 4. 这行代码从./store/模块中导入`store`的对象，它是用于管理应用程序的状态（state）和生命周期（lifecycle）的工具。
// 5. 这行代码导入common.css样式表文件，用于定义应用程序的通用样式。
// 6. 这行代码导入rem.js配置文件，它包含了一些与响应式设计相关的配置。Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes
})

// 7. `Vue.use(VueRouter)`调用了Vue.js的`use`方法，将Vue Router插件注册到Vue实例中，使得我们可以在组件中使用Vue Router的功能。
// 8. `const router = new VueRouter({ routes })`: 创建了一个Vue Router实例，并将之前导入的路由配置对象`routes`传递给它。
new Vue({
	router,
	store,
}).$mount('#app')

// 9. `new Vue({ router, store }).$mount('#app')`: 这行代码创建了一个新的Vue实例，并将之前创建的Vue Router实例和状态管理工具`store`传递给它。然后，通过调用`$mount`方法，将Vue实例挂载到具有`id`为"app"的div标签上，从而启动应用程序。