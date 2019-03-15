<template>
      <div class="floatList">
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
      $(`.floatList .searchList li>span`).css({ color: "#777", fontSize: "14px" });
      $(`.floatList .searchList li #shu`).css({ display: "none" });
      $(`.search .searchList li #ath`).css({ display: "none" });

      $(`.floatList .searchList li:eq(${n})>span`).css({
        color: "red",
        fontSize: "20px"
      });

      $(`.floatList .searchList li:eq(${n})>div:eq(0)`).css({
        display: "block",
        backgroundSize: "cover",
        height: "100px",
        width: "70px",
        margin: "10px 10px 10px 15px",
        cursor: "pointer"
      });
      $(`.floatList .searchList li:eq(${n})>div:eq(1)>span`).css({
        display: "inline",
        color: "#999"
      });
    }
  }
};
</script>
<style>
.floatList p{
    font-size: 18px;
    padding-top: 10px;
    color: #555;
}
.floatList .searchList ul {
  border: 1px solid #dddddd;
  padding: 0;
}
.floatList .searchList ul li {
  list-style: none;
  padding: 10px 40px 10px 10px;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #eeeeee;
}
.floatList .searchList ul li > span {
  color: #777;
}
.floatList .searchList ul li:nth-of-type(1) > span {
  color: red;
  font-size: 20px;
}
.search .searchList ul li:nth-last-of-type(1) {
  border-bottom: none;
}
.floatList .searchList ul li:nth-of-type(1) > div:nth-of-type(1) {
  height: 100px;
  width: 70px;
  background-image:url(../../assets/search1.jpg);
  background-size: cover;
  margin: "10px 10px 10px 15px";
}
.floatList .searchList ul li > div:nth-of-type(2) {
  padding: 0;
  margin-left: 15px;
  width: 150px;
}
.floatList .searchList ul li > div:nth-of-type(2) a {
  color: #666;
  text-decoration: none;
  font-size: 15px;
}
.floatList .searchList ul li > div:nth-of-type(2) a:hover {
  color: rgb(240, 119, 119);
}
.floatList .searchList ul li > div:nth-of-type(2) span {
  display: none;
}
.floatList .searchList ul li:nth-of-type(1) > div:nth-of-type(2) span {
  color: #999;
  display: inline;
  padding-top: 10px;
}
</style>


