<template>
  <div class="container yingxiang">
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
   
      <div class="row yuan">
         <div class="col-sm-12 books">
        <div v-for="(item,index) in books" :key="index" class="col-sm-2 booksList">
          <div>{{item.name}}</div>
          <div>{{item.name}}</div>
          <div>{{item.ath}}</div>
        </div>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import navBar from "../public/nav";
import footNav from "../public/footNav";
export default {
  components: {
    navBar,
    footNav
  },
  data() {
    return {
      navs: {
        title: "影响中国的100本书",
        nav1: "资讯",
        nav2: "国学/古籍",
        nav3: "读书导航",
        list1: "图书电商",
        list2: "电子书",
        list3: "免费资源",
        list4: "网络小说",
        list5: "期刊论文"
      },
      books: [
        { name: "周易", ath: "佚名" },
        { name: "管子（简）", ath: "" },
        { name: "老子道德经", ath: "" },
        { name: "论语", ath: "春秋鲁·孔丘" },
        { name: "孟子", ath: "战国鲁·孟轲" },
        { name: "商君书", ath: "秦·商鞅" },
        { name: "庄子", ath: "战国·庄周" },
        { name: "荀子", ath: "战国·荀况" },
        { name: "墨子", ath: "战国·墨翟" },
        { name: "韩非子", ath: "战国韩·韩非" },
        { name: "春秋繁露", ath: "汉·董仲舒" },
        { name: "白虎通义", ath: "（东汉）班固" },
        { name: "论衡", ath: "汉·王冲" },
        { name: "周易正义", ath: "唐·孔颖达" },
        { name: "四书章句集注", ath: "宋·朱熹" },
        { name: "传习录", ath: "明·王守仁" },
        { name: "焚书", ath: "明·李贽" },
        { name: "续焚书", ath: "明·李贽" },
        { name: "明夷待访录", ath: "清·黄宗羲" },
        { name: "定庵文集、续集", ath: "清·龚自珍" },
        { name: "天朝田亩制度", ath: "清·洪秀全" },
        { name: "大同书", ath: "清·康有为" },
        { name: "革命军", ath: "邹容" },
        { name: "警世钟", ath: "陈天华" },
        { name: "孙文学说", ath: "孙中山" },
        { name: "尚书", ath: "春秋鲁·孔丘" },
        { name: "吕氏春秋", ath: "战国·吕不韦" },
        { name: "春秋三传详释", ath: "熊逸" },
        { name: "国语", ath: "春秋鲁·左丘明" },
        { name: "战国策", ath: "西汉·刘向" },
        { name: "周礼", ath: "西周·周公旦" },
        { name: "礼记", ath: "汉·戴德" },
        { name: "史记", ath: "汉·司马迁" },
        { name: "汉书", ath: "汉·班固" },
        { name: "前汉纪", ath: "汉·荀悦" },
        { name: "后汉书", ath: "南朝宋·范晔" },
        { name: "后汉纪", ath: "晋·袁宏" },
        { name: "三国志", ath: "晋·陈寿" },
        { name: "晋书", ath: "唐·房玄龄" },
        { name: "宋书", ath: "梁·沈约" },
        { name: "南齐书", ath: "南朝梁·萧子显" },
        { name: "梁书", ath: "唐·姚思廉" },
        { name: "陈书", ath: "唐·姚思廉" },
        { name: "魏书", ath: "北齐·魏收" },
        { name: "北齐书", ath: "唐·李百药" },
        { name: "周书", ath: "唐·令狐德棻" },
        { name: "隋书", ath: "唐·魏征" },
        { name: "唐律疏议", ath: "唐·长孙无忌" },
        { name: "南史", ath: "唐·李延寿" },
        { name: "北史", ath: "唐·李延寿" },
        { name: "贞观政要", ath: "唐·吴兢" },
        { name: "通典", ath: "唐·杜佑" },
        { name: "旧唐书", ath: "五代·刘昫" },
        { name: "新唐书", ath: "宋·宋祁" },
        { name: "旧五代史", ath: "宋·薛居正" },
        { name: "新五代史", ath: "宋·欧阳修" },
        { name: "资治通鉴", ath: "宋·司马光" },
        { name: "通鉴纪事本末", ath: "" },
        { name: "通志", ath: "南宋·郑樵" },
        { name: "文献通考", ath: "（宋元）马端临" },
        { name: "宋史", ath: "元·脱脱" },
        { name: "辽史", ath: "元·脱脱" },
        { name: "金史", ath: "元·脱脱" },
        { name: "元史", ath: "明·宋濂" },
        { name: "明史", ath: "清·张廷玉" },
        { name: "读通鉴论", ath: "（清）王夫之" },
        { name: "海国图志", ath: "清·魏源" },
        { name: "列女传", ath: "汉·刘向" },
        { name: "史通", ath: "唐·刘知几" },
        { name: "文史通义", ath: "清·章学诚" },
        { name: "新史学", ath: "梁启超" },
        { name: "考工记", ath: "" },
        { name: "九章算术", ath: "汉·张苍" },
        { name: "齐民要术", ath: "南北朝·贾思勰" },
        { name: "梦溪笔谈", ath: "宋·沈括" },
        { name: "营造法式", ath: "宋·李诫" },
        { name: "王氏农书", ath: "" },
        { name: "天工开物", ath: "明·宋应星" },
        { name: "农政全书", ath: "明·徐光启" },
        { name: "黄帝内经", ath: "" },
        { name: "伤寒杂病论桂林古本", ath: "汉·张仲景" },
        { name: "针灸甲针", ath: "晋·皇甫谧" },
        { name: "备急千金要方", ath: "唐·孙思邈" },
        { name: "本草纲目", ath: "明·李时珍" },
        { name: "山海经", ath: "晋·郭璞" },
        { name: "水经注", ath: "北魏·郦道元" },
        { name: "大唐西域记", ath: "（唐）玄奘" },
        { name: "岛夷志略", ath: "元·汪大渊" },
        { name: "徐霞客游记", ath: "明·徐弘祖" },
        { name: "天下郡国利病书", ath: "（清）顾炎武 著" },
        { name: "读史方舆纪要", ath: "（清）顾祖禹" },
        { name: "大清一統志", ath: "清·和珅" },
        { name: "孙子兵法", ath: "春秋·孙武" },
        { name: "吴子", ath: "吴起" },
        { name: "尉繚子", ath: "尉缭" },
        { name: "六韬", ath: "周·姜尚" },
        { name: "唐李问对", ath: "阮逸" },
        { name: "尔雅", ath: "秦·佚名" },
        { name: "广雅", ath: "" },
        { name: "说文解字", ath: "汉·许慎" },
        { name: "原本广韵", ath: "" },
        { name: "方言", ath: "" },
        { name: "释名", ath: "汉·刘熙" }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.yingxiang {
  padding-top: 50px;
}
.yingxiang .yuan{
  padding: 0 15px;
}
.yingxiang .books {
  border: 1px solid #dddddd;
}
.yingxiang .booksList {
  height: 160px;
}
.yingxiang .booksList > div:nth-of-type(1) {
  font-size: 14px;
  color: #666;
  text-align: right;
  padding-top: 40px;
  cursor: pointer;
}
.yingxiang .booksList > div:nth-of-type(1):hover {
  color: rgb(192, 114, 114);
}
.yingxiang .booksList > div:nth-of-type(2) {
  text-align: center;
  font-size: 20px;
  padding-top: 30px;
  cursor: pointer;
  color: #333;
}
.yingxiang .booksList > div:nth-of-type(2):hover {
  color: rgb(192, 114, 114);
}
.yingxiang .booksList > div:nth-of-type(3) {
  font-size: 12px;
  color: #999;
  text-align: center;
  padding: 5px;
}
</style>
