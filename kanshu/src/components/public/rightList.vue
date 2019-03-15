<template>
    <div class="itemH">
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
</template>
<script>
import navBar from "./nav";
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
    data(){
        return{
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
      ]
        }
    }
}
</script>
<style>
.itemH .rightList {
  border: 1px solid #dddddd;
  border-bottom: none;
  padding: 0;
}
.itemH .rightList > div {
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #dddddd;
  padding: 20px 25px;
}
.itemH .rightList > div > div:nth-of-type(1) {
  height: 120px;
  width: 100px;
  cursor: pointer;
  background-size: cover;
}
.itemH .rightList > div > div:nth-of-type(2) {
  margin-left: 25px;
}
.itemH .rightList > div > div:nth-of-type(2) > p:nth-of-type(1) {
  padding: 0;
}
.itemH .rightList > div > div:nth-of-type(2) > p:nth-of-type(1) > a {
  color: #555;
  font-size: 16px;
  text-decoration: none;
}
.itemH .rightList > div > div:nth-of-type(2) > p:nth-of-type(1) > a:hover {
  color: rgb(192, 91, 91);
}
.itemH .rightList > div > div:nth-of-type(2) > p:nth-of-type(2) {
  padding: 0;
}
.itemH
  .rightList
  > div
  > div:nth-of-type(2)
  > p:nth-of-type(2)
  > span:nth-of-type(1) {
  color: #999;
  font-size: 13px;
}
.itemH
  .rightList
  > div
  > div:nth-of-type(2)
  > p:nth-of-type(2)
  > span:nth-of-type(2) {
  color: #666;
  font-size: 13px;
}
.itemH .rightList > div > div:nth-of-type(2) > p:nth-of-type(3) {
  font-size: 13px;
  color: #999;
  padding-left: 20px;
}
.itemH .zuijin {
  padding: 10px 0;
  font-size: 18px;
  color: #666;
}
</style>


