<script>
import TheMain from './components/TheMain.vue';
import {store, fetchMovies } from './store';
import TheHeader from './components/TheHeader.vue';
export default {
  components : {TheMain, TheHeader },
  data() {
    return {
      store
    }
  }

}


</script>

<template>
  <TheHeader @search="onClickSearch"></TheHeader>
  <TheMain></TheMain>
</template>

<style scoped>

</style>
