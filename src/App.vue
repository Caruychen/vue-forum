<template>
  <div id="app">
    <TheNavbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
export default {
  components: {
    TheNavbar
  }
}
</script>
<style>
@import "assets/css/style.css";
</style>
