/*
 * @des: 防抖组件
 * @Author: fillter
 * @Date: 2019-10-25 10:09:01
 * @Last Modified by: fillter
 * @Last Modified time: 2019-10-25 11:37:45
 */

const debounce = (fn, ms = 250, ctx = this) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(ctx, args), ms);
  };
};

export default {
  name: "Debounce",
  abstract: true,
  props: {
    time: {
      type: Number,
      default: 800
    },
    events: {
      type: String,
      default: "click"
    }
  },
  created() {
    this.eventKeys = this.events.split(",");
    this.originMap = {};
    this.debouncedMap = {};
    this.created = 0;
  },
  render() {
    const vnode = this.$slots.default[0];
    this.eventKeys.forEach(key => {
      const target = vnode.data.on?.[key] ?? "";
      if (!target) {
        debugger;
        console.log("没找到原生的event事件，无法防抖，原样返回");
        return false;
      }
      if (target === this.originMap[key] && this.debouncedMap[key]) {
        vnode.data.on[key] = this.debouncedMap[key];
      } else if (target) {
        this.originMap[key] = target;
        this.debouncedMap[key] = debounce(target, this.time, vnode);
        vnode.data.on[key] = this.debouncedMap[key];
      }
    });
    return vnode;
  }
};
