/**
    bind: 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作。
    inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
    update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值。
    componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
    unbind: 只调用一次， 指令与元素解绑时调用。
 */
const copy = {
    // el, binding, vnode
    // 
    /* 
        el 指令所绑定的元素，可以用来直接操作 DOM。
        binding：一个对象，包含以下 property：
         - name：指令名，不包括 v- 前缀。
         - value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
         - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
         - expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
         - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
         - modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
        oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
    */
    bind(el, { value }) {
        el.$value = value
        el.handler = () => {
            if (!el.$value) {
                console.log('无复制内容')
                return
            }
            // 动态创建 textarea 标签
            const textarea = document.createElement('textarea')
            // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
            textarea.readOnly = 'readonly'
            textarea.style.position = 'absolute'
            textarea.style.left = '-9999px'
            // 将要 copy 的值赋给 textarea 标签的 value 属性
            textarea.value = el.$value
            // 将 textarea 插入到 body 中
            document.body.appendChild(textarea)
            // 选中值并复制
            textarea.select()
            // Copy Cut
            const result = document.execCommand('Copy')
            if (result) {
                console.log('复制成功') // 可根据项目UI仔细设计
            }
            document.body.removeChild(textarea)
        }
        // 绑定点击事件
        el.addEventListener('click', el.handler)
    },
    // 当传进来的值更新的时候触发
    componentUpdated(el, { value }) {
        el.$value = value
    },
    // 指令与元素解绑的时候，移除事件绑定
    unbind(el) {
        el.removeEventListener('click', el.handler)
    }
}
export default copy