export const moveMixin = {
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  mounted() {
    window.addEventListener("keyup", this.handleKeyup);
  },
  beforeMount() {
    window.removeEventListener("keyup", this.handleKeyup);
  },
  methods: {
    handleKeyup(e) {
      switch (e.code) {
        case "ArrowUp":
          this.y--;
          break;
        case "ArrowDown":
          this.y++;
          break;
        case "ArrowLeft":
          this.x--;

          break;
        case "ArrowRight":
          this.x++;

          break;
      }
    }
  }
};
