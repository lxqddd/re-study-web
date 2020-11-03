/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-21 21:14:26
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-21 22:31:28
 */
// 暗号：兰博会喷火
import Button from '../../src/components/Button.vue'
import { mount } from '@vue/test-utils'
describe('Button', () => {
  test('验证slot ', () => {
    const wrapper = mount(Button, {
      slots: {
        default: "<div data-test='content'>默认按钮</div>"
      }
    })
    expect(wrapper.get("[data-test='content']").text()).toBe('默认按钮')
  })
  test('验证点击按钮，触发click', () => {
    const wrapper = mount(Button)
    wrapper.get("[data-test='btn']").trigger('click')
    expect(wrapper.emitted('test-click')[0]).toEqual([1])
  })
  test('验证传入disabled属性之后，点击事件不能生效', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    wrapper.get("[data-test='btn']").trigger('click')
    expect(wrapper.emitted('test-click')).toEqual(undefined)
  })
})
