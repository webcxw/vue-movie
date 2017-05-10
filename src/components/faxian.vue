<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="热门话题" name="first">热门话题</el-tab-pane>
            <el-tab-pane label="经典台词" name="second">
                <ul>
                    <li v-for="item in 5">
                        <img src="../assets/list03.png">
                        <p>《青蛇》<span><i class="iconfont icon-zan"></i>231286</span><span><i class="iconfont icon-xiaoxi"></i>45679</span></p>
                    </li>
                </ul>    
            </el-tab-pane>
            <el-tab-pane label="票房分析" name="third">即将上映</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default{
        name:"faxian",
        data(){
            return {
                activeName: 'second'
            }
        }
    }
</script>
<style scoped>
    ul li {  border-bottom: 1px solid #eee;}
    ul li p{padding: 0 0.2rem; font-size: 0.25rem; height: 0.6rem; line-height: 0.6rem;}
    ul li p span{float: right; color: #666;}
</style>