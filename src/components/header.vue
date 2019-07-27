<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xebef;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入景点/游玩主题/城市</div>
    <div class="header-right">
      {{ this.city }}
      <span class="iconfont arrow-icon">&#xeb6d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/variable.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        padding-left: .2rem
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      padding-left: .2rem
      margin-top: .12rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
