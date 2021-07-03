import copy from './copy'

// 自定义指令
const directives = {
    copy
}

export default {
    // 注册指令
    install(Vue) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key, directives[key])
        }) 
    }
}