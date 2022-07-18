// 组件

import GoDark from './go-dark/index.vue'
import GoBtn from './go-button/index.vue'

// 按需
export { GoDark,GoBtn }

// 批量注册组件
const install = (Vue) => {
    GoComs.forEach((com) => {
        Vue.component(com.name,com)
    })
}


// 暴露出去
export default {install}  // 批量的引入*
