<template>
  <div class="container showbook">
    <div class="row">
      <div class="col-sm-12">
        <h3>{{name}}</h3>
      </div>
      <div class="col-sm-8">
        <div class="book">
          <div>
            <img :src="img" alt="#">
          </div>
          <div>
            <p>
              <span class="qian">作者：</span>
              <span class="shen">{{ath}}</span>
              <span class="qian">著</span>
            </p>
            <p>
              <span class="qian">出版社：</span>
              <span class="shen">{{chuban}}</span>
            </p>
            <p>
              <span class="qian">丛编项：</span>
              <span class="qian">{{cong}}</span>
            </p>
            <p>
              <span class="qian">版权说明：</span>
              <span class="qian">{{banquan}}</span>
            </p>
            <div>反馈意见</div>
            <div>
              <button>视觉干扰</button>
              <button>内容不宜</button>
              <button>不感兴趣</button>
              <button>其他原因</button>
            </div>
          </div>
        </div>
        <div class="tit">内容简介</div>
        <div class="content">{{neirong}}</div>
        <div class="tit">作者简介</div>
        <div class="content">{{athuor}}</div>
        <div class="tit">目录</div>
        <div class="details">
          <span class="glyphicon glyphicon-list"></span>
          <span>{{diyi}}</span>
          <div>
            <p><a href="#">{{tip1}}</a></p>
            <p><a href="#">{{tip2}}</a></p>
          </div>
          <div>
            <p><a href="#">{{tip3}}</a></p>
            <p><a href="3">{{tip4}}</a></p>
          </div>
          <div>
            <p><a href="#">{{tip5}}</a></p>
            <p><a href="#">{{tip6}}</a></p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <float-list></float-list>
      </div>
    </div>
  </div>
</template>
<script>
import floatList from "./floatList";
export default {
  props: [
    "img",
    "tip1",
    "tip2",
    "tip3",
    "tip4",
    "tip5",
    "tip5",
    "tip6",
    "diyi",
    "name",
    "ath",
    "cong",
    "banquan",
    "neirong",
    "athuor",
    "chuban"
  ],
  data() {
    return {};
  },
  components: {
    floatList
  }
};
</script>
<style>
.showbook{
  margin-bottom: 260px;
}
.showbook h3{
  font-size: 25px;
  border-bottom: 1px dashed #aaa;
  padding-bottom: 10px;
}
.showbook .book{
  display: flex;
  justify-content: start;
}
.showbook .book>div:nth-of-type(1){
  border: 1px solid #dddddd;
  padding: 10px;
}
.showbook .book>div:nth-of-type(1):hover{
  border: 1px solid #999;
}
.showbook .book>div:nth-of-type(2){
  margin-left: 35px;
}
.showbook .book>div:nth-of-type(2)>p .qian{
  color: #999;
}
.showbook .book>div:nth-of-type(2)>p .shen{
  color: #444;
}
.showbook .book>div:nth-of-type(2)>div:nth-of-type(1){
  color: #555;
  font-size: 14px;
  padding-bottom: 10px;
}
.showbook .book>div:nth-of-type(2)>div:nth-of-type(2)>button{
border: none;
background: none;
border: 1px solid #dddddd;
padding: 3px 6px;
color: #888;
}
.showbook .book>div:nth-of-type(2)>div:nth-of-type(2)>button:hover{
  background-color: #f5f5f5;
}
.showbook .tit{
  font-size: 18px;
  padding: 25px 0 10px 0;;
}
.showbook .content{
  font-size: 13px;
  color: #666;
  border: 1px solid #cccccc;
  padding: 20px;
  line-height: 30px;
}
.showbook .details{
  border: 1px solid #cccccc;
   padding: 20px;
}
.showbook .details .glyphicon{
  color: rgb(82, 153, 182);
  padding-right: 5px;
}
.showbook .details>span:nth-of-type(2){
  font-size: 16px;
  color: #444;
}
.showbook .details>div{
  display: flex;
  justify-content: start;
}
.showbook .details>div>p{
  width: 50%;
  padding-right: 30px;
}
.showbook .details>div>p>a{
  color: #666;
  text-decoration: none;
}
.showbook .details>div>p>a:hover{
  color: rgb(218, 117, 117);
}
.showbook .details>div:nth-of-type(1){
margin-top: 20px;
}
</style>

