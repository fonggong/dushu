<template>
  <div>
    <header-bar></header-bar>
    <show-book
      :img="img"
      name="404公寓"
      ath="梅艺璇"
      cong="无"
      chuban="广东人民出版社"
      banquan="经版权方授权连载试读，不得转载"
      :neirong="neirong"
      :athuor="zuozhe"
      diyi="正文"
      tip1="引子"
      tip2="1、止罪"
      tip3="2、守护"
      tip4="3、魔鬼的孩子"
    ></show-book>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import showBook from "../public/showBook";
import headerBar from "../public/headerBar";
import footNav from "../public/footNav";
import img from "../../assets/imgBt5.jpg";
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
        "郊区有幢公寓，灰墙白窗，位置偏僻，就算在地图上也寻不到它的踪迹。所以，不了解这里的人都习惯用门牌号来称呼它：404公寓，而熟悉它的人都知道这里叫作“自杀公寓”。　每个房间都配备一套完整的自杀工具，供自杀者们选择。自杀者从前门进入，如果中途后悔，就从后门离去。管理员从不做任何挽留之举，只会对着他们的背影说“来生我们不再相见。”　在这里，死是容易的，也是不需要着急的。既然来了，不妨听听这儿的故事。",
      zuozhe:
        "梅艺璇：“脑洞故事板”平台的签约作者，小说家。擅长用悬疑的设定，反转的剧情，温暖的结局，讲述一个个既治愈又感人的故事。"
    };
  }
};
</script>

