<template>
      <div class="card position-relative">
          <img v-if="film.poster_path !== null " :src="'https://image.tmdb.org/t/p/' + 'w342' + film.poster_path" alt="">
          <img v-else src="https://picsum.photos/194/291" alt="">
          <div class="p-2 pos-absol">
            <h4>{{film.title}}</h4>
            <div class="mb-2 d-flex gap-2">language {{film.original_language}}<span :class="getFlag.icon"></span></div>
            <div  class="mb-2">
                <!-- metti fa-star se index é minore uguale del numero /2 (voto arrotondato)
                 se minore O = metti fa (stella piena) SE maggiore metti fa-regular (stella vuota) -->
                 <i class="text-warning fa-star" 
                :class="num <= Math.round(film.vote_average / 2 )? 'fa':'fa-regular'
                " v-for="num in 5"></i>
            </div> 
            <div class="fw-semibold mb-2"><small>{{film.overview}}</small></div>
            <div class="fw-bold mb-2">original title: {{film.original_title}}</div>
          </div>
      </div>
</template>
<script>
export default {
  props: {
    film : {
      type: Object,
    }
  },

  data() {
    return {
      
    }
  },
  computed : {
    
    getFlag(){
           let toReturn = { icon :`fi fi-${this.film.original_language}`};
           if (this.film.original_language == "en"){
            toReturn = { icon: "fi fi-gb"}
           }if (this.film.original_language == "ja"){
            toReturn = { icon: "fi fi-jp"}
           };
           return  toReturn
        },

  }
}
</script>
<style lang="scss">
  .card{
  overflow: hidden;
  
  img{
    z-index: 2;
    display: block;
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    
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