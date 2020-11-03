<!--
 * @Author       : your name
 * @Date         : 2020-11-01 18:03:07
 * @LastEditTime : 2020-11-02 21:19:04
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201031\20201031+刘向前+vue08\vue-08\src\pages\YellowBall.vue
-->
<template>
  <container>
    <circle :x="position"></circle>
  </container>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import { game } from '../game';
// 暗号：蜘蛛女皇
// 小球移动
const moveBall = () => {
  let speed = 6;
  const timer = 10;
  const position = ref(0);
  setInterval(() => {
    position.value += speed;
    if (position.value >= 700) {
      speed = -speed;
    }
    if (position.value <= 0) {
      speed = -speed;
    }
  }, timer);
  return { position };
};
export default {
  setup() {
    const {position} = moveBall();
    onMounted(() => {
      game.ticker.add(moveBall)
    })
    onUnmounted(() => {
      game.ticker.remove(moveBall)
    })
    return {
      position
    }
  }
}
</script>