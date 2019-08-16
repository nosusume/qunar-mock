<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img  class="banner-image" src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" alt="banner-image">
      <div class="banner-info">
        <div class="banner-title">北京欢乐谷(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe63c;</span>25</div>
      </div>
    </div>
    <common-gallary v-show="showGallary" @close="handleCloseEvent"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleCloseEvent () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height  0
    padding-bottom 55%
    .banner-image
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        position absolute
        left .1rem
        bottom .6rem
        line-height .4rem
        border-radius .2rem
        background rgba(0,0,0,0.8)
        font-size .24rem
        width 1.24rem
        text-align center
      .banner-icon
        font-size .24rem
</style>
