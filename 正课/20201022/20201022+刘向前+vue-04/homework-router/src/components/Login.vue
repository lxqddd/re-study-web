<!--
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-24 09:55:07
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-24 20:54:54
-->
<template>
  <div>
    <button @click="handleToHome">点我登录</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    methods: {
      handleToHome() {
        this.$router.push('/home')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
