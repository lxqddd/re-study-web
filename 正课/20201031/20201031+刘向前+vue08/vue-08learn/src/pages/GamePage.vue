<template>
  <container>
    <sprite :texture="mapImg" :y="mapY1"></sprite>
    <sprite :texture="mapImg" :y="mapY2"></sprite>
  </container>
</template>

<script>
// 由2张图片
import mapImg from "../assets/map.jpg";
import { ref, onMounted, onUnmounted } from "vue";
import { game } from "../game";
export default {
  setup() {
    const stageHeight = 1080;
    const mapY1 = ref(0);
    const mapY2 = ref(-stageHeight);

    // 让图片滚动起来
    // mvvm -> 数据驱动视图
    // setInterval(() => {
    //
    // }, interval);
    // ticker

    const speed = 10;
    const update = () => {
      mapY1.value += speed;
      mapY2.value += speed;

      if (mapY1.value >= stageHeight) {
        mapY1.value = -stageHeight;
      }
      if (mapY2.value >= stageHeight) {
        mapY2.value = -stageHeight;
      }
    };
    onMounted(() => {
      game.ticker.add(update);
    });
    onUnmounted(() => {
      game.ticker.remove(update);
    });

    return {
      mapY1,
      mapY2,
      mapImg,
    };
  },
};
</script>
