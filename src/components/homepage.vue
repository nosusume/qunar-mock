<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import HomeHeader from './header'
import HomeSwiper from './swiper'
export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style>

</style>
