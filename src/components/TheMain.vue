<template>
  <section>
    <div class="container pb-5">
      <h2 class=" py-4 text-white" v-if="store.show">films</h2>
      <div class="row">
       <div v-for="(film, index) in store.movies" :key="index" class="col-2 d-flex flex-column  g-4">
         <div class="card position-relative">
           <img :src="'https://image.tmdb.org/t/p/' + 'w300' + film.poster_path" alt="">
           <div class="p-2 pos-absol">
            <h4>{{film.title}}</h4>
            <div>{{film.original_title}}</div>
            <div>{{film.overview}}</div>
            <div>{{film.original_language}}</div>
            <div>{{film.vote_average}}</div>
          </div>
         </div>
       </div>
      </div>

      <h2 class="py-4 text-white" v-if="store.show">Tv-Series</h2>
      <div class="row">
       <div v-for="(series, index) in store.tvSeries" :key="index" class="col-2 d-flex flex-column g-4">
         <div class="card position-relative">
           <img :src="'https://image.tmdb.org/t/p/' + 'w300' + series.poster_path" alt="">
           <div class="p-2 pos-absol">
            <h4>{{series.name}}</h4>
            <div>{{series.original_name}}</div>
            <div>{{series.overview}}</div>
            <div>{{series.original_language}}</div>
            <div>{{series.vote_average}} <span class="text-warning"><i class="fa-solid fa-star"></i></span></div>
          </div>
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
      store,
      
    }
  },
  methods: {
    
  },
}
</script>
<style lang="scss">


section{

width: 100%;
height: 100%;

.card{
  overflow: hidden;
  img{
    z-index: 2;
    display: block;
    width: 100%;
   
}
.pos-absol{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    overflow-y: hidden;
    
  }
&:hover{
  overflow: auto;
  img{
    opacity: 0.4;
  }
  .pos-absol{
    z-index: 4;
    overflow-y: auto;
  }
  
}
  
};

}
</style>