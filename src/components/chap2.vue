<template>
<div :text-content.prop="message"> hi</div>
<div :scroll-top.prop="scroll"></div>
<div>
  <div>
    <p>{{count}}</p>
    <p>{{recycle}}</p>
    <button @click="increment"> 카운트 하기</button>
  </div>
</div>
</template>

 <script>

import {ref} from "vue";

const chap2  = () => {
  const  message = ref('hello Vue.js');
  const scroll = ref(0);

  return { message , scroll }
}
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap2",
  data: () =>({
      count : 0
  }),
  setup(){
    // eslint-disable-next-line no-unused-vars
    const { message, scroll } = chap2()
    return { message , scroll  }

  },
  methods :{
    increment() {
      this.count = this.count += 1
      setTimeout(()=>{this.count++},1000)
      setTimeout(this.callback,1000)
    }
  },
  computed:{
    recycle() {
      return this.count> 10 ? '10이상' : '10이하'
    }
  }

}
</script>

<style scoped>

</style>