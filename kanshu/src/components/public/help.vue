<template>
    <div class="helpList">
       <ul>
           <li><span class="glyphicon glyphicon-info-sign"></span>帮助中心</li>
           <li><router-link to='/video'>相关视频</router-link></li>
           <li><router-link to='/help'>免责声明</router-link></li>
           <li><router-link to='/ouerBook'>读书目录</router-link></li>
           <li><router-link to='/about'>联系我们</router-link></li>
       </ul>
    </div>
</template>
<style>
.helpList>ul{
    border: 1px solid #dddddd;
    border-top: 3px solid #3f91b1;
    border-bottom: none;
    padding: 0;
}
.helpList>ul>li{
    list-style: none;
    text-align: center;
    padding: 15px;
    border-bottom: 1px solid #dddddd;
    font-size: 17px;
    color: #3f91b1;
    font-weight: bolder;
}
.helpList>ul>li>.glyphicon{
    font-size: 14px;
    padding-right: 10px;
   
    
}
.helpList>ul>li>a{
    font-size: 15px;
    color: #777;
    text-decoration: none;
}
.helpList>ul>li>a:hover{
color: #b13f4e;
}
</style>

