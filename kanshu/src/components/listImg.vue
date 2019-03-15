<template>
  <div class="listImgBt">
    <div class="row">
      <div class="col-sm-12">
        <p>在线读书</p>
        <router-link to="/bookAdmin">更多></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2" v-for="(item,index) in msg" :key="index">
        <router-link :to="item.showBook" target='_blank'>
          <img :src="item.src" alt="#">
          
        </router-link>
        <p>
            <router-link :to="item.showBook">{{item.msg1}}</router-link>
          </p>
          <p>{{item.author}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import src1 from "../assets/imgBt1.jpg";
import src2 from "../assets/imgBt2.jpg";
import src3 from "../assets/imgBt3.jpg";
import src4 from "../assets/imgBt4.jpg";
import src5 from "../assets/imgBt5.jpg";
import src6 from "../assets/imgBt6.jpg";
export default {
  data() {
    return {
      msg: [
        {showBook:'/showBook1',
          src: src1,
          msg1: "多少黑名单 曾互道晚安",
          author: "风茕子 著"
        },
        {showBook:'/showBook2',
          src: src2,
          msg1: "饮食滋味",
          author: "徐文兵 著"
        },
        {showBook:'/showBook3',
          src: src3,
          msg1: "反脆弱：做一个内心强大的人",
          author: "壹心理 著"
        },
        {showBook:'/showBook4',
          src: src4,
          msg1: "长长的路 我们慢慢走",
          author: "余光中 著"
        },
        {showBook:'/showBook5',
          src: src5,
          msg1: "404公寓",
          author: "梅艺璇 著"
        },
        {showBook:'/showBook6',
          src: src6,
          msg1: "好好听话",
          author: "学诚法师 著"
        }
      ]
    };
  }
};
</script>
<style>
.listImgBt > div:nth-of-type(1)>div {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 1px 0;
}
.listImgBt > div:nth-of-type(1)>div>p{
    font-size: 18px;
    font-family: '微软雅黑';
}
.listImgBt > div:nth-of-type(1)>div>a{
    text-decoration: none;
    color: #555;
}
.listImgBt > div:nth-of-type(1)>div>a:hover{
    color: #df8282;
}
.listImgBt > div:nth-of-type(2){
    border: 1px solid #dddddd;
    margin-bottom: 10px;
}
.listImgBt > div:nth-of-type(2)>div img{
    width: 100%;
}
.listImgBt > div:nth-of-type(2)>div p:nth-of-type(1){
    text-align: center;
    padding-top: 10px;
}
.listImgBt > div:nth-of-type(2)>div p a{
    text-decoration: none;
    color: #555;
    font-size: 18px;
}
.listImgBt > div:nth-of-type(2)>div p a:hover{
    color: rgb(226, 146, 146);
}
.listImgBt > div:nth-of-type(2)>div p:nth-of-type(2){
text-align: center;
font-size: 12px;
color: #999;
}
</style>
