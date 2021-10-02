<template>
  <div class="box">
    <div class="title">后台管理系统</div>
    <div class="line"></div>
    <el-form
      :model="loginForm"
      :rules="rules"
      status-icon
      ref="loginForm"
      @keyup.enter.native="submitForm('loginForm')"
    >
      <el-form-item prop="username">
        <el-input
          class="input-h"
          v-model="loginForm.username"
          placeholder="admin"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="input-h"
          v-model="loginForm.password"
          placeholder="请输入密码"
          show-password
          prefix-icon="el-icon-key"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="submitForm('loginForm')"
          >提交</el-button
        >
        <el-button size="medium" @click="resetForm('loginForm')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    // 自定义验证规则
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value.length <= 5) {
        callback(new Error("密码长度最少6个字符！"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入管理员账号", trigger: "blur" },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // axios
          //   .get(
          //     "http://xu.study:80/36xujh/public/index.php/xujh_forum/adminlogin",
          //     this.loginForm
          //   )
          //   .then(
          //     (success) => {
          //       console.log(success);
          //     },
          //     (error) => {
          //       console.log(error);
          //     }
          //   );

          this.$router.push("/adminindex");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-weight: 700;
  font-size: 30px;
}
.line {
  border-bottom: #000 solid 1px;
  padding: 10px;
  margin: 10px;
}
.box {
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 350px;
  border-radius: 10px;
  border: 1px solid #dcdfe6;
  background-color: #fff;

  .el-form {
    margin: 10px 0;
  }
  .input-h {
    height: 45px !important;
    line-height: 45px !important;
  }
  .el-form-item__content > button {
    margin: 0 10px;
    width: 100px;
    float: right;
  }
}
</style>