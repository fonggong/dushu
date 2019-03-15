<template>
   <div class="about">
       <header-bar></header-bar>
       <div class="container">
<div class="row">
<div class="col-sm-4">
<help></help>
</div>
<div class="col-sm-8">
<p class="tit">联系我们</p>
<p class="content">gitHub地址： https://github.com/fonggong</p>
<p class="content">邮箱： 916845621@qq.com</p>
<p class="content">QQ： 916845621</p>
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
.about .helpList > ul > li:nth-of-type(5) > a {
  color: #b13f4e;
}
.about .tit{
    font-size: 20px;
    font-weight: bold;
}
.about .content{
    line-height: 30px;
}
</style>



