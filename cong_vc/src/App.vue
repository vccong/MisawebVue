<template>
  <div>
  <TheMenu/>
  <TheHeader/>
  <TheContent/>
  </div>
</template>
<script>

import TheMenu from './components/layout/TheMenu'
import TheHeader from './components/layout/TheHeader'
import TheContent from './components/layout/TheContent'

export default {
  name: "App",
  components: {
    TheMenu,
    TheHeader,
    TheContent
  },
};
</script>

<style>
@import './css/components/button.css';
@import './css/components/text-box.css';
@import './css/components/table.css';
@import './css/main.css';

</style>
