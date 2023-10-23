<template>
  <div class="miuihomer">
    <el-card class="history" header="修改历史" shadow="hover">
      <md class="markdown-body"/>
    </el-card>
  </div>
</template>

<script>
import md from './history.md'

export default {
  name: 'app',
  components: {
    md
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  width: 500px;
}

</style>
