<template>
  <main>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in swiper" :key="item">
        <h3 class="medium" :style="{background: 'url(' + item + ') no-repeat left top'}"></h3>
      </el-carousel-item>
    </el-carousel>
    <el-backtop target="#app"></el-backtop>
  </main>
</template>

<script>

export default {
  data() {
    return {
      swiper: [
        'https://pic4.zhimg.com/80/v2-313b814fe924222f07ac07314293a2ec_r.jpg',
        'https://pic4.zhimg.com/80/v2-313b814fe924222f07ac07314293a2ec_r.jpg',
        'https://pic4.zhimg.com/80/v2-313b814fe924222f07ac07314293a2ec_r.jpg',
        'https://pic4.zhimg.com/80/v2-313b814fe924222f07ac07314293a2ec_r.jpg',
        'https://pic4.zhimg.com/80/v2-313b814fe924222f07ac07314293a2ec_r.jpg'
      ]
    }
  },
  beforeMounted() {
    console.warn(this)
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    this.time = 333
  }
}
</script>
<style lang="stylus">
  .time
    position: fixed
    bottom: 0
    left: 50%
    transform: translate(-50%)
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    height: 200px;
    margin: 0;
    background-size: cover!important
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
