<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './banner'
import DetailHeader from './header'
import DetailList from './list'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {title: '成人五馆联票'},
            {title: '成人三馆联票',
              children: [{
                title: '成人五馆联票-不卖'
              }]
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
