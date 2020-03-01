<template>
  <div id="app">
    <vue-touch-slide />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueTouchSlide from 'vue-touch-slide';

Vue.use(VueTouchSlide);

export default {
  name: 'app'
}
</script>

<style lang="css">
#app {
  padding-top: 50px;
}
</style>