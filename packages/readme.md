
# vue ui 组件



   1. 建立组件文件夹编写 vue代码  vue文件中name 要与页面引入保持一致

   2. packages/index.js 添加相关代码




  ## 使用

  1. vue 入口js文件 main.js 中 添加 

  ```
        import { ByView } from 'huluobos'
        Vue.use(ByView) 
  ```

   2. 页面中使用（示例）
  ```
    <by-button>提交</by-button>
  ```

