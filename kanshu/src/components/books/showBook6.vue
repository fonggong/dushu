<template>
  <div>
    <header-bar></header-bar>
    <show-book
      :img="img"
      name="好好听话"
      ath="学诚法师"
      cong="无"
      chuban="天津人民出版社"
      banquan="经版权方授权连载试读，不得转载"
      :neirong="neirong"
      :athuor="zuozhe"
      diyi="正文"
      tip1="前言：好好听话的智慧"
      tip2="上篇 人生最大的财富是倾听 第一章 结善缘，从好好听话开始"
      tip3="上篇 人生最大的财富是倾听 第二章 “是非以不辩为解脱”"
    ></show-book>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import showBook from "../public/showBook";
import headerBar from "../public/headerBar";
import footNav from "../public/footNav";
import img from "../../assets/imgBt6.jpg";
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
        "在恰当的时机对恰当的人说出恰当的话，不仅需要一份聪明，更需要一种智慧。但光会说话还远远不够，还要会听话。听是说的前提，说是听的升华。只有听完整，听明白，听深入，才能具备听清话语的能力，理解话语的能力，品评话语的能力，才能学得会，说得对，做得好，也才能在生活和工作中获得更多的帮助。",
      zuozhe:
        "学诚法师，1966年出生于福建仙游。1982年于莆田广化寺出家，于定海长老座下剃度，并依止圆拙老和尚修学。1988年于四川成都文殊院宽霖大和尚座下求受三坛大戒。1991年于中国佛学院研究生毕业。现任中国佛教协会会长、中国佛学院院长，福建省佛教协会会长、福建莆田广化寺、陕西扶风法门寺、北京龙泉寺方丈。同时，学诚法师还担任全国政协常委、中国宗教界和平委员会常务副主席、北京师范大学人文宗教高等研究院副院长等职。"
    };
  }
};
</script>

