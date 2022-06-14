<template>
  <div>
    <button @click="sibling">데이터 전송</button>
  </div>
</template>

<script>

import {inject} from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap6",
  setup(){
    const emitter = inject('emitter')

    const sibling = () => {
          emitter.emit('sibling', ["sungcheol","chaemin"])
    }

      return {sibling}
  }
}
</script>

<style scoped>

</style>