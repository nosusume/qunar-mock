<template>
  <div class="serach">
    <input type="text" placeholder="输入城市名或拼音" class="city-input" />
  </div>
</template>

<script>
export default {
  name: 'CitySerach'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/variable.styl';
  .serach
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .city-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
