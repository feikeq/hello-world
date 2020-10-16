# Vue CLI 肥客教学

## 1.安装脚手架
    可以使用下列任一命令安装这个新的包：
    ```
    npm install -g @vue/cli
    ```
    或者使用yarn来安装如
    ```
    yarn global add @vue/cli
    ```
    安装之后，你就可以在命令行中访问 vue 命令。
    你可以用这个命令来检查其版本是否正确：
    ```
    vue --version
    ```

## 2.创建一个项目
    注意项目名不能有大字
    ```
    vue create hello-world
    ```

    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.5.6 → 4.5.7   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘

   Please pick a preset: (Use arrow keys)  [请选择预设：（使用箭头键）]
   Default ([Vue 2] babel, eslint) [默认配置vue2.x]
   Default (Vue 3 Preview) ([Vue 3] babel, eslint) [默认配置vue3.x]
   ❯Manually select features [自定义配置]


Check the features needed for your project: [选择项目所需的功能：]
 ◯ Choose Vue version [会问你用哪个版本的脚手架]
 ◉ Babel [将es6转成es5]
 ◯ TypeScript [TypeScript通过添加类型来扩展JavaScript]
 ◯ Progressive Web App (PWA) Support [渐进式Web应用程序（PWA）支持]
 ◉ Router [路由]
 ◯ Vuex [应用程序开发的状态管理]
❯◯ CSS Pre-processors [CSS预处理器]
 ◉ Linter / Formatter [格式化程序]
 ◯ Unit Testing [单元测试]
 ◯ E2E Testing [端到端（end-to-end）]


 

 Pick a linter / formatter config: (Use arrow keys) [选择一个linter/formatter配置：（使用箭头键）]
  ESLint with error prevention only [只配置使用ESLint官网的推荐规则]
  ESLint + Airbnb config [使用ESLint官网推荐的规则+Airbnb第三方的配置]
  ESLint + Standard config [使用ESLint官网推荐的规则+Standard标准配置]
❯ ESLint + Prettier [使用ESLint官网推荐的规则+Prettier自动格式化]



Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection) [选择其他lint功能：（按<space>选择，<a>切换全部，<i>反转选择）]
❯◉ Lint on save [保存时校验]
 ◯ Lint and fix on commit [提交git时校验]



Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys) [您希望在哪里放置Babel，ESLint等的配置？]
❯ In dedicated config files [放单独的文件]
  In package.json  [统一放到package.json里]


Save this as a preset for future projects? (y/N) [将此保存为预设以供将来的项目使用吗？（是/否）]
Y

Save preset as: [保存位置]
直接回车就是当前路径




## Project setup
```
npm install
```

### 编译和热重装以进行开发 (Compiles and hot-reloads for development)
```
npm run serve
```

### 编译并最小化生产可直接部署 (Compiles and minifies for production)
```
npm run build
```

### 整理和修复文件 (Lints and fixes files)
```
npm run lint
```

### 自定义配置 (Customize configuration)
请参阅[配置参考](https://cli.vuejs.org/config/).
