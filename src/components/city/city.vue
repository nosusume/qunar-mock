<template>
  <div>
    <city-header></city-header>
    <city-serach></city-serach>
  </div>
</template>

<script>
import CityHeader from './cityHeader'
import CitySerach from './serach'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySerach
  }
}
</script>

<style lang="stylus" scoped>

</style>
