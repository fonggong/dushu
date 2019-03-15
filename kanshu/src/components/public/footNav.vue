<template>
    <div class="container footNav">
     <div class="col-sm-12">
        <div>
            <a href="#">关于我们</a>
            <a href="#">免责声明</a>
            <a href="#">读书导航</a>
            <a href="#">联系我们</a>
        </div>
     </div>
     <div class="col-sm-12">
        Copyright&copy;读书网 &ensp; 2006-2019,All Rights Reserved.苏ICP备150199600号-2
     </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.footNav{
    margin-top: 30px;
    border-top: 1px solid #dddddd;
    width: 100%;
}

.footNav>div:nth-of-type(1)>div{
    text-align: center;
    padding: 20px 0;
}
.footNav>div:nth-of-type(1)>div>a{
    font-size: 13px;
    margin-left: 10px;
    text-decoration: none;
    color: #999;
}
.footNav>div:nth-of-type(2){
    text-align: center;
    color: #999;
    font-size: 13px;
    padding-bottom: 20px;
}
</style>


