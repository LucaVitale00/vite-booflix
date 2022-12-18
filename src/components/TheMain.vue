<template>
  <section>
    <div class="container pb-5">
      <h2 class=" py-4 text-white" v-if="store.show">films</h2>
      <div class="row">
        <div v-for="(film, index) in store.movies" :key="index" class="col-2 d-flex flex-column  g-4">
        <Card :film="film"></Card>
         
        </div>
      </div>

      <h2 class="py-4 text-white" v-if="store.show">Tv-Series</h2>
      <div class="row">
       <div v-for="(series, index) in store.tvSeries" :key="index" class="col-2 d-flex flex-column g-4">
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