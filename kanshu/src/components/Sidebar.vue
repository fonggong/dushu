<template>
  <div class="zhong">
    <div class="row no-padding">
      <div class="col-sm-4 no-padding">
        <a href='http://www.jingdong.com' target='blank'>
          <img src="../assets/zhong1.png" alt="无法加载图片">
        </a>
        <a href="http://www.suning.com" target='blank'>
          <img src="../assets/zhong2.png" alt="无法加载图片">
        </a>
        <a href="http://www.taobao.com" target='blank'>
          <img src="../assets/zhong3.png" alt="无法加载图片">
        </a>
      </div>

      <div class="col-sm-8 zList">
        <ul>
          <li @mouseover="changC(0)">图书分类</li>
          <li @mouseover="changC(1)">国学经典</li>
          <li @mouseover="changC(2)">读书导航</li>
        </ul>
        <table>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>国学入门</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>文学史</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>纪实文学</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>散文随笔</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>世界名著</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>外国小说</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>言情小说</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>历史小说</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>当代小说</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>网络小说</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>青春小说</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>人物传记</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>艺术理论</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>书法/篆刻</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>文学史</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>绘画</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>收藏鉴赏</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>生活时尚</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>社会科学</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>法律</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>少儿/童书</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>人文社科</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>历史</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>经济管理</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>工业技术</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>自我实现/励志</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>计算机/网络</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>更多</router-link></td>
          </tr>
        </table>
        <table>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>红楼梦</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>西游记</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>三国演义</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>水浒传</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>史记</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>资治通鉴</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>大学</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>中庸</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>论语</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>孟子</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>诗经</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>尚书</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>仪礼</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>周易</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>春秋左传</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>尔雅</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>孝经</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>国语</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>战国策</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>老子</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>庄子</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>孙子兵法</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>楚辞</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>古文观止</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>吕氏春秋</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>世说新语</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>唐诗三百首</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>更多</router-link></td>
          </tr>
        </table>
        <table>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>新浪读书</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>当当</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>京东</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>亚马逊</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>网易阅读</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>多看</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>掌阅</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>豆瓣</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>超星</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>起点</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>纵横</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>国图</router-link></td>
          </tr>
          <tr>
            <td><router-link to='/guoxuerumen' target='_blank'>中国知网</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>龙泉期刊</router-link></td>
            <td><router-link to='/guoxuerumen' target='_blank'>更多</router-link></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changC(n) {
      $(".zList>ul>li").css({ borderBottom: "none" });

      $(".zList>ul>li")
        .eq(n)
        .css({ borderBottom: "2px solid #61abaa" });

      $(".zList table").css({ display: "none" }, { opacity: "0" });
      $(".zList table")
        .eq(n)
        .fadeIn(300)
        .css({ display: "block" }, { opacity: "1" });
    }
  }
};
</script>
<style>
.no-padding {
  padding: 0;
}
.zhong .col-sm-4 img {
  padding-bottom: 5px !important;
  width: 100%;
}
.zhong .zList > ul {
  width: 100%;
  padding: 0%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
}
.zhong .zList > ul > li {
  height: 30px;
  width: 33.3%;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  position: relative;
  list-style: none;
}
.zhong .zList > ul > li:nth-of-type(1) {
  border-bottom: 2px solid #61abaa;
}

.zhong .zList table {
  width: 100%;
  z-index: 10;
  background-color: #fcfcfc;
}

.zhong .zList table:nth-of-type(2),
.zhong .zList table:nth-of-type(3) {
  display: none;
}

.zhong .zList table td {
  height: 37px;
  width: 90px;
  color: #777;
  font-size: 12px;
  border: 1px solid #aaaaaa;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}
.zhong .zList table td>a{
   color: #777;
   text-decoration: none;
}
.zhong .zList table td:hover {
  background-color: #e78888;
  
}
.zhong .zList table td:hover>a{
color: #ffffff;
}
</style>




