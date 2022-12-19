<template>
  <section>
    <div class="container pb-5">
      <h2 class=" py-4 text-white" v-if="store.show">films</h2>
      <div class="row g-3 gy-5">
        <div v-for="(film, index) in store.movies" :key="index" class="col-xl-2 col-lg-3 col-sm-4  d-flex flex-column">
        <Card :film="film"></Card>
         
        </div>
      </div>

      <h2 class="py-4 text-white" v-if="store.show">Tv-Series</h2>
      <div class="row g-3 gy-5">
       <div v-for="(series, index) in store.tvSeries" :key="index" class="col-xl-2 col-lg-3 col-sm-4 d-flex flex-column ">
         <Card2 :series="series"></Card2>
       </div>
      </div>
    </div>
  </section>
</template>
<script>
import {store} from '../store'
import Card from '../components/Card.vue'
import Card2 from '../components/Card2.vue'
export default {
  components : { Card, Card2,},
  data() {
    return {
      store,
      
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>
<style lang="scss">


section{

width: 100%;
height: 100%;



}
</style>