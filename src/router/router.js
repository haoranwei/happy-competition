import App from '../App'
// 1. `import App from '../App'`: 这行代码导入了一个名为`App`的组件，它是应用程序的根组件。

// 2. `export default [{ ... } ]`: 这行代码导出一个路由配置数组，其中包含了应用程序的路由规则和组件映射关系。
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
    //     3. 在路由规则对象中，通过`r => require.ensure([], () => r(require('../page/home')), 'home')`这样的代码片段
    //     动态加载`home`、`item`和`score`等页面的组件
    //     使用了Vue.js的异步组件加载机制，通过`require.ensure`方法将组件的代码块包装成一个Promise，并在组件被请求时才进行加载
}]


// 在路由配置数组中，每个对象表示一个路由规则，包含以下属性：
//    - `path`: 路由路径，指定了访问该路由时要匹配的URL路径。
//    - `component`: 路由对应的组件，用于渲染该路由对应的页面内容。
//    - `children` : 子路由规则数组，用于嵌套路由。


// 这段代码的作用是定义了应用程序的路由规则和组件映射关系，
// 使得用户可以通过不同的URL路径访问到相应的页面内容。
// 当用户访问根路径`'/'`时，会渲染`App`组件作为根组件，而其他路径会根据配置加载对应的页面组件。