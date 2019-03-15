<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <router-link to="/guoxue" target="_blank">
                <img
                  src="../assets/dushu1.png"
                  alt="#"
                >
              </router-link>
              <div class="carousel-caption"></div>
            </div>
            <div class="item">
              <router-link to="/bidu" target="_blank">
                <img
                  src="../assets/dushu2.jpg"
                  alt="#"
                >
              </router-link>

              <div class="carousel-caption"></div>
            </div>
            <div class="item">
              <router-link to="/yingxiang" target="_blank">
                <img
                  src="../assets/shudu3.jpg"
                  alt="#"
                >
              </router-link>
              <div class="carousel-caption"></div>
            </div>
          </div>

          <!-- Controls -->
          <a
            class="left carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="prev"
          >
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#carousel-example-generic"
            role="button"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-sm-6">
        <sidebar></sidebar>
      </div> 
      
    </div>
    <list-msg></list-msg>
    <list-img></list-img>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import listMsg from "./listMsg.vue";
import listImg from "./listImg.vue";
export default {
  components: {
    sidebar: Sidebar,
    listMsg,
    listImg
  }
};
</script>
<style>

</style>



