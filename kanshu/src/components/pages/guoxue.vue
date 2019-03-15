<template>
  <div class="container guoxue">
    <!-- 导航栏 -->
    <nav-bar
      :tit="navs.title"
      :nav1="navs.nav1"
      :nav2="navs.nav2"
      :nav3="navs.nav3"
      :list1="navs.list1"
      :list2="navs.list2"
      :list3="navs.list3"
      :list4="navs.list4"
      :list5="navs.list5"
    ></nav-bar>

    <!-- 主体 -->
    <div class="row list">
      <div class="col-sm-3">
        <ul class="topList">
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">礼部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">子部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">集部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">诗部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">儒部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">易部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">艺部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">医部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">丛部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">佛部</a>
          </li>
          <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <a href="#">道部</a>
          </li>
        </ul>
        <p>国学精彩推荐</p>
        <ul class="bottomList">
          <li>
            <span>01</span>
            <a href="#">汉书</a>
          </li>
          <li>
            <span>02</span>
            <a href="#">后汉书</a>
          </li>
          <li>
            <span>03</span>
            <a href="#">后汉书2</a>
          </li>
          <li>
            <span>04</span>
            <a href="#">晋书</a>
          </li>
          <li>
            <span>05</span>
            <a href="#">宋书</a>
          </li>
          <li>
            <span>06</span>
            <a href="#">南齐书</a>
          </li>
          <li>
            <span>07</span>
            <a href="#">梁书</a>
          </li>
          <li>
            <span>08</span>
            <a href="#">陈书</a>
          </li>
          <li>
            <span>09</span>
            <a href="#">魏书</a>
          </li>
          <li>
            <span>10</span>
            <a href="#">北齐书</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-9">
        <div class="col-sm-12 rightImg"></div>
        <div class="zuijin col-sm-12">最近更新</div>
        <div class="col-sm-12 rightList">
          <div v-for="(item,index) in lists" :key="index" class="col-sm-6">
            <div :style="{backgroundImage:'url('+item.src+')'}"></div>
            <div>
              <p>
                <a href="#">{{item.name}}</a>
              </p>
              <p>
                <span>{{item.time}}</span>
                <span>{{item.ath}}</span>
              </p>
              <p>暂缺简介...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import navBar from "../public/nav";
import footNav from "../public/footNav";
import guoxue1 from "../../assets/guoxue/guoxue1.jpg";
import guoxue2 from "../../assets/guoxue/guoxue2.jpg";
import guoxue3 from "../../assets/guoxue/guoxue3.jpg";
import guoxue4 from "../../assets/guoxue/guoxue4.jpg";
import guoxue5 from "../../assets/guoxue/guoxue5.jpg";
import guoxue6 from "../../assets/guoxue/guoxue6.jpg";
import guoxue7 from "../../assets/guoxue/guoxue7.jpg";
import guoxue8 from "../../assets/guoxue/guoxue8.jpg";
import guoxue9 from "../../assets/guoxue/guoxue9.jpg";
import guoxue10 from "../../assets/guoxue/guoxue10.jpg";
import guoxue11 from "../../assets/guoxue/guoxue11.jpg";
import guoxue12 from "../../assets/guoxue/guoxue12.jpg";
import guoxue13 from "../../assets/guoxue/guoxue13.jpg";
import guoxue14 from "../../assets/guoxue/guoxue14.jpg";
export default {
  name: "guoxue",
  components: {
    navBar,
    footNav
  },
  data() {
    return {
      lists: [
        { src: guoxue1, name: "至顺镇江志", time: "元·", ath: "脱因" },
        { src: guoxue2, name: "至正四明续志", time: "元·", ath: "王元恭" },
        { src: guoxue3, name: "至大金陵新志", time: "元·", ath: "张铉" },
        { src: guoxue4, name: "至元嘉禾志", time: "元·", ath: "单庆" },
        { src: guoxue5, name: "职方外纪", time: "明·", ath: "艾儒略" },
        { src: guoxue6, name: "续补永平志", time: "清·", ath: "唐敬一" },
        { src: guoxue7, name: "续纂淮关统志", time: "明·", ath: "马麟" },
        { src: guoxue8, name: "续修台湾府志", time: "清·", ath: "余文仪" },
        { src: guoxue9, name: "续修台湾县志", time: "清·", ath: "谢金銮" },
        { src: guoxue10, name: "粤剑编", time: "明·", ath: "王临亨" },
        { src: guoxue11, name: "类编长安志", time: "元·", ath: "骆天骧" },
        { src: guoxue12, name: "稀见地方志提要", time: "元·", ath: "陈光贻" },
        { src: guoxue13, name: "福建通志台湾府", time: "清·", ath: "佚名" },
        { src: guoxue14, name: "福州府志乾隆本", time: "清·", ath: "徐景熹" }
      ],
      navs: {
        title: "弘扬中华文化，复兴国学传承",
        nav1: "国学/古籍",
        nav2: "出版图书",
        nav3: "读书导航",
        list1: "图书电商",
        list2: "电子书",
        list3: "免费资源",
        list4: "网络小说",
        list5: "期刊论文"
      }
    };
  },
  methods: {
    search() {
      this.$router.push("/search");
    }
  }
};
</script>
<style>
.guoxue {
  padding-top: 50px;
}

.guoxue .list .topList {
  border: 1px solid #dddddd;
}
.guoxue .list .topList {
  border-top: 3px solid #61abaa;
  border-bottom: none;
  padding: 0;
}
.guoxue .list .topList > li {
  list-style: none;
  border-bottom: 1px solid #dddddd;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.guoxue .list .topList > li .glyphicon {
  color: #777;
  padding-right: 10px;
}
.guoxue .list .topList > li > a {
  color: #777;
  font-size: 18px;
}
.guoxue .list .topList > li:hover {
  background-color: #db92c9;
}
.guoxue .list .topList > li:hover > a {
  color: #fff;
}

.guoxue .list p {
  font-size: 20px;
  padding: 5px 0;
  color: #555;
}
.guoxue .list .bottomList {
  border: 1px solid #dddddd;
  border-bottom: none;
  padding: 0;
}
.guoxue .list .bottomList > li {
  list-style: none;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dddddd;
  padding-left: 10px;
  cursor: pointer;
}
.guoxue .list .bottomList > li > span {
  font-size: 14px;
  color: #777;
}
.guoxue .list .bottomList > li > a {
  color: #666;
  text-decoration: none;
  margin-left: 20px;
}
.guoxue .list .bottomList > li:hover > span {
  font-size: 18px;
  color: #ab6195;
}

/* 右侧列表 */
.guoxue .rightList {
  border: 1px solid #dddddd;
  border-bottom: none;
  padding: 0;
}
.guoxue .rightList > div {
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #dddddd;
  padding: 20px 25px;
}
.guoxue .rightList > div > div:nth-of-type(1) {
  height: 120px;
  width: 100px;
  cursor: pointer;
  background-size: cover;
}
.guoxue .rightList > div > div:nth-of-type(2) {
  margin-left: 25px;
}
.guoxue .rightList > div > div:nth-of-type(2) > p:nth-of-type(1) {
  padding: 0;
}
.guoxue .rightList > div > div:nth-of-type(2) > p:nth-of-type(1) > a {
  color: #555;
  font-size: 16px;
  text-decoration: none;
}
.guoxue .rightList > div > div:nth-of-type(2) > p:nth-of-type(1) > a:hover {
  color: rgb(192, 91, 91);
}
.guoxue .rightList > div > div:nth-of-type(2) > p:nth-of-type(2) {
  padding: 0;
}
.guoxue
  .rightList
  > div
  > div:nth-of-type(2)
  > p:nth-of-type(2)
  > span:nth-of-type(1) {
  color: #999;
  font-size: 13px;
}
.guoxue
  .rightList
  > div
  > div:nth-of-type(2)
  > p:nth-of-type(2)
  > span:nth-of-type(2) {
  color: #666;
  font-size: 13px;
}
.guoxue .rightList > div > div:nth-of-type(2) > p:nth-of-type(3) {
  font-size: 13px;
  color: #999;
  padding-left: 20px;
}
.guoxue .rightImg {
  height: 120px;
  background-image: url(../../assets/guoxue/guoxue.png);
  background-size: cover;
}
.guoxue .zuijin {
  padding: 10px 0;
  font-size: 18px;
  color: #666;
}
</style>


