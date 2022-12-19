<template>
     <div class="card position-relative">
        <img v-if="series.poster_path !== null " :src="'https://image.tmdb.org/t/p/' + 'w342' + series.poster_path" alt="">
        <img v-else src="https://www.themoviedb.org/t/p/w500/jaQq8yngDA1pnMRcFcxfq6Hhrop.jpg" alt="">
        <div class="p-2 pos-absol">
              <h4>{{series.name}}</h4>
              <div class="mb-2 d-flex gap-2">language<span :class="getFlag.icon"></span></div>
              <i class="text-warning fa-star" 
                :class="num <= Math.round(series.vote_average / 2 )? 'fa':'fa-regular'
                " v-for="num in 5"></i>
              <div class="fw-semibold mb-2"><small>{{series.overview}}</small></div>
              <div class="fw-bold mb-2">original title: {{series.original_title}}</div>
              
        </div>
     </div>
</template>
<script>
export default {
  props: {
    series : {
      type: Object,
    }
  },

  data() {
    return {
      
    }
  },
  computed : {
    getFlag(){
           let toReturn = { icon :`fi fi-${this.series.original_language}`};
           if (this.series.original_language == "en"){
            toReturn = { icon: "fi fi-gb"}
           }if (this.series.original_language == "ja"){
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