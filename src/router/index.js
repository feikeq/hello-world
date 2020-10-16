/*
Vue Router自动化路由 - ByFeikeQ
    在开发vue项目时，需要创建路由时都需要手动到指定目录文件配置，
    现在很多人还是在默默的一个个功能页去配置管理路由，目录管理-导入.vue文件-路由配置-页面上应用。
    如果只是小项目可能还好，但是如果是中大型项目，这个未免会显得枯燥繁琐，
    当应用越来越大，这一套流程的管理会变得越来越繁杂和臃肿。修改起来也特别麻烦。
    有没有一种可以简化路由配置的方法呢？
    就像Nuxt.js服务端会依据 pages 目录结构自动生成 vue-router 模块的路由配置。
    如何在非服务端渲染下实现路由自动化。
    为什么使用路由自动注入
    vue根据文件夹自动生成路由 匹配路径
    不用每次去引用模块,只用创建文件夹,router.js会自动生成并统一路由命名
    假如某文件夹下的目录能自动生成对应路由那就方便多了。
    即假如我在page文件下添加a.vue文件，
    那么我就可以从 http://localhost:8081/model/ 中访问到该组件。
    我不用再去router.js哪里import组件并配置路由路径。
    想要实现这个功能主要有两个知识点，一个是动态路由,一个是动态组件。
*/

import Vue from "vue"; // 引入Vue
import VueRouter from "vue-router"; // 引入vue-router
// import Home from "../views/Home"; // 引入根目录下的views文件夹里的Home.vu组件
import FKRouter from "@/components/FKRouter"; // 引入FK智能路由
Vue.use(VueRouter); // Vue全局使用Router

// 定义路由 (配置路由，这里是个数组)
const routes = [
  /*
    {
      path: "/", // 链接路径
      name: "Home", // 路由名称
      component: Home // 提前import引入的对应的组件模板
    },
    {
      path: "/about",
      name: "About",
      // 路由级代码拆分
      // 这将为此路由生成一个单独的块（about.[hash].js）
      // 当访问路由时动态加载也叫延时加载。
      component: () =>
        import("../views/About.vue")
    },
  */
  {
    path: "/*", // path: '*' 会匹配所有路径
    /*
    使用通配符 (*)时，$route.params 内会自动添加一个名为 pathMatch 参数。
    它包含了 URL 通过通配符被匹配的部分
    */

    name: "FK",
    // 当访问路由时动态加载也叫延时加载
    component: FKRouter
  }
];

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  // vue-router 默认是很丑的 hash 模式 , 我们可以用路由的 history 模式
  mode: "history",
  // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
  base: process.env.BASE_URL,
  routes
});

/*
process 
    对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 
    作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。
*/
console.log("__process__", process);

export default router;
