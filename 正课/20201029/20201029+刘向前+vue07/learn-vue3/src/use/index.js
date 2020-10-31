import { ref, onMounted, onUnmounted } from "vue";
export function useMove() {
  const x = ref(0);
  const y = ref(0);

  const handleKeyup = e => {
    switch (e.code) {
      case "ArrowUp":
        y.value--;
        break;
      case "ArrowDown":
        y.value++;
        break;
      case "ArrowLeft":
        x.value--;

        break;
      case "ArrowRight":
        x.value++;

        break;
    }
  };

  onMounted(() => {
    window.addEventListener("keyup", handleKeyup);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyup);
  });

  return {
    x,
    y
  };
}
