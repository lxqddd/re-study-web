<template>
  <div>
    <MouseMove />
  </div>
</template>

<script>
import MouseMove from './components/MouseMove'

import { provide } from "vue"
export default {
  name: "App",
  data() {
    return {
      showCreated: true
    }
  },
  components: {
    MouseMove
  },

  setup() {
    provide("appName", "heihei - vue3")
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
