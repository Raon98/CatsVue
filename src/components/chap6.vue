<template>
  <div>
    <button @click="sibling">배열 데이터 전송</button>
    <button @click="sibling2">오브젝트 데이터 전송</button>
  </div>
</template>

<script>

import {inject,ref} from "vue";

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap6",
  setup(){
    const check = ref("");
    const emitter = inject('emitter')

    const sibling = () => {
          emitter.emit('sibling', ["sungcheol","chaemin"])
    }
    const sibling2 = () => {
          emitter.emit('sibling2', {men : {spName: "sungcheol" , nic : "laon" , check : false},
                                    girl : {spName: "cheamin" , nic : "hannah" ,check : false
            }})
    }
      return {sibling, sibling2,check}
  }
}
</script>

<style scoped>

</style>