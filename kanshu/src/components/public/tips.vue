<template>
    <div class="tips">
      <div>
        <ul>
          <li>搜索范围：</li>
          <li>出版图书</li>
          <li>国学/古籍</li>
          <li>在线阅读</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>搜索范围：</li>
          <li>相关度</li>
          <li>更新时间</li>
          <li>出版日期</li>
        </ul>
      </div>
    </div>
</template>
<style>
.tips {
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
}
.tips > div > ul {
  height: 50px;
  padding: 20px 0 0 0;
}
.tips > div > ul > li {
  float: left;
  list-style: none;
  margin-right: 10px;
  padding: 3px 8px;
  color: #666;
}
.tips > div > ul > li:nth-of-type(2) {
  background-color: rgb(135, 164, 180);
  color: #ffffff;
}
.tips > div > ul > li:nth-of-type(3),
.tips > div > ul > li:nth-of-type(4) {
  border: 1px solid #dddddd;
  cursor: pointer;
}
.tips > div > ul > li:nth-of-type(3):hover {
  color: rgb(141, 76, 76);
}
.tips > div > ul > li:nth-of-type(4):hover {
  color: rgb(141, 76, 76);
}
</style>

