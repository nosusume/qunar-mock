<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImage"
      :bannerImgs="gallaryImages"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './banner'
import DetailHeader from './header'
import DetailList from './list'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImage: '',
      gallaryImages: [],
      list: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.hanldeGetDataSucc)
    },
    hanldeGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImage = data.bannerImg
        this.gallaryImages = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
