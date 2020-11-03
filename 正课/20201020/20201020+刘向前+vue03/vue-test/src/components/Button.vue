<!--
 * @Descripttion: 
 * @version: 
 * @Author: 刘向前
 * @Date: 2020-10-21 21:14:26
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-22 21:58:46
-->
<template>
  <div>
    <button data-test="btn" @click="handleClick"><slot>按钮</slot></button>
  </div>
</template>

<script>
export default {
  name: "CButton",
  props: {
    disabled: {
      type: Boolean,
    },
  },
  methods: {
    // TODO test
    handleClick() {
      if (this.disabled) return;
      this.$emit("test-click", 1);
    },
  },
};
</script>

<style></style>
