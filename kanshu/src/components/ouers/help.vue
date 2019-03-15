<template>
   <div class="help">
       <header-bar></header-bar>
       <div class="container">
<div class="row">
<div class="col-sm-4">
<help></help>
</div>
<div class="col-sm-8">
<p class="tit">免费声明</p>
<p class="content">任何使用本网的用户均应仔细阅读本声明，用户可选择不使用读书网，用户使用读书网的行为将被视为对本声明全部内容的认可。</p>
<p class="content">一、本网站上的图书信息均来自各商家，商家依法应对其商品的任何信息承担全部责任。读书网对此等信息的准确性、完整性、合法性或真实性均不承担任何责任。此外，读书网对任何使用或提供本网站信息的商业活动及其风险不承担任何责任。</p>
<p class="content">二、本站所列的图书资料、图书封面图片等归各自的版权所有人所有。</p>
<p class="content">三、读书网在此声明，对您使用网站、与本网站相关的任何内容、服务或其它链接至本网站的站点、内容均不作直接、间接、法定、约定的保证。</p>
<p class="content">四、任何网站如果不想被读书网收录，应该及时向读书网反映，否则，读书网将视其为可收录网站。</p>
<p class="content">五、任何通过使用读书网而搜索链接到的提供电子书阅读或者购买图书的第三方网页均系他人制作或提供，您可能从该第三方网页上获得资讯及享用服务，读书网对其合法性概不负责，亦不承担任何法律责任。</p>
<p class="content">六、任何单位或个人认为通过读书网链接到的第三方网页内容可能涉嫌侵犯其信息网络传播权，应该及时向读书网提出书面权利通知，并提供身份证明、权属证明及详细侵权情况证明。读书网在收到上述法律文件后，将会依法尽快断开相关链接内容。</p>
<p class="content">本声明未涉及的问题参见国家有关法律法规，当本声明与国家法律法规冲突时，以国家法律法规为准。</p>
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
.help .helpList > ul > li:nth-of-type(3) > a {
  color: #b13f4e;
}
.help .tit{
    font-size: 20px;
    font-weight: bold;
}
.help .content{
    text-indent: 30px;
    font-size: 14px;
    line-height: 30px;
}
</style>



