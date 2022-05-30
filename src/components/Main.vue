<template>
  <div>
  <p>{{message}}</p>
  </div>
  <ol>
    <li v-for="(item,i) in list" :key="i">{{item}}</li>
  </ol>
  <button @click="handleClick">Click</button>
</template>

<script>
import { ref} from "vue";

const useVales = () => {
      const message = ref('hello Vue.js');
      const list = ref(['사과','바나나','딸기']);

      return { message , list }
    }
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  setup() {
    const {message, list} = useVales()

    const handleClick = (event) => {
      alert(event.target)
      list.value.push('오렌지')
    }

    return {message, list, handleClick}
  }
}



</script>

<style scoped>

</style>