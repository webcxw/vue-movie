<template>
  <div>
    <div id="info">
      <div class="hot">
        <router-link to="/"><i class="iconfont icon-fanhui"></i></router-link><i class="iconfont icon-fenxiang"></i>
      </div>
      <!--.........-->
    </div>
    <div class="cont">
      <!--<p><span>简介：</span>佛挡杀佛鈤你 哦if好无哦我若或哦hor骗人害怕人好无破刃物品二回配方和然i我饿hi</p>-->
      <!--<div class="zhao">
        <h3>剧照</h3>
        <img src="../assets/list3.png"><img src="../assets/list3.png">
        <img src="../assets/list3.png"><img src="../assets/list3.png">
      </div>-->
    </div>
    <div class="foot">
      在线购票
    </div>
  </div>
</template>

<script>
import jquery from "jquery";
var $ = jquery;
export default {
  name: 'info',
  data(){
    return {

    }
  },
  methods: {
			getinfo() {
				var id = window.location.href.split("/")[5];
        console.log(id)
				var hostname = "http://api.douban.com/";
				var Douban_api = "v2/movie/subject/";
				var address = hostname + Douban_api + id;
				$.ajax({
					url: address,
					method: "GET",
					dataType: "jsonp",
					jsonp: "callback",
					data: {
						data: address
					},
				}).done(function(data) {
          //console.log(data)
					var str = '';
          var str1 = '';
          str1 += `<dl>
                    <dt><img src="${data.images.small}"></dt>
                    <dd>
                      <h3>${data.title}</h3>
                      <p>${data.year}年在中国大陆上映</p>
                      <p>${data.genres}</p>
                      <p>${data.countries[0]}|105分钟</p>
                      <span>${data.ratings_count}人喜欢</span>
                    </dd>
                  </dl>`
          $("#info").append(str1);
          str += `<p><span>简介：</span>${data.summary}</p>
                    <div class="zhao">
                      <h3>剧照</h3>
                      <img src="${data.images.small}"><img src="${data.images.small}">
                      <img src="${data.images.small}"><img src="${data.images.small}">
                    </div>`;
          $(".cont").append(str)
				})
			}
		},
    mounted(){
      this.getinfo()
    }
}
</script>

<style>
  #info{height: 4.2rem; background: #505050;padding: 0 0.2rem;}
  #info .hot{height: 44px;  display: flex; justify-content: space-between; margin-bottom: 0.2rem;}
  .hot i{color: #fff; font-size: 0.5rem; line-height: 44px;}
  #info dl dt{float: left; margin-right: 0.3rem;}
  #info dl dt img{width: 2rem; height: 2.6rem;}
  #info dl dd{color: #fff;}
  #info dl dd h3{height: 0.6rem; line-height: 0.6rem; font-size: 0.3rem;}
  #info dl dd p{color: #eee; margin-top: 0.2rem; font-size: 0.25rem;}
  #info dl dd span{float: right; margin-top: 0.2rem; color: #eee;}
  .cont p{border-bottom: 15px solid #eee; font-size: 0.25rem; padding: 0.2rem 0.2rem;}
  .zhao{border-bottom: 15px solid #eee; padding: 0.2rem 0.2rem;}
  .zhao h3{text-align: left;height: 0.4rem;}
  .zhao img{width: 1.3rem; height: 1.8rem; margin-right:5px;}

  .foot{height: 48px; background: #ffb816;text-align: center; line-height: 48px;
        position: fixed; bottom: 48px; width: 100%;color: #fff;font-size: 0.3rem;}
</style>