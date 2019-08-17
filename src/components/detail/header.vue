<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="show">
      <div class="iconfont back-icon">&#xebef;</div>
    </router-link>
    <div
    class="header-fixed"
    v-show="!show"
    :style="opacityStyle"
    >
      景点详情
      <div class="iconfont header-back">&#xebef;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      show: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.show = false
      } else {
        this.show = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/variable.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    line-height .8rem
    background rgba(0, 0, 0, .8)
    .back-icon
      color #fff
      font-size .4rem
  .header-fixed
    position: fixed;
    overflow: hidden;
    top 0
    left 0
    right 0
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #ffffff;
    background: $bgColor;
    .header-back
      position: absolute;
      top: 0;
      color: #fff;
      left: 0;
      width: 0.64rem;
      text-align: center;
      font-size: 0.4rem;
</style>
