<!--
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-24 09:50:50
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-24 10:01:21
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
