<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xebef;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/variable.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;

  .header-back {
    position: absolute;
    top: 0;
    color: #fff;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>
