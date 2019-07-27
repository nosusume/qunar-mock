<template>
  <div>
    <div class="recommend-title">周末去哪玩</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" :alt="item.pageInfo" class="item-img" />
        </div>
        <div class="item-info">
            <p class="item-title">{{ item.pageInfo }}</p>
            <p class="item-desc">{{ item.pageDesc }}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          pageInfo: '京城周末撒欢',
          pageDesc: '在帝都过周末，不仅仅是城中游！'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/variable.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .44rem
      font-size: .32rem
    .item-desc
      line-height: .4rem
      color: #444
</style>
