<template>
      <div class="card position-relative">
           <img :src="'https://image.tmdb.org/t/p/' + 'w342' + film.poster_path" alt="">
           <div class="p-2 pos-absol">
            <h4>{{film.title}}</h4>
            <div class="fw-bold mb-2">{{film.original_title}}</div>
            <div class="mb-2">{{film.vote_average}}<span class="text-warning"><i class="fa-solid fa-star"></i></span></div>
            <div class="fw-semibold mb-2">{{film.overview}}</div>
            <div >{{film.original_language}}</div>
          </div>
      </div>
</template>
<script>
export default {
  props: {
    film : {
      type: [],
    }
  },

  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss">
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
    bottom: 0;
    z-index: -1;
    overflow-y: hidden;
    color: white;
    
  }
&:hover{
  overflow: auto;
  img{
    opacity: 0.6;
    
    
  }
  .pos-absol{
    z-index: 4;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.651)
  }
  
}
  
};
</style>