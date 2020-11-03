import TodoItem from "../../src/components/TodoItem.vue";
import { mount } from "@vue/test-utils";

describe("TodoItem", () => {
  test("应该显示对应的 content", () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        content: "hello",
      },
    });

    // console.log(wrapper.text());
    // wrapper -> 很有工具方法
    expect(wrapper.get("[data-test='content']").text()).toBe("hello");
  });

  test("点击 X 的时候应该发出一个 remove 的事件", () => {
    const wrapper = mount(TodoItem,{
        propsData:{
            id:"1"
        }
    });
    
    const removeBtn = wrapper.get("[data-test='removeBtn']")
    removeBtn.trigger("click")
    expect(wrapper.emitted('remove')[0]).toEqual(["1"])
  });
});
