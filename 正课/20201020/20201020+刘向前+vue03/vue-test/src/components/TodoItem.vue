<template>
  <div>
    <span data-test="content" :class="[state === 'completed' ? 'completed' : '']">{{
      content
    }}</span>
    <button data-test="removeBtn" @click="remove">X</button>
    <button @click="complete">Complete</button>
  </div>
</template>

<script>
export default {
  props: ["content", "id", "state"],
  methods: {
    remove() {
      this.$emit("remove", this.id);
    },
    complete() {
      // sync
      if (this.state === "completed") {
        this.$emit("update:complete", "active");
      } else if (this.state === "active") {
        this.$emit("update:state", "completed");
      }
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
