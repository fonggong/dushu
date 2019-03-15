<template>
  <div class="register">
    <form action="#" @submit.prevent="register()">
      <p>用户注册</p>
      <span>用&ensp;户&ensp;名：</span>
      <input type="text" v-model.trim="username" name="username" placeholder="请输入用户名" required>
      <br>
      <span>密&ensp;&ensp;&ensp;&ensp;码：</span>
      <input
        type="password"
        v-model.trim="password"
        name="password"
        placeholder="请输入设置的密码"
        required
      >
      <br>
      <span>确认密码：</span>
      <input type="password" v-model.trim="pass" name="pass" placeholder="请输入设置的密码" required>
      <p class="tip"></p>
      <input type="submit" value="注册">
      <input type="reset" value="重置">
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      pass: ""
    };
  },
  methods: {
    submit() {
      const self = this;
      this.$http
        .post("/register", {
          username: this.username,
          password: this.password,
          pass: this.pass
        })
        .then(function(res) {
          $(".register .tip").text(res.body);
          if (res.body == "注册成功") self.$router.push("/login");
        })
        .catch(function(err) {
          $(".register .tip").text("发生错误");
        });
    },
    register() {
      let reg = /^\w{3,10}$/;
      if (this.pass != this.password) {
        $(".register .tip").text("两次密码输入不一致");
        return;
      } else if (!this.password.match(reg)) {
        $(".register .tip").text("密码的长度应由长度为3-10的数字或字母组成");
      } else {
        this.submit();
      }
    }
  }
};
</script>
<style>
.register {
  height: 500px;
  text-align: center;
  padding-top: 30px;
}
.register form {
  height: 400px;
  width: 600px;
  border: 1px solid #dddddd;
  margin: auto;
  border-radius: 20px;
}
.register form > p:nth-of-type(1) {
  font-size: 20px;
  font-family: "微软雅黑";
  padding: 40px 0;
}
.register form > span {
  font-size: 16px;
  color: #555;
}
.register form > input[type="text"],
.register form > input[type="password"] {
  font-size: 14px;
  width: 200px;
  height: 28px;
  margin-bottom: 20px;
  color: #777;
}
.register form > input[type="reset"],
.register form > input[type="submit"] {
  height: 30px;
  width: 120px;
  margin-top: 20px;
  font-size: #666;
}
.register form > p:nth-of-type(2) {
  font-size: 13px;
  color: rgb(226, 146, 146);
  height: 20px;
}
</style>



