<template>
  <div class="header">
    <div class="top">
      <div class="container">
        <div class="top-content">
          <div>好好学习，天天向上</div>
          <div>
            <router-link id="login" to="/login"><span class='glyphicon glyphicon-user'></span>&ensp;{{newLogin}}</router-link>&ensp;|
            <router-link to="/register">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4 logoImg">
          <router-link to="/home">
            <img src="../../assets/logo.png" alt="图片暂时无法显示">
          </router-link>
        </div>
        <div class="col-sm-5">
          <div class="inp">
            <input type="text" placeholder="输入想要查找的内容">
            <button @click="search">搜索</button>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="myAdmin">
            <div>我的账号</div>
            <div>我的书架</div>
          </div>
        </div>
      </div>
    </div>
    <div class="topx">
      <div class="container stiky">
        <div class="row">
          <div class="col-sm-2">
            <router-link to="/home">
              <img src="../../assets/logo2.png" alt="图片暂时无法显示">
            </router-link>
          </div>
          <div class="col-sm-7">
            <ul>
              <li>
                <router-link to="/home">首页</router-link>
              </li>
              <li>
                <router-link to="/home">资讯</router-link>
              </li>
              <li>
                <router-link to="/home">国学/古籍</router-link>
              </li>
              <li>
                <router-link to="/home">出版图书</router-link>
              </li>
              <li>
                <router-link to="/home">电子书</router-link>
              </li>
              <li>
                <router-link to="/home">网络小说</router-link>
              </li>
              <li>
                <router-link to="/home">在线读书</router-link>
              </li>
              <li>
                <router-link to="/home">看书导航</router-link>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <div class="inp1">
              <input type="text" placeholder="搜索海量图书/电子书/网络小说">

              <router-link to="/search">
                <button>
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体 -->
  </div>
</template>

<script>
//import msg from "../../data/msg.js";
export default {
  components: {},
  name: "headerBar",
  data() {
    return {};
  },
  methods: {
    search() {
      this.$router.push("/search");
    },
    handleScroll() {
      // let offsetTop=document.querySelector('.header .topx').offsetTop;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 140) {
        $(".header .topx").css({
          display: "block",
          opacity: "1",
          transition: "1s all"
        });
      } else {
        $(".header .topx").css({
          display: "none",
          opacity: "0",
          transition: "1s all"
        });
      }
    }
  },
  computed: {
    newLogin() {
      return this.$store.state.msg;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  updated() {
    //let user = $(".header #login");
    // this.$http
    //   .get("/getUsername")
    //   .then(function(res) {
    //     user.html(`<span class='glyphicon glyphicon-user'></span>&ensp;${msg.username}`)
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    // user.html(
    //   `<span class='glyphicon glyphicon-user'></span>&ensp;${msg.username}`
    // );
  }
};
</script>
<style>
.header .top {
  height: 36px;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: #dddddd 1px solid;
  padding: 4px 15px;
  line-height: 30px;
}

.header .top-content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #777;
}

.header .top-content > div:nth-of-type(2) > a {
  color: #777;
  text-decoration: none;
}
.header .logoImg > a {
  display: inline-block;
  height: 100%;
  width: 100%;
  text-align: center;
}
.header .logoImg > a > img {
  height: 100%;
  width: 100%;
  max-width: 350px;
}

.header .inp {
  width: 100%;
  border: 1px solid #61abaa;
  height: 36px;
  margin-top: 8%;

  position: relative;
}
.header .inp > input {
  width: 70%;
  height: 34px;
  padding-right: 5px;
  padding-left: 5px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

.header .inp > button {
  background-color: #61abaa;
  width: 28%;
  height: 34px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  color: #f7f7f7;
  font-size: 18px;
}

.header .myAdmin {
  height: 30px;
  width: 100%;
  text-align: center;
  border: 1px solid #eeeeee;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.header .myAdmin > div {
  height: 100%;
  width: 50%;
  color: #777777;
  box-sizing: border-box;
  font-size: 13px;
  cursor: pointer;
  line-height: 30px;
}
.header .myAdmin > div:hover {
  background-color: #61abaa;
  color: #fff;
}
.header .myAdmin > div:nth-of-type(1) {
  border-right: 1px solid #eeeeee;
}
/* 吸顶 */
.header .stiky ul li {
  float: left;
  list-style: none;
  padding: 15px 10px;
  padding-top: 20px;
}
.header .stiky > div > div:nth-of-type(1) img {
  width: 100%;
}
.header .stiky ul li > a {
  color: #777;
  text-decoration: none;
}
.header .topx {
  height: 50px;
  width: 100%;
  background: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  display: none;
  border-bottom: 1px solid #dddddd;
  transition: all 1s;
}
.header .stiky .inp1 input {
  width: 70%;
  height: 30px;
  border: none;
  padding: 5px;
  font-size: 12px;
}
.header .stiky .inp1 {
  border: 1px solid #2c948b;
  margin-top: 10px;
  position: relative;
}
.header .stiky .inp1 button {
  width: 28%;
  border: none;
  background-color: #2c948b;
  color: #fff;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
}
.header .stiky .inp1 button a {
  color: #fff;
}
</style>



