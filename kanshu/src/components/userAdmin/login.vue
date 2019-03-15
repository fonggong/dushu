<template>
  <div class="login">
    <form action="#" @submit.prevent="submit">
      <p>用户登录</p>
      <span>账号：</span>
      <input name="username" type="text" placeholder="请输入账号" required>
      <br>
      <span>密码：</span>
      <input name="password" type="password" placeholder="请输入密码" required>
      <div class="yan">
        <span>请输入验证码：</span>
        <input v-model="inp" type="text">
        <input type="button" @click="change" v-model="yan">
      </div>

      <p class="tip"></p>
      <input type="submit" value="登录">
      <input type="reset" value="重置">
    </form>
  </div>
</template>
<script>
//import msg from "../../data/msg.js";
export default {
  data() {
    return {
      yan: "3wTq",
      inp: "",
      newUser: msg.username
    };
  },
  methods: {
    login() {
      const self = this;
      this.$http
        .post("/login", {
          username: $("input[name=username]")
            .val()
            .trim(),
          password: $("input[name=password]")
            .val()
            .trim()
        })
        .then(function(res) {
          $(".login .tip").text(res.body.msg);
          if (res.body.msg == "登录成功") {
            self.$router.push("home");
            this.$store.commit("newMsg", {
              username:$("input[name=username]").val()
            });
            // msg.username=$("input[name=username]").val();
            let user = {
              username: $("input[name=username]")
                .val()
                .trim(),
              password: $("input[name=password]")
                .val()
                .trim()
            };
            self.newUser = $("input[name=username]")
              .val()
              .trim();

            window.localStorage.clear();
            window.localStorage.setItem(user.username, JSON.stringify(user));
          }
        })
        .catch(function(err) {
          $(".login .tip").text("服务器未启动");
        });
    },
    change() {
      var arr = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "a",
        "D",
        "d",
        "C",
        "L",
        "p",
        "V",
        "B",
        "M",
        "n",
        "X",
        "t",
        "Y",
        "R",
        "E",
        "s",
        "Z",
        "I",
        "W",
        "A",
        "H",
        "Q"
      ];
      var count = "";
      for (var i = 0; i < 4; i++) {
        var mm = Math.floor(Math.random() * arr.length);
        count += arr[mm];
      }
      this.yan = count;
    },
    submit() {
      if (this.yan != this.inp) {
        $(".login .tip").text("验证码有误！");
      } else {
        this.login();
      }
    }
  },
  mounted() {
    if (localStorage.length > 0) {
      let newUser = window.localStorage.getItem(localStorage.key(0));
      $("input[name=username]").val(JSON.parse(newUser).username);
      $("input[name=password]").val(JSON.parse(newUser).password);
    }
  }
};
</script>
<style>
.login {
  height: 500px;
  text-align: center;
  padding-top: 30px;
}
.login form {
  height: 400px;
  width: 600px;
  border: 1px solid #dddddd;
  margin: auto;
  border-radius: 20px;
}
.login form > p:nth-of-type(1) {
  font-size: 20px;
  font-family: "微软雅黑";
  padding: 40px 0;
}
.login form > span {
  font-size: 16px;
  color: #555;
}
.login form > input[type="text"],
.login form > input[type="password"] {
  font-size: 14px;
  width: 200px;
  height: 28px;
  margin-bottom: 20px;
  color: #777;
}
.login form .yan input[type="text"] {
  width: 150px;
  height: 30px;
}
.login form .yan input[type="button"] {
  width: 80px;
  height: 30px;
  background-color: #6fdee6;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
}
.login form > input[type="reset"],
.login form > input[type="submit"] {
  height: 30px;
  width: 120px;
  margin-top: 20px;
  font-size: #666;
}
.login form > p:nth-of-type(2) {
  font-size: 13px;
  color: rgb(226, 146, 146);
  height: 20px;
  margin-top: 20px;
}
</style>

