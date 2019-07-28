<template>
  <div>
    <city-header></city-header>
    <city-serach></city-serach>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './cityHeader'
import CitySerach from './serach'
import CityList from './list'
import CityAlphabet from './alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySerach,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
