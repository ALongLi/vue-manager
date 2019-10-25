import { debounce } from "@/utils/utils";

export default {
  // 指令是一个方法  指令有自己的生命周期
  // bind update
  name: "debounce",
  inserted(el, bindings) {
    // el真实的dom元素
    const { value, arg, modifiers } = bindings;
    let wait = +Object.keys(modifiers)[0] ?? 250;
    el.listener = debounce(value, wait);
    el.addEventListener(arg, el.listener);
  },
  unbind(el, { arg }) {
    el.removeEventListener(arg, el.listener);
  }
};
