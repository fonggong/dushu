<template>
   <div class="ouerBook">
       <header-bar></header-bar>
       <div class="container">
<div class="row">
<div class="col-sm-4">
<help></help>
</div>
<div class="col-sm-8">
<p class="tit">读书目录</p>
<div class="content">
<p><a href="#">|- 古籍/国学</a></p>
<p><a href="#">|<span class="mu1">|-</span> 经部</a></p>
<p><a href="#">|<span class="mu2">|-</span> 经总类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 易类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 书类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 诗类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 礼类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 春秋类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 孝经类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 四书类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 乐类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 小学类</a></p>
<p><a href="#">|<span class="mu1">|-</span> 史部</a></p>
<p><a href="#">|<span class="mu2">|-</span> 小学类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 史总类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 正史类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 编年类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 纪事本末类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 别史、杂史类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 诏令奏议类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 传记类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 史钞类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 载记类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 史评类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 时令类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 地理类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 职官类</a></p>
<p><a href="#">|<span class="mu1">|-</span> 子部</a></p>
<p><a href="#">|<span class="mu2">|-</span> 子总类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 儒家类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 兵家类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 法家类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 农家类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 医家类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 天文算法类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 术数类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 释家类</a></p>
<p><a href="#">|<span class="mu1">|-</span> 集部</a></p>
<p><a href="#">|<span class="mu2">|-</span> 总集类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 别集类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 曲类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 小说类</a></p>
<p><a href="#">|<span class="mu2">|-</span> 笔记小说</a></p>
<p><a href="#">|<span class="mu3">|-</span> 传奇小说</a></p>
<p><a href="#">|<span class="mu3">|-</span> 话本小说</a></p>
<p><a href="#">|<span class="mu3">|-</span> 释家类</a></p>
<p><a href="#">|<span class="mu3">|-</span> 释家类</a></p>
<p><a href="#">|<span class="mu1">|-</span> 丛部</a></p>
<p><a href="#">|<span class="mu2">|-</span> 汇编丛书</a></p>
<p><a href="#">|<span class="mu2">|-</span> 自著丛书</a></p>
<p><a href="#">|<span class="mu2">|-</span> 地方丛书</a></p>
<p><a href="#">|<span class="mu1">|-</span> 国学入门</a></p>
<p><a href="#">|<span class="mu1">|-</span> 国学著作</a></p>
<p><a href="#">|- 文学艺术</a></p>
<p><a href="#">|<span class="mu1">|-</span> 文学</a></p>
<p><a href="#">|<span class="mu2">|-</span> 文学理论</a></p>
<p><a href="#">|<span class="mu2">|-</span> 文学史</a></p>
<p><a href="#">|<span class="mu2">|-</span> 文学评论与研究</a></p>
<p><a href="#">|<span class="mu2">|-</span> 作品集</a></p>
<p><a href="#">|<span class="mu3">|-</span> 中国文学作品集</a></p>
<p><a href="#">|<span class="mu3">|-</span> 外国文学作品集</a></p>
</div>
</div>
</div>
       </div>
       <foot-nav></foot-nav>
   </div>
</template>
<script>
import headerBar from "../public/headerBar";
import footNav from "../public/footNav";
import help from "../public/help";
export default {
      components: {
    headerBar,
    footNav,
    help
  }
}
</script>
<style>
.ouerBook .helpList > ul > li:nth-of-type(4) > a {
  color: #b13f4e;
}
.ouerBook .tit{
    font-size: 20px;
    font-weight: bold;
}
.ouerBook .content>p{
    padding: 5px 0;
}
.ouerBook .content>p .mu1{
    padding-left: 20px;
}
.ouerBook .content>p a{
    color: #666;
    text-decoration: none;
}
.ouerBook .content>p a:hover{
    color: rgb(168, 80, 80);
}
.ouerBook .content>p .mu2{
    padding-left: 35px;
}
.ouerBook .content>p .mu3{
    padding-left: 50px;
}
</style>



