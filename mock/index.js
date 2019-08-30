const menuList = require("./menuList.json");
const table = require("./table.js");
// import table from "./table.js";

const proxy = {
  "GET /menuList": menuList,
  "GET /api/table": table,
  "GET /api/user/list": [
    { id: 1, username: "kenny", sex: 6 },
    { id: 2, username: "kenny", sex: 6 }
  ],
  "POST /api/public/login": (req, res) => {
    const { password, username } = req.body;
    console.log("mock-server接收的参数" + password, username);
    if (password === "123456" && username === "admin") {
      return res.send({
        status: "ok",
        code: 0,
        token: "sdfsdfsdfdsf",
        data: { id: 1, username: "kenny", sex: 6 }
      });
    } else {
      return res.send({ status: "error", code: 403 });
    }
  },
  "DELETE /api/user/:id": (req, res) => {
    console.log("---->", req.body);
    console.log("---->", req.params.id);
    res.send({ status: "ok", message: "删除成功！" });
  }
};
module.exports = proxy;
