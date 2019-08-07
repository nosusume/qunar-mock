<template>
<div>
  <div class="serach">
    <input type="text" v-model="keyword" placeholder="输入城市名或拼音" class="city-input" />
  </div>
  <div class="serach-content"  ref="serach" v-show="keyword">
    <ul>
      <li v-for="item of list" :key="item.id" class="serach-item border-bottom">{{ item.name }}</li>
      <li class="serach-item border-bottom" v-show="hasNoData">没有找到搜索的数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySerach',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.serach)
  }
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
  .serach-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background #ffffff
    .serach-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
</style>
