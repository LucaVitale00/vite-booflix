<template>
  <section>
    <div class="container">
      <div class="row">
       <div v-for="film in store.movies" class="col-1 d-flex flex-column  g-1">

         <div class="card">
           <img :src="film.backdrop_path" alt="">
           <h3>{{film.title}}</h3>
           <div>{{film.original_title}}</div>
           <div>{{film.original_language}}</div>
           <div>{{film.vote_average}}</div>
         </div>
       </div>
      </div>
    </div>
  </section>
</template>
<script>
import {store} from '../store'
export default {
  
  data() {
    return {
      store
    }
  },
}
</script>
<style lang="scss">
img{
  display: block;
  width: 100%;
}
  
</style>