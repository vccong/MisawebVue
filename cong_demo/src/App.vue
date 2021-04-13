<template>
  <div id="app">
    <TheMenu/>
    <TheHeader/>
    <TheContent/>
  </div>

</template>

<script>
import TheMenu from './components/layout/TheMenu.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheContent from './components/layout/TheContent.vue'

export default {
  name: 'App',
  components: {
    TheMenu,
    TheHeader,
    TheContent
  }
}
</script>

<style>
@import './components/styles/main.css';

#add{
  position: relative;
}
</style>
