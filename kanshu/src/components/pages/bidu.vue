<template>
  <div class="container bidu">
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
    <div class="row content">
      <div class="col-sm-12">
        <div></div>
      </div>
      <div class="col-sm-12">
        <div class="col-sm-12">
          <div v-for="(item,index) in lists" :key="index" class="col-sm-2 listItem">
            <div :style="{'backgroundImage':'url('+item.src+')'}"></div>
            <div>{{item.name}}</div>
            <div>{{item.ath}}</div>
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
import bidu1 from "../../assets/bidu/bidu1.jpg";
import bidu2 from "../../assets/bidu/bidu2.jpg";
import bidu3 from "../../assets/bidu/bidu3.jpg";
import bidu4 from "../../assets/bidu/bidu4.jpg";
import bidu5 from "../../assets/bidu/bidu5.jpg";
import bidu6 from "../../assets/bidu/bidu6.jpg";
import bidu7 from "../../assets/bidu/bidu7.jpg";
import bidu8 from "../../assets/bidu/bidu8.jpg";
import bidu9 from "../../assets/bidu/bidu9.jpg";
import bidu10 from "../../assets/bidu/bidu10.jpg";
import bidu11 from "../../assets/bidu/bidu11.jpg";
import bidu12 from "../../assets/bidu/bidu12.jpg";
import bidu13 from "../../assets/bidu/bidu13.jpg";
import bidu14 from "../../assets/bidu/bidu14.jpg";
import bidu15 from "../../assets/bidu/bidu15.jpg";
import bidu16 from "../../assets/bidu/bidu16.jpg";
import bidu17 from "../../assets/bidu/bidu17.jpg";
import bidu18 from "../../assets/bidu/bidu18.jpg";
import bidu19 from "../../assets/bidu/bidu19.jpg";
import bidu20 from "../../assets/bidu/bidu20.jpg";
import bidu21 from "../../assets/bidu/bidu21.jpg";
import bidu22 from "../../assets/bidu/bidu22.jpg";
import bidu23 from "../../assets/bidu/bidu23.jpg";
import bidu24 from "../../assets/bidu/bidu24.jpg";
import bidu25 from "../../assets/bidu/bidu25.jpg";
import bidu26 from "../../assets/bidu/bidu26.jpg";
import bidu27 from "../../assets/bidu/bidu27.jpg";
import bidu28 from "../../assets/bidu/bidu28.jpg";
import bidu29 from "../../assets/bidu/bidu29.jpg";
import bidu30 from "../../assets/bidu/bidu30.jpg";
import bidu31 from "../../assets/bidu/bidu31.jpg";
import bidu32 from "../../assets/bidu/bidu32.jpg";
import bidu33 from "../../assets/bidu/bidu33.jpg";
import bidu34 from "../../assets/bidu/bidu34.jpg";
import bidu35 from "../../assets/bidu/bidu35.jpg";
import bidu36 from "../../assets/bidu/bidu36.jpg";
import bidu37 from "../../assets/bidu/bidu37.jpg";
import bidu38 from "../../assets/bidu/bidu38.jpg";
import bidu39 from "../../assets/bidu/bidu39.jpg";
import bidu40 from "../../assets/bidu/bidu40.jpg";
import bidu41 from "../../assets/bidu/bidu41.jpg";
import bidu42 from "../../assets/bidu/bidu42.jpg";
import bidu43 from "../../assets/bidu/bidu43.jpg";
import bidu44 from "../../assets/bidu/bidu44.jpg";
import bidu45 from "../../assets/bidu/bidu45.jpg";
import bidu46 from "../../assets/bidu/bidu46.jpg";
import bidu47 from "../../assets/bidu/bidu47.jpg";
import bidu48 from "../../assets/bidu/bidu48.jpg";
import bidu49 from "../../assets/bidu/bidu49.jpg";
import bidu50 from "../../assets/bidu/bidu50.jpg";
import bidu51 from "../../assets/bidu/bidu51.jpg";
import bidu52 from "../../assets/bidu/bidu52.jpg";
import bidu53 from "../../assets/bidu/bidu53.jpg";
import bidu54 from "../../assets/bidu/bidu54.jpg";
import bidu55 from "../../assets/bidu/bidu55.jpg";
import bidu56 from "../../assets/bidu/bidu56.jpg";
import bidu57 from "../../assets/bidu/bidu57.jpg";
import bidu58 from "../../assets/bidu/bidu58.jpg";
import bidu59 from "../../assets/bidu/bidu59.jpg";
import bidu60 from "../../assets/bidu/bidu60.jpg";
export default {
  components: {
    navBar,
    footNav
  },
  data() {
    return {
      navs: {
        title: "一生必读的60本书",
        nav1: "资讯",
        nav2: "国学/古籍",
        nav3: "读书导航",
        list1: "图书电商",
        list2: "电子书",
        list3: "免费资源",
        list4: "网络小说",
        list5: "期刊论文"
      },
      lists: [
        { src: bidu1, name: "新译新旧约全书", ath: "吕振中译" },
        { src: bidu2, name: "论语", ath: "（春秋）孔丘著；杨伯峻，杨逢彬注译" },
        { src: bidu3, name: "物种起源", ath: "（英）达尔文著；舒德干等译" },
        { src: bidu4, name: "全球通史", ath: "美L.S.Stavrianos著" },
        { src: bidu5, name: "君王论", ath: "（意）尼可洛·马基雅维里（意）尼可洛·马基雅维里（N.Machiavelli）著；惠泉译" },
        { src: bidu6, name: "史记", ath: "（西汉）司马迁撰" },
        { src: bidu7, name: "孙子兵法", ath: "（春秋）孙武著" },
        { src: bidu8, name: "三国演义", ath: "罗贯中著" },
        { src: bidu9, name: "战争论", ath: "（德）卡尔·克劳塞维茨著；楼棋译" },
        { src: bidu10, name: "水浒传", ath: "（明）施耐庵著" },
        { src: bidu11, name: "曾国藩家书", ath: "（清）曾国藩著；杨洪，陶丽萍主编；董宝绥等编译" },
        { src: bidu12, name: "毛泽东传", ath: "金冲及主编；中共中央文献研究室编" },
        { src: bidu13, name: "汤姆叔叔的小屋", ath: "（美）斯陀夫人（Harriet Stowe）著；于溪滨译" },
        { src: bidu14, name: "红与黑", ath: "（法）斯丹达尔（Stendhal）著；郭宏安译" },
        { src: bidu15, name: "红楼梦", ath: "（清）曹雪芹，（清）高鹗著" },
        { src: bidu16, name: "悲惨世界", ath: "（法）雨果原著；文心改写" },
        { src: bidu17, name: "百年孤独", ath: "（哥伦比亚）马尔克斯（Marquez，GabrielGarcia）著；黄锦炎等译" },
        { src: bidu18, name: "老人与海", ath: "（美）顾纳斯特·海明威（Ernest Hemingway）著；海观译" },
        { src: bidu19, name: "国富论", ath: "（英）亚当·斯密（Adam Smith）著；唐日松等译；唐日松译" },
        { src: bidu20, name: "胡雪岩全传", ath: "高阳著" },
        { src: bidu21, name: "飘", ath: "（美）玛格丽特·米切尔著；赵志雄编译" },
        { src: bidu22, name: "钢铁是怎样炼成的", ath: "（苏）尼·奥斯特洛夫斯基（Н.Островский）著；曹缦西，王志棣译" },
        { src: bidu23, name: "西游记", ath: "（明）吴承恩著" },
        { src: bidu24, name: "呐喊", ath: "鲁迅著；孙郁点评" },
        { src: bidu25, name: "小王子", ath: "（法）圣埃克絮佩里（Antoine de Saint-Exupery）著；周克希译" },
        { src: bidu26, name: "本草纲目", ath: "（明）李时珍著；陈贵廷等点校" },
        { src: bidu27, name: "昆虫记", ath: "（法）法布尔著；王大文译" },
        { src: bidu28, name: "倾城之恋", ath: "张爱玲著" },
        { src: bidu29, name: "一千零一夜", ath: "张晓兰编译" },
        { src: bidu30, name: "堂吉诃德", ath: "（西）塞万提斯（Miguel de Cervantes Saavedra）著；屠孟超译" },
        { src: bidu31, name: "变形记", ath: "（奥）卡夫卡原著；张荣昌等译" },
        { src: bidu32, name: "吉檀迦利", ath: "（印）罗宾德拉纳德·泰戈尔（Rabindranath Tagore）著；林志豪译" },
        { src: bidu33, name: "欧也妮·葛朗台", ath: "（法）巴尔扎克原著；麦倩宜改写" },
        { src: bidu34, name: "哈姆莱特", ath: "（英）莎士比亚著；朱生豪译" },
        { src: bidu35, name: "简·爱", ath: "（英）夏洛蒂·勃朗特（Charlotte Bronte）著；祝庆英译" },
        { src: bidu36, name: "雷雨", ath: "曹禺著" },
        { src: bidu37, name: "茶花女", ath: "（法）小仲马著；孙良方，夏家珍译" },
        { src: bidu38, name: "神曲", ath: "（意）但丁（Alighieri Dante）著；（法）杜雷（Gustave Dore）插图；黄晓宏编译" },
        { src: bidu39, name: "梦的解析", ath: "（奥）弗洛伊德（Sigmund Freud）著；彭润金译" },
        { src: bidu40, name: "雪国", ath: "（日）川端康成著；叶渭渠，唐月梅译" },
        { src: bidu41, name: "边城集", ath: "沈从文著" },
        { src: bidu42, name: "喧哗与骚动", ath: "（美）威廉·福克纳（William Faulkner）著；李文俊译" },
        { src: bidu43, name: "复活", ath: "（俄）列夫·托尔斯泰著；王景生译" },
        { src: bidu44, name: "罪与罚", ath: "（俄）陀思妥耶夫斯基（Фёдор МихйловичДостоевский）著；非琴译" },
        { src: bidu45, name: "四世同堂", ath: "老舍著" },
        { src: bidu46, name: "不能承受的生命之轻", ath: "[捷]米兰·昆德拉（Milan Kundera）著；许钧译" },
        { src: bidu47, name: "围城", ath: "钱钟书著" },
        { src: bidu48, name: "情人", ath: "（法）玛格丽特·杜拉斯（Marguerite Duras）著；王道乾译" },
        { src: bidu49, name: "西厢记", ath: "（元）王实甫撰；吴书荫校点" },
        { src: bidu50, name: "苏菲的世界", ath: "（挪威）乔斯坦·贾德（Jostein Gaarder）著；萧宝森译" },
        { src: bidu51, name: "瓦尔登湖", ath: "（美）亨利·梭罗（Henry David Thoreau）著；徐迟译" },
        { src: bidu52, name: "穆斯林的葬礼", ath: "霍达著" },
        { src: bidu53, name: "冰心散文选集", ath: "冰心著；刘家鸣编" },
        { src: bidu54, name: "日瓦戈医生", ath: "（俄）鲍里斯·帕斯捷尔纳克著；蓝英年，张秉衡译" },
        { src: bidu55, name: "美的历程", ath: "李泽厚著" },
        { src: bidu56, name: "麦田里的守望者", ath: "（美）J.D.塞林格（J.D.Salinger）著；施咸荣译" },
        { src: bidu57, name: "伊索寓言", ath: "（古希腊）伊索著；白山译" },
        { src: bidu58, name: "活着", ath: "余华著" },
        { src: bidu59, name: "我的精神家园", ath: "王小波著" },
        { src: bidu60, name: "我与地坛", ath: "史铁生著；杨卫东，章汉亭，黄复摄影" }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.bidu {
  padding-top: 50px;
}
.bidu .content > div:nth-of-type(1) > div {
  width: 100%;
  height: 350px;
  background-image: url(../../assets/bidu/bidu.jpg);
}

.bidu .content > div:nth-of-type(2) > div {
  border: 1px solid #dddddd;
  margin-top: 20px;
}
.bidu .content .listItem {
  padding: 15px;
}
.bidu .content .listItem > div:nth-of-type(1) {
  height: 140px;
  width: 100px;
  margin: auto;
  cursor: pointer;
  background-size: cover;
}
.bidu .content .listItem > div:nth-of-type(2) {
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bidu .content .listItem > div:nth-of-type(2):hover {
  color: #bb6060;
}
.bidu .content .listItem > div:nth-of-type(3) {
  padding-left: 15px;
  color: #999;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>


