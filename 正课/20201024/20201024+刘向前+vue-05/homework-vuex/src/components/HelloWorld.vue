<template>
  <div>
    <div class="num" style="font-size: 50px;">{{num}}</div>
    <button class="add" @click="numAdd">+</button>
    <button class="sub" @click="numSub">-</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        num: this.$store.state.num
      }
    },
    methods: {
      numAdd() {
        this.num ++
        this.$store.commit('numAdd', {
          num: this.num
        })
      },
      numSub() {
        this.num --
        this.$store.commit('numSub', {
          num: this.num
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
button {
  width: 50px;
  height: 30px;
  font-size: 30px;
  line-height: 30px;
}
</style>