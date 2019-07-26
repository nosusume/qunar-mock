<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
import HomeHeader from './header'
import HomeSwiper from './swiper'
import HomeIcons from './icons'
export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style>

</style>
