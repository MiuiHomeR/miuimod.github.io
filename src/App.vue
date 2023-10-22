<template>
  <md class="markdown-body"></md>
</template>

<script>
import md from './md/MiuiHomeR.md'

export default {
  name: 'App',
  components: {
    md
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
