<template>
  <div class="row search">
    <div class="col-sm-12">很抱歉！出版图书中没有找到相关的图书，试着重新搜索一下吧！</div>
    <div class="col-sm-8">
      <div>
        <ul>
          <li>搜索范围：</li>
          <li>出版图书</li>
          <li>国学/古籍</li>
          <li>在线阅读</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>搜索范围：</li>
          <li>相关度</li>
          <li>更新时间</li>
          <li>出版日期</li>
        </ul>
      </div>
    </div>
    <div class="col-sm-4">
      <div>
        <p>读书推荐</p>
        <div class="searchList">
          <ul>
            <li @mouseover="changeSty(index)" v-for="(item, index) in msg" :key="index">
              <span>{{item.li}}</span>
              <div id="shu" :style="{backgroundImage:'url('+ item.src +')'}"></div>
              <div>
                <div>
                  <a href="#">{{item.name}}</a>
                </div>
                <span id="ath">{{item.author}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import search1 from "../../assets/search1.jpg";
import search2 from "../../assets/search2.jpg";
import search3 from "../../assets/search3.jpg";
import search4 from "../../assets/search4.jpg";
import search5 from "../../assets/search5.jpg";
import search6 from "../../assets/search6.jpg";
import search7 from "../../assets/search7.jpg";
import search8 from "../../assets/search8.jpg";
import search9 from "../../assets/search9.jpg";
import search10 from "../../assets/search10.jpg";
export default {
  data() {
    return {
      msg: [
        { li: "01", src: search1, name: "一千零一夜2", author: "林柔榆" },
        {
          li: "02",
          src: search2,
          name: "小女花不弃典藏版（全三册）",
          author: "桩桩"
        },
        { li: "03", src: search3, name: "粉妆夺谋.5", author: "西子情" },
        { li: "04", src: search4, name: "重返十七岁", author: "莱弗" },
        { li: "05", src: search5, name: "君子报恩", author: "囧囧有妖" },
        { li: "06", src: search6, name: "她的小心思", author: "曲小蛐" },
        {
          li: "07",
          src: search7,
          name: "恋爱教会你的这件小事",
          author: "大年年"
        },
        { li: "08", src: search8, name: "写实派高糖", author: "吕天逸" },
        {
          li: "09",
          src: search9,
          name: "此去经年，此爱绵绵（上下）",
          author: "恩很宅"
        },
        {
          li: "10",
          src: search10,
          name: "我喜欢你，像风走了八千里",
          author: "末那大叔"
        }
      ]
    };
  },
  methods: {
    changeSty(n) {
      $(`.search .searchList li>span`).css({ color: "#777", fontSize: "14px" });
      $(`.search .searchList li #shu`).css({ display: "none" });
      $(`.search .searchList li #ath`).css({ display: "none" });

      $(`.search .searchList li:eq(${n})>span`).css({
        color: "red",
        fontSize: "20px"
      });

      $(`.search .searchList li:eq(${n})>div:eq(0)`).css({
        display: "block",
        backgroundSize: "cover",
        height: "100px",
        width: "70px",
        margin: "10px 10px 10px 15px",
        cursor: "pointer"
      });
      $(`.search .searchList li:eq(${n})>div:eq(1)>span`).css({
        display: "inline",
        color: "#999"
      });
    }
  }
};
</script>

<style>
.search > div:nth-of-type(1) {
  padding: 10px 0;
  font-size: 20px;
  color: #777;
}
.search > div:nth-of-type(2) {
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
}
.search > div:nth-of-type(2) > div > ul {
  height: 50px;
  padding: 20px 0 0 0;
}
.search > div:nth-of-type(2) > div > ul > li {
  float: left;
  list-style: none;
  margin-right: 10px;
  padding: 3px 8px;
  color: #666;
}
.search > div:nth-of-type(2) > div > ul > li:nth-of-type(2) {
  background-color: rgb(135, 164, 180);
  color: #ffffff;
}
.search > div:nth-of-type(2) > div > ul > li:nth-of-type(3),
.search > div:nth-of-type(2) > div > ul > li:nth-of-type(4) {
  border: 1px solid #dddddd;
  cursor: pointer;
}
.search > div:nth-of-type(2) > div > ul > li:nth-of-type(3):hover {
  color: rgb(141, 76, 76);
}
.search > div:nth-of-type(2) > div > ul > li:nth-of-type(4):hover {
  color: rgb(141, 76, 76);
}

.search .searchList ul {
  border: 1px solid #dddddd;
  padding: 0;
}
.search .searchList ul li {
  list-style: none;
  padding: 10px 40px 10px 10px;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #eeeeee;
}
.search .searchList ul li > span {
  color: #777;
}
.search .searchList ul li:nth-of-type(1) > span {
  color: red;
  font-size: 20px;
}
.search .searchList ul li:nth-last-of-type(1) {
  border-bottom: none;
}
.search .searchList ul li:nth-of-type(1) > div:nth-of-type(1) {
  height: 100px;
  width: 70px;
  background-image:url(../../assets/search1.jpg);
  background-size: cover;
  margin: "10px 10px 10px 15px";
}
.search .searchList ul li > div:nth-of-type(2) {
  padding: 0;
  margin-left: 15px;
  width: 150px;
}
.search .searchList ul li > div:nth-of-type(2) a {
  color: #666;
  text-decoration: none;
  font-size: 15px;
}
.search .searchList ul li > div:nth-of-type(2) a:hover {
  color: rgb(240, 119, 119);
}
.search .searchList ul li > div:nth-of-type(2) span {
  display: none;
}
.search .searchList ul li:nth-of-type(1) > div:nth-of-type(2) span {
  color: #999;
  display: inline;
  padding-top: 10px;
}
</style>
