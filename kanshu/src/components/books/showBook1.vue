<template>
  <div>
    <header-bar></header-bar>
    <show-book
      :img="img"
      name="多少黑名单 曾互道晚安"
      ath="风茕子"
      cong="无"
      chuban="时代文艺出版社"
      banquan="经版权方授权连载试读，不得转载"
      :neirong="neirong"
      :athuor="zuozhe"
      diyi="第一章 成年人是不会轻易为谁流泪的"
      tip1="我为什么喜欢三观不正的人"
      tip2="有一种女人没有多巴胺会死的"
      tip3="无论如何我爱你，晚安"
      tip4="你心里有钩子，别人才能往上挂东西"
      tip5="恨只恨我们相识得太早，重逢得太晚"
      tip6="岁月终是会拉开两个人的手"
    ></show-book>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import showBook from "../public/showBook";
import headerBar from "../public/headerBar";
import footNav from "../public/footNav";
import img from "../../assets/imgBt1.jpg";
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
        "这是一本打破你三观的重口味麻辣情感故事集，男人看了会沉默、女人看了会清醒，不管你是单身80、90后还是正在甜蜜暴击或者被一段非常规的恋情困扰，读完这本书，会让你明白“每一双水晶鞋都会落满尘埃 ”“什么事都抵不过‘心甘情愿’四个字”“虽然百分之九十九的真情终将以无情收场，我们也要为百分之一的真情好好活着”，*终懂得自己过去和现在的每一个选择，都是*好的安排。",
      zuozhe:
        "风茕子，专栏作家，曾任知音传媒集团首席深度报道记者。风茕子情感故事集，写你想看到的香艳和不想看到的决绝，写你在感受的温暖和不想面对的真实。"
    };
  }
};
</script>

