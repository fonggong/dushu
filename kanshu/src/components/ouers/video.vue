<template>
  <div class="video">
    <header-bar></header-bar>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <help></help>
        </div>
        <div class="col-sm-8">
            <p class="tit">相关视屏</p>
            <div>
                <p class="tit1">mp4(1)</p>
                <video src="../../assets/aaa.mp4" controls loop>你的浏览器不支持视屏播放</video>
            
            </div>
            <div>
                <p class="tit1">mp4(2)</p>
                <video src="../../assets/bbb.mp4" controls loop>你的浏览器不支持视屏播放</video>
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
};
</script>
<style>
.video .helpList > ul > li:nth-of-type(2) > a {
  color: #b13f4e;
}
.video .tit{
    font-size: 20px;
    font-weight: bold;
}
.video .tit1{
    font-size: 14px;
    padding-top: 20px;
}
</style>


