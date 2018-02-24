import Vue from 'vue'
import MyComponent from '@/components/MyComponent';
import ElementUI from 'element-ui';
Vue.use(ElementUI)


describe('MyComponent.vue', () => {
  // 检查mounted
  it('has a mounted hook', () => {
    expect(typeof MyComponent.mounted).to.eql('function')
  })

  // 组件实例
  const Constructor = Vue.extend(MyComponent);

  // 检查msg
  it('msg should change to bye bye', () => {
    expect(myComponent.msg).to.eql('bye bye')
  })

  it('button is disabled should is false', () => {
    expect(myComponent.loading).to.eql(false)
  })


  // 挂在组件
  const myComponent = new Constructor({
    propsData: {
      propmsg: 'Hello button'
    }
  }).$mount();

  // 检查msg
  it('msg should in page', () => {
    myComponent.msg = 'bye bye';

    const button = myComponent.$el.querySelector('button')
    const clickEvent = new window.Event('click');

    button.dispatchEvent(clickEvent);
    // 需要手动监听更新
    myComponent._watcher.run();
    expect(myComponent.$el.textContent).to.contain('changed')
  })
})
