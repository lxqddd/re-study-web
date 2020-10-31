<template>
  <div>
    move
    {{ x }} -- {{ y }}
  </div>
</template>

<script>
// options api
// import { moveMixin } from "../mixin";
import { useMove } from "../use";
export default {
  setup() {
    // 1. 命名冲突问题i
    // 2. 来源不清晰的问题
    const { x, y } = useMove();
    // const { x: aX, y: aY } = useFeatureA();
    // 没有 this

    return {
      //   ...useMove()
      x,
      y
    };
  }

  //fooMixin -> x , y
  // 1.
  // 命名冲突的问题
  // 2. x y 是从哪里导出的嘛？
  // 来源不清晰的问题
  //   mixins: [moveMixin, otherMixin, fooMixin, barMixin]
};
</script>

<style lang="scss" scoped></style>
