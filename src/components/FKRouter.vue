<template>
  <keep-alive alt="失活的组件将会被缓存！">
    <component
      alt=" FKLoadComponent 是已注册组件的名字或一个组件的选项对象"
      :is="FKLoadComponent"
    ></component>
  </keep-alive>
</template>

<script>
export default {
  name: "FKRouter",
  data() {
    return {};
  },
  asyncComputed: {
    FKLoadComponent: function() {
      console.log("获取路由", this.$route, `@/views${this.$route.path}`);
      // 根据路由动态引入组件页面
      var _page = import(`@/views${this.$route.path}`);
      _page
        .then(result => {
          console.log("===then===", result);
          this.FKLoadComponent = () => _page;
        })
        .catch(result => {
          console.log("===catch===", result);
          this.FKLoadComponent = () => import("@/router/404");
        });
    }
  }
};
</script>
