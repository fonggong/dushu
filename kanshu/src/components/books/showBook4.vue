<template>
  <div>
    <header-bar></header-bar>
    <show-book
      :img="img"
      name="长长的路 我们慢慢走"
      ath="余光中"
      cong="无"
      chuban="光明日报出版社"
      banquan="经版权方授权连载试读，不得转载"
      :neirong="neirong"
      :athuor="zuozhe"
      diyi="第一章 南半球的冬天"
      tip1="听听那冷雨"
      tip2="望乡的牧神"
      tip3="众岳峥峥"
    ></show-book>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import showBook from "../public/showBook";
import headerBar from "../public/headerBar";
import footNav from "../public/footNav";
import img from "../../assets/imgBt4.jpg";
export default {
  components: {
    showBook,
    headerBar,
    footNav
  },
  data() {
    return {
      img,
      neirong:
        "本书精选余光中先生散文36篇，包括游记见闻、感情经历、生活智慧、人情世故、文化随感这五部分内容。　在这本书里余光中先生以人生过来人的姿态，为每一个读者提供生命的启示和前行的力量。　物质支撑人的生活，而信念支撑人的灵魂。人生这趟旅途，“去向远方”是每个人生命中浪漫的冲动，也是每个人对抗孤独与现实的力量之源。　我们的生命，短暂却又漫长，短暂的是外在的物质和时光，而漫长的是人的追寻还有信仰。　愿所有读到这本书的人，都拥有美满的人生和丰盈的信仰！",
      zuozhe:
        "余光中　在生命里从容漫步的诗人在时光中畅快漂泊的旅客　余光中先生生于南京，祖籍福建永春。因母亲原籍为江苏武进，故也自称“江南人”。　1952年毕业于台湾大学外文系。1959年获美国爱荷华大学（ LOWA ）艺术硕士。先后任教于台湾东吴大学、台湾师范大学、台湾大学、台湾政治大学、香港中文大学、台湾中山大学。还曾赴美国多所大学任客座教授。余光中一生从事诗歌、散文、评论、翻译。至今驰骋文坛已逾半个世纪，涉猎广泛，2012年4月，84岁的余光中受聘为北京大学“驻校诗人”。2015年7月，获得第13届花踪世界华文文学大奖。其文学生涯悠远、辽阔、深沉，是当代诗坛健将、散文重镇、著名批评家和优秀翻译家。"
    };
  }
};
</script>

