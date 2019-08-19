import instance from "./instance";

function request(opts) {
  const defaultOptions = {
    method: "GET",
    url: "",
    data: {},
    params: {}
  };
  const options = Object.assign({}, defaultOptions, opts);
  return instance(options);
}

const fetch = {
  /**
   *
   * @desc 登陆接口
   * @param {*} data
   * @returns
   */
  login(data) {
    const opts = {
      method: "POST",
      url: "api/public/login",
      data
    };
    return request(opts);
  },
  getMenuList() {
    const opts = {
      method: "GET",
      url: "menuList"
    };
    return request(opts);
  },

  getTableList(data) {
    const opts = {
      method: "GET",
      url: "api/table",
      params: data
    };
    return request(opts);
  },
  getTableList2(data) {
    const opts = {
      method: "GET",
      url: "api/table2",
      params: data
    };
    return request(opts);
  },
  getTableList3(data) {
    const opts = {
      method: "GET",
      url: "api/table3",
      params: data
    };
    return request(opts);
  }
};

export default fetch;
