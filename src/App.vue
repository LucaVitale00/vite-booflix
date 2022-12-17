<script>
import TheMain from './components/TheMain.vue';
import {store, fetchMovies } from './store';
import TheHeader from './components/TheHeader.vue';
import axios from 'axios'
export default {
  components : {TheMain, TheHeader },
  data() {
    return {
      store
    }
  },

  computed :{
    
  }
}


</script>

<template>
  <TheHeader></TheHeader>
  <TheMain></TheMain>
</template>

<style scoped>

</style>
