<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './header'
import HomeSwiper from './swiper'
import HomeIcons from './icons'
import HomeRecommend from './recommend'
import HomeWeekend from './weekend'

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style>

</style>
