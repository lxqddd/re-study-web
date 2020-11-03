<template>
  <container>
    <sprite :texture="startPageImg"></sprite>
    <sprite
      :texture="startBtnImg"
      x="220"
      y="520"
      @click="onClick"
      :interactive="true"
    ></sprite>
  </container>
</template>

<script>
// 由2张图片
import startPageImg from "../assets/start_page.jpg";
import startBtnImg from "../assets/startBtn.png";
export default {
  setup(props, { emit }) {
    const onClick = () => {
      console.log("click");
      // 组件通信
      // this 没有了
      emit("change-page", "GamePage");
    };

    return {
      onClick,
      startPageImg,
      startBtnImg,
    };
  },
};
</script>
