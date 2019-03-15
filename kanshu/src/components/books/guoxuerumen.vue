<template>
  <div>
    <header-bar></header-bar>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <top-list></top-list>
          <float-list></float-list>
        </div>
        <div class="col-sm-8">
          <tip-list></tip-list>
          <right-List></right-List>
        </div>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import headerBar from "../public/headerBar";
import topList from "../public/topList";
import rightList from "../public/rightList";
import tipList from "../public/tips";
import floatList from "../public/floatList";
import footNav from "../public/footNav";


export default {
  data(){
return{

}
  },
  components: {
    headerBar,
    topList,
    rightList,
    tipList,
    floatList,
    footNav
  },
  methods: {
    change() {
      $("#fong").slideDown(2000);
    }
  }
};
</script>
<style>
</style>


