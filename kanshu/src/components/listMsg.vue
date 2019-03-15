<template>
  <div class="listMsg1">
    <div class="row">
      <div class="line1"></div>
      <div class="col-sm-6">
        <p>读书咨询</p>
      </div>
      <div class="col-sm-6">
        <ul>
          <li>
            <router-link to="#">新闻</router-link>
          </li>
          <li>
            <router-link to="#">书讯</router-link>
          </li>
          <li>
            <router-link to="#">书评</router-link>
          </li>
          <li>
            <router-link to="#">历史</router-link>
          </li>
          <li>
            <router-link to="#">文化</router-link>
          </li>
          <li>
            <router-link to="#">艺术</router-link>
          </li>
          <li>
            <router-link to="#">人物</router-link>
          </li>
          <li id="noL">
            <router-link to="#">书摘</router-link>
          </li>
        </ul>
      </div>
      <div class="row listImg">
        <div class="col-sm-3" v-for="item in listMsg" :key="item.url">
          <router-link :to="item.news" target="_blank">
            <img :src="item.src" alt="#">
          </router-link>
          <p>
            <router-link :to="item.news" target="_blank">{{item.msg1}}</router-link>
          </p>
          <div>{{item.msg2}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import src1 from "../assets/listMsg1.jpg";
import src2 from "../assets/listMsg2.jpg";
import src3 from "../assets/listMsg3.jpg";
import src4 from "../assets/listMsg4.jpg";
export default {
  data() {
    return {
      listMsg: [
        {
          news: "/news1",
          src: src1,
          msg1: "蔡国强将“炸”到古庞贝，个展“在火山里”对话古罗马文明",
          msg2:
            "昨天，艺术家蔡国强在意大利佛罗伦萨乌菲齐美术馆的个展“花曲”正式落幕。 意大利那不勒斯国家考古博物馆（National Archaeological Museum of Naples）近日宣布，将于2"
        },
        {
          news: "/news2",
          src: src2,
          msg1: "全国十大考古发现初评结果揭晓 20个项目入围",
          msg2:
            "2018年度全国十大考古新发现初评结果于2月19日揭晓。根据投票结果，广东英德青塘遗址、浙江德清中初鸣良渚文化玉器加工作坊遗址群、辽宁北镇医巫闾山辽代帝陵遗址群、辽宁庄河海域甲午沉舰遗址（经远舰）水下"
        },
        {
          news: "/news3",
          src: src3,
          msg1: "故宫博物院94年来首次在晚间对公众开放",
          msg2:
            "正月十五元宵节，古称上元节，是新一年的第一个月圆之夜，也是新春庆贺活动的延续。它起源、成型于汉代，经过长期的发展、演变，形成了今天吃元宵、赏月、燃灯放焰、猜灯谜、舞狮子、舞龙等民俗。作为中华传统文化的"
        },
        {
          news: "/news4",
          src: src4,
          msg1: "古人是如何过元宵节的？",
          msg2:
            "花市灯如昼，元宵共团圆。又到正月十五元宵节，这是新年开始的第一个重要传统节日。随着社会的发展，可供人们聚会、庆祝的节日不少，元宵节也不那么令人瞩目，但在古时，这一日堪称狂欢节，甚至比除夕还热闹。古往今"
        }
      ]
    };
  }
};
</script>
<style>
.listMsg1 .line1 {
  height: 10px;
  border-bottom: 1px solid #eeeeee;
}
.listMsg1 p {
  font-size: 20px;
  font-family: "微软雅黑";
}
.listMsg1 ul {
  float: right;
}
.listMsg1 ul > li {
  float: left;
  margin: 4px 4px;
  list-style: none;
}
.listMsg1 ul > li:not(#noL)::after {
  content: "/";
  color: #999;
  margin-left: 6px;
}
.listMsg1 ul > li > a {
  color: #444;
  font-size: 12px;
  text-decoration: none;
}
.listMsg1 ul > li > a:hover {
  color: rgb(207, 91, 91);
}
.listMsg1 .listImg {
  clear: both;
  border: 1px solid #dddddd;
  width: 100%;
  margin: auto;
}
.listMsg1 .listImg > div {
  box-sizing: border-box;
  padding: 10px;
}
.listMsg1 .listImg > div img {
  width: 100%;
}
.listMsg1 .listImg > div p {
  height: 35px;
  overflow: hidden;
  padding: 8px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.listMsg1 .listImg > div p > a {
  color: #333;
  font-family: "微软雅黑";
  text-decoration: none;
}
.listMsg1 .listImg > div p > a:hover {
  color: rgb(212, 100, 100);
}
.listMsg1 .listImg > div > div {
  position: relative;
  height: 60px;
  line-height: 20px;
  color: #666;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.listMsg1 .listImg > div > div::after {
  content: "...";
  position: absolute;
  font-weight: bold;
  bottom: 0;
  right: 0;
  padding: 0px 18px 1px 42px;
  background: url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png)
    repeat-y;
  /* background-color:#ffffff; */
}
</style>

