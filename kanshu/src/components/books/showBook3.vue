<template>
  <div>
    <header-bar></header-bar>
    <show-book
      :img="img"
      name="反脆弱：做一个内心强大的人"
      ath="壹心理"
      cong="无"
      chuban="广东人民出版社"
      banquan="经版权方授权连载试读，不得转载"
      :neirong="neirong"
      :athuor="zuozhe"
      diyi="Chapter One 心态决定一切"
      tip1="为什么你那么努力，却还是没钱?比穷更可怕的是“稀缺心态”"
      tip2="人生最怕的不是失败，而是连失败的勇气都没有"
      tip3="永远别相信任何人对你的任何评价，包括你自己"
      tip4="耗什么不能“内耗”"
      tip5="真正的贵人是自己"
     
    ></show-book>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import showBook from "../public/showBook";
import headerBar from "../public/headerBar";
import footNav from "../public/footNav";
import img from "../../assets/imgBt3.jpg";
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
        "生活中，你是不是常常觉得世界不公平，“为什么我那么努力，却还是一事无成”；你常常抱怨别人，甚至嫌弃自己的原生家庭；你什么都想要，却往往最后什么都没得到，最后人生中各种关系——职场关系、亲密关系等等也凌乱如麻。总之前途渺茫，虽怀揣梦想却被时代裹挟其中，无力感、种种大小不如意如影随形……这是一本读完后能够帮你过好丧生活，快乐走上心智成熟之旅的心理学智慧之书，由26位中国知名心理学家鼎力奉献，书中告诉你，“改变命运首先从改变自己顽固的思维模式开始”“你所坚持的事，决定了你将过上什么样的生活”“人生最怕的不是失败，而是连失败的勇气都没有”“永远别相信任何人对你的任何评价，包括你自己”所以，要想拥有不平庸的活法，就要学会做一个会折腾的人，能掌控自己情绪的人，这样，遇上再糟糕的事情，也能从中找到积极的意义，最终才能赢。",
      zuozhe:
        "壹心理是中国知名的心理学平台，心理学主流媒体，下辖心理FM、壹心理、口袋心理测试等心理应用APP及壹心理学院，是一个备受年轻人欢迎的心理学科普及服务平台。　目前，壹心理全网注册会员1700+万，其中网站会员780万，日均UV13万，PV 42万；APP注册用户770万，全国有811家心理机构、6372位心理咨询师、200多个高校心理社团和200多位心理专栏作者进驻平台，共同输出健康、科学的心理学价值，为数千万需要心理帮助的人提供支持。"
    };
  }
};
</script>

