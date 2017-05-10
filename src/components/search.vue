<template>
    <div id="map">  
    <label>地区：<input v-model="location"></label>
    <label>关键词：<input v-model="keyword" placeholder="输入关键词"></label>
    <baidu-map class="map-container">
        <bm-view class="bm-view">
        </bm-view>
        <bm-local-search :location="location" :keyword="keyword" :auto-viewport="true" ></bm-local-search>
    </baidu-map>
    </div>
</template>
<script>
    import Vue from 'vue'
    import BaiduMap from 'vue-baidu-map'
    Vue.use(BaiduMap, {
        ak: 'mB6pVcmnuY5YDVK6AAmfyHMkuwUv3dma'
    })
    export default{
        name:"search",
        data () {
            return {
                location: '北京',
                keyword: ''
            }
        }
    }
</script>
<style>
#map{width: 100%;}
.map-container{width: 100%; height: 400px;}
.bm-view {
    width: 100%;
    height: 400px;
}
#map label input{height:0.6rem; border-radius: 5px;border: 0; text-indent: 0.2rem; width: 100%;}
</style>