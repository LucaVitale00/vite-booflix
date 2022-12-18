<template>
  <section>
    <div class="container">
      <h1 class="pt-4 text-center pb-4">Boolflix</h1>
      <div class="row">
        <div class="col-8 m-auto d-flex">
          <input type="text" class="form-control" v-model="searchText">
          <button class="btn btn-dark ms-2" @click="onSearchClick">Search</button>
        </div>

      </div>
    </div>
  </section>
  
</template>
<script>
import {store, fetchMovies, fetchTvSeries} from '../store'
export default {
  data() {
    return {
      store,
      searchText : "",
    }
  },
  //emits : ["search"],
  methods : {
    onSearchClick () {
      this.store.searchText = this.searchText,

      fetchMovies();
      fetchTvSeries();

      this.store.show = true
      if(this.store.searchText === "") {
        this.store.loading = false
      }
    },
    
      
    
  }
}
</script>
<style lang="scss">
  
</style>