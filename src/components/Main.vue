<template>
  <div>
  <p>{{message}}</p>
  </div>
  <ol>
    <li v-for="(item,i) in list" :key="i">{{item}}</li>
  </ol>
  <button @click="handleClick">Click</button>
  <div CLASS="lines">{{inputdata}}</div>
  <input type="text" v-model="inputdata">

</template>

<script>
import { ref} from "vue";

const useVales = () => {
      const message = ref('hello Vue.js');
      const list = ref(['사과','바나나','딸기']);
      const inputdata = ref("");
      return { message , list , inputdata}
    }
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  setup() {
    const {message, list, inputdata} = useVales()

    const handleClick = (event) => {
      alert(event.target)
      list.value.push('오렌지')
    }

    return {message, list, handleClick, inputdata}
  }
}



</script>

<style scoped>
.lines{
  line-height: 20px;
  border-collapse: collapse;
  border: 1px solid black;
  margin: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
}
p {

}
</style>