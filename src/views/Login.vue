<template>
  <div class="login-wrap">
    <div class="ms-login">
      <!-- <div class="ms-title">后台管理系统</div> -->
      <el-form class="ms-content" ref="ruleForm" label-width="0px" :model="ruleForm" :rules="rules">
        <div class="inputBox">
          <img src="@/assets/img/login_account_icon.png" alt />
          <el-form-item prop="username">
            <!-- <el-input class="custom-input" v-model="ruleForm.username" placeholder="username" autocomplete="off"></el-input> -->
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
            <!-- <el-input class="custom-input" v-model="ruleForm.username" placeholder="username" autocomplete="off"></el-input> -->
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
        <!-- <el-input
            type="password"
            placeholder="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
        ></el-input>-->
        <div class="login-btn">
          <span @click="submitForm('ruleForm')">登录</span>
          <!-- <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button> -->
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "sysmanager",
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("ms_username", this.ruleForm.username);
          Cookie.set("ms_username", this.ruleForm.username);
          sessionStorage.setItem("ms_username", this.ruleForm.username);
          this.$router.push("/");
        } else {
          return false;
        }
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login_bg.png);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
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
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
