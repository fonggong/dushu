<template>
  <div id="wrapper">
    <header-bar></header-bar>
    <!-- <div class="top">
      <div class="container">
        <div class="top-content">
          <div>好好学习，天天向上</div>
          <div>
            <router-link id="login" to="/login">登录</router-link>&ensp;|
            <router-link to="/register">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4 logoImg">
          <router-link to="/home">
            <img src="../assets/logo.png" alt="图片暂时无法显示">
          </router-link>
        </div>
        <div class="col-sm-5">
          <div class="inp">
            <input type="text" placeholder="输入想要查找的内容">
            <button @click='search'>搜索</button>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="myAdmin">
            <div>我的账号</div>
            <div>我的书架</div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <ul>
              <li class="li-head">产品</li>
              <li class="li-item">
                <router-link to="/video">视频</router-link>
              </li>
              <li class="li-item">
                <router-link to="/ouerBook">书籍</router-link>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <ul>
              <li class="li-head">关于</li>
              <li class="li-item">
                <router-link to="/about">了解我们</router-link>
              </li>
              <li class="li-item">
                <router-link to="/about">加入我们</router-link>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <ul>
              <li class="li-head">服务支持</li>
              <li class="li-item">
                <router-link to='/help'>技术支持</router-link>
              </li>
              <li class="li-item">
                <router-link to="/help">售后服务</router-link>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <div class="head">100-800-200</div>
            <div class="box">联系客服</div>
            <div class="time">周一至周日 9:00 - 22:00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import msg from '../data/msg.js'
import headerBar from './public/headerBar'
export default {
  //name: "app",
  components:{headerBar},
  data() {
    return {
     
    };
  },
  methods: {
    search(){
      this.$router.push('/search')
    }
  },
  
  updated() {
    let user=$('#wrapper #login');
    // this.$http
    //   .get("/getUsername")
    //   .then(function(res) {
    //     user.html(`<span class='glyphicon glyphicon-user'></span>&ensp;${msg.username}`)
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
      //user.html(`<span class='glyphicon glyphicon-user'></span>&ensp;${msg.username}`)
  }
};
</script>

<style>
#wrapper {
  padding-top: 36px;
}
#wrapper .top {
  height: 36px;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: #dddddd 1px solid;
  z-index: 20;
  position: fixed;
  padding: 4px 15px;
  line-height: 30px;
  top: 0;
  left: 0;
}

#wrapper .top-content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #777;
}

#wrapper .top-content > div:nth-of-type(2) > a {
  color: #777;
  text-decoration: none;
}
#wrapper .logoImg > a {
  display: inline-block;
  height: 100%;
  width: 100%;
  text-align: center;
}
#wrapper .logoImg > a > img {
  height: 100%;
  width: 100%;
  max-width: 350px;
}

#wrapper .inp {
  width: 100%;
  border: 1px solid #61abaa;
  height: 36px;
  margin-top: 8%;

  position: relative;
}
#wrapper .inp > input {
  width: 70%;
  height: 34px;
  padding-right: 5px;
  padding-left: 5px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

#wrapper .inp > button {
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

#wrapper .myAdmin {
  height: 30px;
  width: 100%;
  text-align: center;
  border: 1px solid #eeeeee;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

#wrapper .myAdmin > div {
  height: 100%;
  width: 50%;
  color: #777777;
  box-sizing: border-box;
  font-size: 13px;
  cursor: pointer;
  line-height: 30px;
}
#wrapper .myAdmin > div:hover {
  background-color: #61abaa;
  color: #fff;
}
#wrapper .myAdmin > div:nth-of-type(1) {
  border-right: 1px solid #eeeeee;
}

.footer {
  border-top: #e7e7e7 1px solid;
  background: #f8f8f8;
  padding: 30px 0;
}
.footer li {
  list-style: none;
  width: 50%;
  text-align: center;
}
.footer .li-head {
  font-size: 18px;
  margin-bottom: 10px;
}
.footer .li-item > a {
  color: #666;
  text-decoration: none;
}
.footer .li-item > a:hover {
  color: #e77a95;
}
.footer .li-item {
  margin-top: 10px;
}
.footer .box {
  width: 100%;
  height: 30px;
  background: #337ab7;
  margin: 10px 0;
  text-align: center;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
}
.footer .head {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.footer .time {
  font-size: 14px;
  text-align: center;
}
</style>


