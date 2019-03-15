<template>
  <div class="container public">
    <!-- 导航栏 -->
    <div class="row">
      <div class="col-sm-12">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">{{tit}}</a>
            </div>
            <div>
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="#">{{nav1}}</a>
                </li>
                <li>
                  <a href="#">{{nav2}}</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    {{nav3}}
                    <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">{{list1}}</a>
                    </li>
                    <li>
                      <a href="#">{{list2}}</a>
                    </li>
                    <li>
                      <a href="#">{{list3}}</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">{{list4}}</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="#">{{list5}}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- 主体 -->
    <div class="row yuan">
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
</template>
<script>
export default {
  props: [
    "tit",
    "nav1",
    "nav2",
    "nav3",
    "list1",
    "list2",
    "list3",
    "list4",
    "list5"
  ],
  methods: {
    search() {
      this.$router.push("/search");
    }
  }
};
</script>
<style>
.public .yuan{
    padding: 0 15px;
}
.public .navbar-brand {
  color: #666;
  font-size: 20px;
}
.public .navbar-brand:hover{
  color: #d18282;
}
.public .navbar-nav {
  float: right;
}
.public .logoImg > a {
  display: inline-block;
  height: 100%;
  width: 100%;
  text-align: center;
}
.public .logoImg > a > img {
  height: 100%;
  width: 100%;
  max-width: 350px;
}

.public .inp {
  width: 100%;
  border: 1px solid #61abaa;
  height: 36px;
  margin-top: 8%;

  position: relative;
}
.public .inp > input {
  width: 70%;
  height: 34px;
  padding-right: 5px;
  padding-left: 5px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

.public .inp > button {
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

.public .myAdmin {
  height: 30px;
  width: 100%;
  text-align: center;
  border: 1px solid #eeeeee;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.public .myAdmin > div {
  height: 100%;
  width: 50%;
  color: #777777;
  box-sizing: border-box;
  font-size: 13px;
  cursor: pointer;
  line-height: 30px;
}
.public .myAdmin > div:hover {
  background-color: #61abaa;
  color: #fff;
}
.public .myAdmin > div:nth-of-type(1) {
  border-right: 1px solid #eeeeee;
}
</style>

