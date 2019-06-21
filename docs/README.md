---
home: true
heroImage: /images/KR.png
# actionText: 博客开发 →
# actionLink: guide.html

# footer: MIT Licensed | Copyright © 2019-present Kora Run 
---

<home/>

<template>
<div id="container">
    <a href='https://github.com/kora-KR' target='_blank'>
        <img src='https://github.githubassets.com/images/icons/emoji/octocat.png'/>
        <h5>GitHub</h5>
    </a>
    <a href='https://gitee.com/koras' target='_blank'>
        <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1081188092,2818074614&fm=26&gp=0.jpg'/>
        <h5>码云中国</h5>
    </a>
    <a href='https://www.zhihu.com/people/keycode/activities' target='_blank'>
        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559284656478&di=93d472c7922dda1a25c47e719980e694&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Fface%2Fda9963b27ae87094c53eb0a2973b013a50857db3.jpg'/>
        <h5>知乎</h5>
    </a>
    <a class='resume' href='http://www.koras.cn/' target='_blank'>
        <img src='./.vuepress/public/images/resume.png'/>
        <h5>简历</h5>
    </a>
    <a id='wx' @mouseover='handleHoverWx' @mouseout='handleOutWx'>
        <img src='./.vuepress/public/images/wx.jpg' class='scan' id='scan' :style='wxStyle'/>
        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559284880347&di=94fa6d2b0258329ca5dc55f2d35fe874&imgtype=0&src=http%3A%2F%2Fwww.sj520.cn%2Fsc%2Fima%2Fweixin_sj520_27.jpg'/>
        <h5>微信</h5> 
    </a>
</div>

<svg width="100%" height="60" style='position: fixed; bottom: -10px; left: 50%; z-index: 999; background: #fff; padding-top: 10px; box-sizing: border-box; width: 53%; transform: translate(-50%); cursor: pointer'>
    <line id="shape" height="4" width="100%" x1='0' y1='0' x2='100%' y2='0'/>
    <text text-anchor="middle" x="50%" y="50%" class="text text-1">
        MIT Licensed | Copyright © 2019-present Kora Run
    </text>
    <text text-anchor="middle" x="50%" y="50%" class="text text-2">
        MIT Licensed | Copyright © 2019-present Kora Run
    </text>
    <text text-anchor="middle" x="50%" y="50%" class="text text-3">
        MIT Licensed | Copyright © 2019-present Kora Run
    </text>
    <text text-anchor="middle" x="50%" y="50%" class="text text-4">
        MIT Licensed | Copyright © 2019-present Kora Run
    </text>
</svg> 

<div id="vcomments"></div>
<!-- id 将作为查询条件 -->
<span id="koraBlog" class="leancloud-visitors" data-flag-title="kora">
    <em class="post-meta-item-text">阅读量 </em>
    <i class="leancloud-visitors-count">1000000</i>
</span>

<div></div>
</template>

<script>
export default {
  data() {
    return {
        wxStyle: ''
    }
  },
  mounted: function(){
    this.createValine()
  },
  methods: {
    handleHoverWx() {
        this.wxStyle = 'top: -90px; opacity: 1'
    },
    handleOutWx() {
        this.wxStyle = ''
    },


    createValine() {
      const Valine = require('valine');
      window.AV = require('leancloud-storage')
      const valine =  new Valine({
        el: '#vcomments',
        appId: '9w7amQvCYYYqTFanAXCbCY6I-gzGzoHsz',
        appKey: 'wbfi7m6jC8MvGv7rcuX5yUl5',
        notify: true,
        verify: true,
        avatar: 'robohash',
        path: window.location.pathname,
        placeholder: 'Just Go Go .',
        pageSize: 1,
        visitor: true
      });
      this.valineRefresh = false
    }
  }
}
</script>

<style lang="stylus">
.home .hero img
    width: 25%
    height: auto!important 
    box-shadow: 0 5px 18px rgba(0,0,0,0.2)
    border-radius: 50%
#container, #container>a
  display: flex
  justify-content: space-around
  align-items: center
  width: 100%
  height: 100px
  color: #222
#container>a
    position: relative
    top: 0
    left: 0
    width: 120px
    justify-content: center
    cursor: pointer
    transition: all .3s linear
    img
        margin-right: 10px
        width: 30px
        height: auto
        border-radius: 50%
        background: #eee
    .scan
        position: absolute
        top: -20px
        left: 4px
        z-index: 9999
        width: 150px
        height: auto
        border-radius: 0
        opacity: 0
        transition: all 1.4s
        border: 1px solid #eee
        border-radius: 10px
    span
        font-size: .9em
#container>.resume
    animation: jump 1.3s linear infinite
#container>a:not(:nth-last-child(1)):hover
    transform: translateY(-2px)
@keyframes jump{
0%{
    transform:rotate(0deg);
}
20% {
    transform:rotate(3deg);
}
40% {
    transform:rotate(-3deg);
}
60% {
    transform:rotate(3deg);
}
80% {
    transform:rotate(-3deg);
}
100% {
    transform:rotate(0deg);
}
}

.text{
    width: 100%
    font-size: .8em;
    fill: none;
    stroke-width: 1px;
    stroke-dashoffset: 0;
    stroke-dasharray: 310;   
    animation: stroke 6s infinite linear;
}
.text-1{
    stroke: #000000;
    animation-delay: -1.5s;
}
.text-2{
    stroke: #e73b3b;
    animation-delay: -3s;
}
.text-3{
    stroke: #1087eb;
    animation-delay: -4.5s;
}
.text-4{
    stroke: #46bd87;
    animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}

.aa{
    fill:red;stroke:black;
stroke-width:5;opacity:0.5; width: 250px; height: 100px
}
   #shape {
      stroke-width: 4px;
      fill: transparent;
      stroke: #eee;
      stroke-dasharray: 100 0 ;
      stroke-dashoffset: 20;
      transition: 2s all ease
    }
    svg:hover #shape {
      stroke-width: 6px;
      stroke-dasharray: 2 10  10 10;
      stroke-dashoffset: 0;
      stroke: #06D6A0
    }
.leancloud-visitors
    position: fixed
    bottom: 0; 
    left: 50%;
    transform: translateX(-50%)
</style>
