<template>
  <div class="hello">
    <div id="content">
      <router-view></router-view>
      <!--<Home/>-->
    </div>
    <footer>
      <nav>
        <router-link to="/" class="active">
                <p class="iconfont icon-dianying" ></p>
                <span>电影</span>
        </router-link>
        <router-link to="/yanchu">
                <p class="iconfont icon-yanchupiaowu" ></p>
                <span>演出</span>
        </router-link>
        <router-link to="/faxian">
                <p class="iconfont icon-faxian" ></p>
                <span>发现</span>
        </router-link>
        <router-link to="/me">
                <p class="iconfont icon-gr2" ></p>
                <span>我的</span>
        </router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
import jquery from "jquery"
// import Home from "../components/home.vue"
var $ =jquery;

export default {
  name: 'hello',
  mounted: ()=>{
    $("nav a").click( function () {
      $(this).addClass("active").siblings().removeClass("active")
    })
  },
  // components:{
  //   Home
  // },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "http://at.alicdn.com/t/font_hichhu4tq4c84cxr.css";
  *{margin: 0;padding: 0;}
  a{text-decoration: none;}
  ul{list-style: none;}
  html{font-size: 15.625vw;}
  body{font-size: 12px;}
  footer{width: 100%; height: 48px; position: fixed; bottom:0; background: #eee;}
  footer nav{display: flex; width: 100%; height: 100%; border-top: 1px solid #666;}
  footer p{margin: 0; padding: 0;}
  footer nav a{float: left; width: 25%; height: 100%; color: #666; text-align: center;}
  footer nav a p{font-size: 0.4rem !important; height: 28px;}
  footer nav a span{font-size: 0.2rem;}
  #content{height: 618px;}
  .active{color: #ffb816 !important;}
</style>
