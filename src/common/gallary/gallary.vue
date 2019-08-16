<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="gallary-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.gallary-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg',
          'http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_r_800x800_5cdd4127.jpg'
        ]
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: black;

  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .gallary-pagination {
      position absolute
      text-align: center;
      color: #fff;
      bottom -1rem
    }
  }
}
</style>
