<!-- 
  <template>
    模板占位符:若你不想额外增加一个div，此时应该使用template来实现（推荐）
    它可帮助我们包裹元素，但在循环过程当中，template不会被渲染到页面上
    注意：<template> 后面紧跟一个根节点并且只能一个
    也就是说div并且只能一个，如果两个div父节点会报错！
-->
<template alt="首页组件">
  <div
    class="home"
    :ver="$options.version"
    :name="$options.name"
    v-bind:[$options.name]="webSite.join('')"
  >
    <b>Home.vue首页组件版本：{{ $options.version }}</b>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 
        引用组件 HelloWorld 
            通常 import HelloWorld from "../components/HelloWorld.vue" 之后
            在模板页面中采用 <hello-world></hello-world> 来使用
            当然也可以采用 <HelloWorld></HelloWorld> 来使用
    -->
    <HelloWorld msg="肥客泉的第0个Vue项目" />
  </div>
</template>

<!--
  <script>
    在html中用script标签来引用代码
    组件代码可以在当前html中的script标签中，也可单独存放到一个.js文件中
-->
<script>
/*
  import
    导入内部组件(通常在vue文件中导入组件、注册组件、使用组件)
    Vue是通过 webpack 实现的模块化，因此可以使用 import 来引入模块
    是用于将某个模块中导出的函数或对象、初始值导入到另一个模块中的语法。
    例如：import {模块名称} from "需要导入模块的路径名"
    "@"是"/src"的别名，@这是webpack设置的路径别名在build/webpack.base.conf这个文件里面定义
*/
import HelloWorld from "@/components/HelloWorld.vue";

/*
  export 与 export default 
    均可用于导出常量、函数、文件、模块等，
    你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用，
    但在一个文件或模块中，export、import可以有多个，export default仅有一个。
    使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名
*/
export default {
  name: "Home",
  version: "1.88.20201016", // 自定义版本号属性
  /*
  components
    注册组件局部注册 components 选项中提前定义申明你模板中想要使用的组件： 
  */
  components: {
    HelloWorld
  },

  /*
  model 
    prop(注意是 prop   而不是 props)指向v-bind绑定的值（即prop使用什么接收），
    event指向v-on绑定的值（即$emit调用哪个方法返回）
    当然也可以用 .sync 修饰符 进行“双向绑定”。
    https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6
    // 触发 v-model 的自定义事件 修改父级组件绑定的值
    this.$emit('modelchange', _tmp);
  */
  model: {
    prop: "modelvalue", //绑定的值，通过父组件传递
    event: "modelchange" //自定义事件名
  },

  /*
  props
    用于接收来自父组件的数据 -  使得其父子 prop 之间形成了一个单向下行绑定
    可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
    this.$attrs 也能拿到父组件的数据，如果组件定义了props,打印的值就是剔除定义的属性
    判断组件是否包含定义事件 this._events 和 this.$listeners 则可拿到 父组件的 事件
    Vue组件通信（props、$ref、$emit、$attr、 $listeners）
    $ref具体使用主要可分为两种:
        1.ref使用在子组件中，指向组件示例，通过$ref可是获取到子组件中定义的属性和方法。(应用场景:父组件执行莫个事件后需要重新渲染子组件中的一块内容)
        2.ref使用在DOM操作上，其实是引用指向dom元素，能够方便我们获取改元素的属性集合，与jquery的选择器类似。
    $emit 则可实现子组件向父组件的通信，父组件触发显示，利用$emit，子组件某个点击事件传递关闭状态给父组件，实现弹窗关闭。
    $attr、 $listeners 可是实现祖孙之间传递
  */
  props: {
    //获取父级传过来的 v-model 如果没有设置 model 属性此处一定要用 value
    modelvalue: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol]
      // default:null // 默认值
    }
    /*
    当用在组件上时如果没设置model属性，v-model 则会这样：
        <custom-input v-bind:value="searchText" v-on:input="searchText = $event"></custom-input>
    将其 value attribute 绑定到一个名叫 value 的 prop 上
    在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
    其实它只是语法糖，
    主要是通过input事件来触发input标签value值来实现我们说的“双向数据绑定”,其实它还是单向数据流。
    上面的实际相当于 <input type="text" :value="value" @input=v=>$emit('input', v)/>
    1.v-bind 绑定一个 value 属性
    2.v-on 指令给当前元素绑定 input 事件
    这时候，something接受的值就是input是事件的回掉函数的第一个参数
    所以在自定义的组件当中，要实现数据绑定，还需要使用[$emit]去触发input的事件。
    this.$emit('input', value)
    */
  },

  /*
  methods
    将被混入到 Vue 实例中。 类型：{ [key: string]: Function }
    可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。
    方法中的 this 自动绑定为 Vue 实例。
    注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。
    理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。
    props->methods->data->computed->watch 执行顺序
  */
  methods: {},

  /*
  data
    类型：Object | Function
    限制：组件的定义只接受 function。 
    javascipt只有函数构成作用域(注意理解作用域,只有函数的{}构成作用域,对象的{}以及 if(){}都不构成作用域)，
    data是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立,不会相互影响!
    其实vue不应该把这个方法名取为data()，应该叫setData或其他更容易理解的方法名。
    注意：封装组件内data变量不能以“_”开头
    data 方法比 created 要提前,所以在这简单提前处理数据
  */
  data() {
    return {
      webSite: ["F", "K", "6", "8", ".", "n", "e", "t"]
    };
  },

  /*
  computed 
    是一个计算属性,类似于过滤器,对绑定到view的数据进行处理
    computed在data之后，所以不要在data中引用computed中的属性否则只能得到undefined。
    data可以调用前面的props，methods的属性
    computed中可以调用props，methods，data中的属性
    计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例
    默认加载的时候先computed再watch，不执行methods；等触发某一事件后，则是：先methods再watch。
  */
  computed: {},

  /*
  created
    在实例创建完成后被立即调用。类型：Function
    在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。
    然而，挂载阶段还没开始，$el property 目前尚不可用。
    
    在created的时候，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素(可以去后端异步获取数据，并保存到data里面。)
    而在mounted中，由于此时html已经渲染出来了(mounted的话，如果需要在页面上操作dom，就要在这个函数执行。)

    created阶段，对浏览器来说，渲染整个HTML文档时,dom节点、css规则树与js文件被解析后，但是没有进入被浏览器render过程，上述资源是尚未挂载在页面上，
    也就是created阶段实例已经被初始化，但是还没有挂载至$el上，
    所以我们无法获取到对应的节点，但是此时我们是可以获取到vue中data与methods中的数据的
    
    生命周期	  是否获取dom节点	 是否可以获取data	是否获取methods
    beforeCreate	 否	             否	            否
    created	         否	             是	            是
    beforeMount	     否	             是	            是
    mounted	         是	             是	            是  
  */
  created() {},

  /*
  mounted
    实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。
    如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
    注意:mounted 不会保证所有的子组件也都一起被挂载。
    如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：
  */
  mounted() {},

  /*
  watch
    一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。
    Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
    watch的作用可以监控一个值的变换，并调用因为变化需要执行的方法。可以通过watch动态改变关联的状态。
    computed -> created -> mounted 
    而 watch 与 computed 的区别，最关键的是watch需要监听值的变化而改变，但是computed从一开始就可以达到和某个值关联起来。
  */
  watch: {}
}; // END export
</script>

<!--
  style
    其内部的样式将会作用于所有组件。
    为了使样式私有化（模块化），不对全局造成污染，
    可以在style标签上添加scoped属性以表示它的只属于当下的模块
    样式中可以使用 /deep/ 来添加权重
-->
<style>
.home {
  background-color: #ddd;
}
</style>
