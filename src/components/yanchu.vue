<template>
    <div>
        <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in banner">
                <img :src="item">
            </el-carousel-item>
        </el-carousel>
        <div class="yclist">
            <ul>
                <li v-for="item in ycimglist">
                    <img :src="item.src">
                    <p>{{item.text}}</p>
                </li>
            </ul>
        </div>
        <div class="remen">
            <h3>热门演出</h3>
            <ul>
                <li v-for="item in 6">
                    <img src="../assets/list02.png">
                    <h4>【广州】张杰2016 “我想” 世界巡回演唱会</h4>
                    <p>演唱会  2016.8.20</p>
                    <p>广州国际体育演艺中心</p>
                    <b class="price">280元-1280元</b>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import jquery from "jquery";
    var $ =jquery;
    export default{
        name:"yanchu",
        data() {
            return {
                banner:'',
                ycimglist:[
                    {src:"../../static/images/img01.png",text:"演唱会"},
                    {src:"../../static/images/img02.png",text:"音乐会"},
                    {src:"../../static/images/img03.png",text:"话剧歌剧"},
                    {src:"../../static/images/img04.png",text:"舞蹈芭蕾"},
                    {src:"../../static/images/img01.png",text:"音乐会"},
                    {src:"../../static/images/img02.png",text:"演唱会"},
                    {src:"../../static/images/img03.png",text:"话剧歌剧"},
                    {src:"../../static/images/img04.png",text:"舞蹈芭蕾"}
                ],
                remenlist:[

                ]
            };
        },
        created(){
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
                    that.banner = arr;
                })
        }
    }
</script>

<style>
    .yclist{height: 3rem; background: #fff; border-bottom: 0.3rem solid #eee;}
    .yclist ul li{width: 25%; text-align: center; float: left; margin-top: 8px;}
    .yclist ul img{width: 0.9rem; height: 0.9rem;}
    .remen{background: #fff;padding: 0.2rem 0.2rem;}
    .remen h3{border-left: 0.1rem solid #ffb816;}
    .remen ul li{ height: 1.6rem; padding: 0.2rem 0 0;}
    .remen ul li img{width: 1.2rem; height: 1.6rem; float: left; margin-right: 0.2rem;}
    .remen ul h4{font-size: 0.25rem;}
    .remen ul p{font-size: 0.2rem; color: #9d9d9d; margin-top: 5px;}
    .remen ul b{color: #ffb816; float: right; margin-top: -0.5rem;}
</style>