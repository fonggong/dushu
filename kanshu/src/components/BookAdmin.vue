
<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      录入书籍
    </div>
    <div class="panel-body">
      <div class="form-horizontal">
        <div class="form-group">
            <div class="row">
          <div class="col-sm-12">
            <label>书籍名称</label>
            <input
              type="text"
              class="form-control"
              v-model="book.name"
              placeholder="name"
            />
          </div>
          </div>
          <div class="row">
          <div class="col-sm-12">
            <label>编写老师</label>
            <input
              type="text"
              class="form-control"
              v-model="book.teacher"
              placeholder="teacher"
            />
          </div>
          </div>
          <div class="row">
          <div class="col-sm-12">
            <label>书籍简介</label>
            <input
              type="text"
              class="form-control"
              v-model="book.introduction"
              placeholder="introduction"
            />
          </div>
          </div>
          <div class="row">
          <div class="col-sm-12">
            <label>购买链接</label>
            <input
              type="text"
              class="form-control"
              v-model="book.shopUrl"
              placeholder="shopUrl"
            />
          </div>
          </div>
          <div class="row">
          <div class="col-sm-12">
            <label>图片链接</label>
            <input
              type="text"
              class="form-control"
              v-model="book.pictureUrl"
              placeholder="pictureUrl"
            />
          </div>
          </div>
        </div>
        <button class="btn btn-primary" @click="save()">录入</button>
        <router-link to="/" class="btn btn-danger">取消</router-link>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name : 'BookAdmin',
        data() {
            return {
              book:{
                name : '',
                teacher : '',
                introduction : '',
                shopUrl : '',
                pictureUrl : '',
              }
            }
        },
        methods:{
          save() {
            this.$http.post('/createBook',{
              name : this.book.name,
              teacher : this.book.teacher,
              shopUrl : this.book.shopUrl,
              pictureUrl : this.book.pictureUrl,
              introduction : this.book.introduction
            }).then(function(ret){
              console.log(ret);
              let book = this.book
              console.log(book);
              alert(ret.body.errmsg)
            }).catch(function(){
              alert('服务器未启动！')
            })
          }
        }
    }
</script>

