<template>
    <div class="hello">
        <div class="top">
            <p class="head">
                <span class="iconfont icon-fanhui"></span>
                <span class="iconfont icon-youxiang"></span>
            </p>
            <div class="touxiang">
                <router-link to="/login"><img src="../assets/0.jpg" /></router-link>
            </div>
            <p class="nicheng">请登录</p>
            <div class="topbottom">
                <ul>
                    <li>
                        <span class="iconfont icon-dianying"></span>
                        <p>电影票</p>
                    </li>
                    <li>
                        <span class="iconfont icon-youhuijuan"></span>
                        <p>演出票</p>
                    </li>
                    <li>
                        <span class="iconfont icon-youhuijuan"></span>
                        <p>优惠券</p>
                    </li>
                    <li>
                        <span class="iconfont icon-xwmhuiyuanka"></span>
                        <p>会员卡</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="list">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <span class="iconfont icon-xin"></span>
                    <p>想看的电影</p>
                </li>
                <li class="mui-table-view-cell">
                    <span class="iconfont icon-xingxing"></span>
                    <p>看过的电影</p>
                </li>
                <li class="mui-table-view-cell">
                    <span class="iconfont icon-yijianfankui"></span>    
                    <p>意见和反馈</p>
                </li>
                <li class="mui-table-view-cell">
                    <span class="iconfont icon-shezhi"></span>    
                    <p>设置</p>
                </li>
                <li class="mui-table-view-cell">
                    <span class="iconfont icon-bangzhu"></span>    
                    <p>帮助中心</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:"me"
    }
</script>

<style>
    /*@import "http://at.alicdn.com/t/font_lds14icrinovfgvi.css";*/
    *{margin: 0;padding: 0;}
    html{font-size: 15.625vw;}
    body{font-size: 12px;background:#f7f7f7;}
    .top{width:100%;height:40vh;background:#ffa400;}
    .top .head{height:40px;line-height:40px; color: #fff;
                display: flex; justify-content: space-between; padding: 0 0.2rem;}
    .top .head span{ font-size: 0.4rem !important; }
    .top .touxiang{width:100px;height:100px;border-radius:100%;overflow:hidden;margin:30px auto 0 auto;}
    .top .touxiang img{width:100%;height:100%;}
    .top .nicheng{width:100%;height:40px;text-align: center;line-height:40px;color:#fff;font-size:16px;}
    .top .topbottom{height:48px;margin:0 auto;}
    .top .topbottom li{float:left;width:25%;color:#fff;font-size:16px; text-align: center;}
    .top .topbottom li span{font-size:24px;}
    .list{width:100%;margin-top:20px;}
    .list ul{width:100%;}
    .list ul li{width:100%;height:8vh;background:#fff;line-height:8vh;font-size:16px;border-bottom:1px solid #ccc}
    .list ul li span{display:inline-block;float:left;margin:0 20px;}
    .list ul li p{display:inline-block;float:left;}
    .icon-xin{color:#f00;}
    .icon-xingxing{color:#18ecb1;}
    .icon-yijianfankui{color:#1eb0f9;}
    .icon-shezhi{color:#476df4;}
    .icon-bangzhu{color:#ffa400;}
</style>