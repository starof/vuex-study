<template>
  <div id="app">
    <home></home>
    <about></about>
    <btn></btn>
  </div>
</template>

<script>

import Home from '@/views/Home'
import About from '@/views/About'
import Btn from '@/views/Btn'
export default {
  name: 'App',
  components: {
    Home,
    About,
    Btn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
