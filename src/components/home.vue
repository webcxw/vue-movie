<template>
    <div>
        <header>
            <span>北京</span>
            <b>电影</b>
            <router-link to="/search"><i class="iconfont icon-sousuo"></i></router-link>
        </header>
        <div id="main">
            <el-tabs v-model="activeName" @tab-click="handleClick" id="tablist">
                <el-tab-pane label="热播电影" name="first">
                    <el-carousel trigger="click" height="150px">
                        <el-carousel-item v-for="item in banner">
                            <img :src="item">
                        </el-carousel-item>
                    </el-carousel>

                    <div class="tablist01">
                        <ul>
                            <li v-for="item in imglist">
                                <router-link :to="{name:'info',params:{id:item.id}}"><img :src="item.images.small"></router-link>
                                <h3>{{item.title}}<span>{{item.rating.average}}分</span></h3>
                                <p>{{item.original_title}}</p>
                                <p>{{item.directors[0].name}}</p>
                                <a href="" class="buy">购票</a>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="正在上映" name="second">正在上映</el-tab-pane>
                <el-tab-pane label="即将上映" name="third">即将上映</el-tab-pane>
            </el-tabs>
            
        </div>
    </div>
</template>
<script>
    import jquery from "jquery"
    var $ =jquery;
    export default{
        name:"home",
        data() {
            return {
                activeName: 'first',
                banner:'',
                imglist:'',

            };
        },
        methods: {
            handleClick(tab, event) {
                //console.log(tab, event);
            },
            getdata(){
                var that = this;
                $.ajax({
                    url:"../../static/json.txt",
                    type:"get",
                    dataType:"json"
                }).done(function(data){
                    //console.log(data)
                    var data = data.subjects;
                    var arr =[];
                    var list = [];
                    for(var i = 0; i < 4; i++) {
                        arr.push(data[i].images.large)   	
                    }
                    for(var i = 0; i < data.length; i++){
                        list.push(data[i])
                    }
                    that.banner = arr;
                    that.imglist = list;
                    //console.log(that.imglist)
                })
            }
        },
        mounted(){
            this.getdata()
        }
    }
</script>

<style>
    /*@import "../../static/element-ui/lib/theme-default/index.css";*/
    header{height: 44px; padding: 0 0.2rem; display: flex; justify-content: space-between;
            align-items: center; background: #eee;}
    header span{color: #ffb816; font-size: 0.3rem; }
    header i{color: #ffb816; font-size: 0.3rem !important;}
    header b{font-size: 0.3rem; width: 1.4rem; height: 0.5rem; border: 1px solid #fff;
            border-radius: 50px; background: #ffb816;color: #fff;text-align: center;}
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  #main{background: #fff;}
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-tabs__header{margin: 0 !important;}
  .el-tabs__nav{margin-left: 50px;}
  .el-tabs__item.is-active {
    color: #ffb816 !important;
  }
  .el-tabs__active-bar{background: #ffb816 !important;}
  img{width: 100%; height: 100%;}
  .tablist01 ul li{ height: 1.6rem; padding: 0.2rem 0.2rem 0;}
  .tablist01 ul li img{width: 1.2rem; height: 1.6rem; float: left; margin-right: 0.2rem;}
  .tablist01 ul h3{font-size: 0.3rem; color: #ffb816;}
  .tablist01 ul h3 span{float: right;color: #9d9d9d;}
  .tablist01 ul p{font-size: 0.2rem; color: #9d9d9d; margin-top: 5px;}
  .tablist01 ul p a{color: #9d9d9d;}
  .tablist01 .buy{float: right;width: 0.8rem; height: 0.4rem; border: 1px solid #ffb816; color: #ffb816;
                    border-radius: 5px; font-size: 0.2rem; text-align: center; line-height: 0.4rem; margin-top: -0.4rem;}
</style>