<!--
 * @Author       : your name
 * @Date         : 2020-10-31 10:44:44
 * @LastEditTime : 2020-10-31 10:53:58
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201029\20201029+刘向前+vue07\learn-vue3\src\components\MouseMose.vue
-->
<template>
  <div>
    move
    {{ x }} -- {{ y }}
  </div>
</template>

<script>
import {mouseMove} from '../use/mouseMove'
  export default {
    setup() {
      const {x, y} = mouseMove()
      return {
        x, y
      }
    }
  }
</script>
