import Vue from 'vue'
import MyComponent from '@/components/EmInput'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

describe('EmInput component.vue', () => {
  // 组件实例
  const Constructor = Vue.extend(MyComponent)

  // 挂载组件
  const myComponent = new Constructor().$mount();

  // 检查msg
  it('msg should in page', () => {
    myComponent.input = 'test input'
    const button = myComponent.$el.querySelector('button')
    const clickEvent = new window.Event('click')

    button.dispatchEvent(clickEvent)
    // 手动监听更新
    myComponent._watcher.run()
    expect(myComponent.$el.textContent).to.contain('test input')
  })
})
