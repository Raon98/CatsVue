<template>
  <div style="background: green">
      <h2>{{title}}</h2>
      <h2>{{user.name}}</h2>
    <h2>{{user.age}}</h2>
  </div>
</template>

<script>
import {inject,ref} from "vue";



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap5",
  setup() {
    const emitter = inject('emitter')
     const title = ref('Good')
     const user = ref({name : 'status',age :25})

    // onMounted(()=>this.emitter.on('sibling',user =>{
    //   this.user.name = user.name;
    //   this.user.age = user.age
    // }))
    emitter.on('sibling',(val1)=>{
      user.value.name = val1[0]
      title.value = val1[1]
      console.log('sibling Chap5 값 : ' , `value : ${val1}`)
    })
    return{title,user}
  }
}
</script>

<style scoped>

</style>