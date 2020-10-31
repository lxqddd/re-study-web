/*
 * @Author       : your name
 * @Date         : 2020-10-31 10:45:51
 * @LastEditTime : 2020-10-31 10:56:30
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201029\20201029+刘向前+vue07\learn-vue3\src\use\mouseMove.js
 */
// 暗号：尤大nb
import { ref, onMounted, onUnmounted } from 'vue'
export function mouseMove() {
  const x = ref(0)
  const y = ref(0)

  const handleMouseMove = e => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return {
    x,
    y
  }
}
