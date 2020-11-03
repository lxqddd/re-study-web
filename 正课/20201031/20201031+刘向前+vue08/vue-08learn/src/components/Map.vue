<template>
  <container>
    <sprite :texture="mapImg"></sprite>
  </container>
</template>

<script>
// 由2张图片
import mapImg from "../assets/map.jpg";

export default {
  setup() {
    return {
      mapImg,
    };
  },
};
</script>
