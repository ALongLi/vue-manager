<template>
  <div class="login">
    <main class="num_rain"></main>
    <div class="ms-login">
      <el-form
        class="ms-content"
        ref="ruleForm"
        label-width="0px"
        :model="ruleForm"
        :rules="rules"
      >
        <div class="inputBox">
          <img src="@/assets/img/login_account_icon.png" alt />
          <el-form-item prop="username">
            <div class="custom-input el-input el-input--small">
              <input
                type="text"
                autocomplete="off"
                v-model="ruleForm.username"
                placeholder="请输入用户名"
                class="el-input__inner"
              />
            </div>
          </el-form-item>
        </div>
        <div class="inputBox">
          <img src="../assets/img/login_psd_icon.png" alt />
          <el-form-item prop="password">
            <div class="custom-input el-input el-input--small">
              <input
                type="password"
                autocomplete="off"
                v-model="ruleForm.password"
                placeholder="请输入密码"
                class="el-input__inner"
                @keyup.enter="submitForm('ruleForm')"
              />
            </div>
          </el-form-item>
        </div>

        <div class="login-btn">
          <span @click="submitForm('ruleForm')">登录</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import fetch from "@/fetch";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          localStorage.setItem("ms_username", this.ruleForm.username);
          Cookie.set("ms_username", this.ruleForm.username);
          sessionStorage.setItem("ms_username", this.ruleForm.username);
          const { token } = await fetch.login({
            username: this.ruleForm.username,
            password: this.ruleForm.password
          });
          sessionStorage.setItem("token", token);
          Cookie.set("token", token);
          this.$router.push("/");
        } else {
          return false;
        }
      });
    }
  },
  mounted() {
    function r(from, to) {
      return ~~(Math.random() * (to - from + 1) + from);
    }
    function pick() {
      return arguments[r(0, arguments.length - 1)];
    }
    function getChar() {
      return String.fromCharCode(
        pick(r(0x3041, 0x30ff), r(0x2000, 0x206f), r(0x0020, 0x003f))
      );
    }
    function loop(fn, delay) {
      let stamp = Date.now();
      function _loop() {
        if (Date.now() - stamp >= delay) {
          fn();
          stamp = Date.now();
        }
        requestAnimationFrame(_loop);
      }
      requestAnimationFrame(_loop);
    }
    class Char {
      constructor() {
        this.element = document.createElement("span");
        this.mutate();
      }
      mutate() {
        this.element.textContent = getChar();
      }
    }
    class Trail {
      constructor(list = [], options) {
        this.list = list;
        this.options = Object.assign({ size: 10, offset: 0 }, options);
        this.body = [];
        this.move();
      }
      traverse(fn) {
        this.body.forEach((n, i) => {
          let last = i == this.body.length - 1;
          if (n) fn(n, i, last);
        });
      }
      move() {
        this.body = [];
        let { offset, size } = this.options;
        for (let i = 0; i < size; ++i) {
          let item = this.list[offset + i - size + 1];
          this.body.push(item);
        }
        this.options.offset = (offset + 1) % (this.list.length + size - 1);
      }
    }
    class Rain {
      constructor({ target, row }) {
        this.element = document.createElement("p");
        this.build(row);
        if (target) {
          target.appendChild(this.element);
        }
        this.drop();
      }
      build(row = 20) {
        let root = document.createDocumentFragment();
        let chars = [];
        for (let i = 0; i < row; ++i) {
          let c = new Char();
          root.appendChild(c.element);
          chars.push(c);
          if (Math.random() < 0.5) {
            loop(() => c.mutate(), r(1e3, 5e3));
          }
        }
        this.trail = new Trail(chars, {
          size: r(10, 30),
          offset: r(0, 100)
        });
        this.element.appendChild(root);
      }
      drop() {
        let trail = this.trail;
        let len = trail.body.length;
        let delay = r(10, 100);
        loop(() => {
          trail.move();
          trail.traverse((c, i, last) => {
            c.element.style = `
          color: hsl(136, 100%, ${(85 / len) * (i + 1)}%)
        `;
            if (last) {
              c.mutate();
              c.element.style = `
            color: hsl(136, 100%, 85%);
            text-shadow:
              0 0 .5em #fff,
              0 0 .5em currentColor;
          `;
            }
          });
        }, delay);
      }
    }

    const main = document.querySelector("main");
    for (let i = 0; i < 50; ++i) {
      new Rain({ target: main, row: 50 });
    }
  }
};
</script>

<style scoped>
.login {
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #000;
}
.num_rain {
  display: flex !important;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #000;
}
.login .num_rain >>> p {
  line-height: 1;
  height: 100%;
}
.login .num_rain >>> span {
  display: block;
  width: 2vmax;
  height: 2vmax;
  font-size: 2vmax;
  color: #9bff9b11;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  width: 330px;
  height: 358px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  /* background: rgba(255, 255, 255, 0.3); */
  background-image: url(../assets/img/login_box.png);
  overflow: hidden;
}
.ms-content {
  padding: 30px 45px;
  margin-top: 75px;
}
.login-btn {
  text-align: center;
  height: 40px;
  background-image: url(../assets/img/login_btn.png);
}
.inputBox {
  position: relative;
  width: 240px;
  height: 40px;
  padding: 5px 10px;
  background-image: url(../assets/img/login_input_default.png);
  background-repeat: no-repeat;
  margin-bottom: 32px;
}
.inputBox img {
  position: absolute;
  top: 12px;
  left: 11px;
  z-index: 99;
}
.custom-input input.el-input__inner {
  background-color: #0e2142 !important;
  border: none;
  width: 200px;
  font-size: 16px;
  color: #84c6ff;
  margin-bottom: 8px;
  padding-left: 27px;
}
.el-input__inner {
  background-color: #0e2142 !important;
}
.el-form-item--small .el-form-item__error {
  padding-top: 8px !important;
}
input::-webkit-input-placeholder {
  color: #84c6ff;
}
.login-btn span {
  display: inline-block;
  width: 100%;
  height: 36px;
  line-height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #fff;
}
</style>
