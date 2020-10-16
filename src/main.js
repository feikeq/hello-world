import Vue from "vue";
/*
1.引入框架vue.js
    其实最完整的写法是：import Vue from "../node_modules/vue/dist/vue.js";
    些语句解析为 const Vue = require('vue')。
    意思是：因为main.js是在src文件中，所以../向前一级相对目录查找node_modules，再依次寻找后面的文件。
    文件找到了，那么文件内是否存在Vue呢？事实证明，Vue是存在于vue.js中的。
    import...from...的from命令后面可以跟很多路径格式，
    若只给出vue，axios这样的包名，则会自动到node_modules中加载；
    若给出相对路径及文件前缀，则到指定位置寻找。
    可以加载各种各样的文件：.js、.vue、.less等等，
    也可以省略掉from直接引入例 import './less/index';
*/

import App from "./App";
/*
2.引入应用程序App.vue
    完整的写法是: import App from "./App.vue";
    顾名思义，这句代码的意思就是引入我们写好的.vue文件。（.vue文件是vue框架的单文件组件。）
*/

import router from "./router";
/*
3.引入路由route.js
    完整的写法是: import router from "./router/index.js" 
*/

import AsyncComputed from "vue-async-computed";
/*
4.引入 asyncComputed 异步计算属性
    引入前要先安装 npm install --save vue-async-computed
    当使用了 webpack 或者 browserify 等时，需要明确通过 Vue.use 实现安装。
*/
Vue.use(AsyncComputed);
/*
和同步计算属性类似，异步计算属性有 get 方法，但是没有 set 方法，设置了也会被忽略。
异步计算属性还可以设置默认值。在首次加载数据之前使用。
*/

Vue.config.productionTip = false; //是阻止显示生产模式的消息。
/*
开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
大概意思应该就是，消息提示的环境配置，设置为开发环境或者生产环境
*/

// 使用 new Vue 创建vue实例
new Vue({
  // 通过 router 配置参数注入路由 ，从而让整个应用都有路由功能
  router,
  /*
  router这个是为了让你可以在子组件里面能使用this.$router递归找到路由单例,
  如果不传这个在你的程序中this变量还有没有$router属性。
  */

  render: h => h(App)
  /*
    render: h => h(App) 
    是下面内容的缩写：
    render: function (createElement) {
        return createElement(App);
    }
    其中 createElement 函数是用来生成 HTML DOM 元素的
    也就是上文中的 generate HTML structures，也就是 Hyperscript，
    h是 Vue.js 里面的 createElement 函数，
    这个函数的作用就是生成一个 VNode节点，
    render 函数得到这个 VNode 节点之后，
    返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上
  */
}).$mount("#index_html_app"); // 将内容挂载到 public/index.html 页面里ID为index_html_app的元素内
/*
在Vue构造函数时，需要配置一个el属性，如果没有没有el属性时，可以使用.$mount('#app')进行延迟挂载。
*/
// 现在，应用已经启动了！
