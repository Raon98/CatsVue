<template>
  <div>
    <p>{{message}}</p>
  </div>
  <ol>
    <li v-for="(item,i) in list" :key="i">{{item}}</li>
  </ol>
  <button @click="handleClick">Click</button>
  <div CLASS="lines" style="white-space: pre-line">{{inputdata}}</div>
  <input type="text" v-model="inputdata" placeholder="여기를 수정하세요">
  <p v-if="showEx" v-bind="showEx">{{message2}}</p>
  <button @click="del" v-if="showEx">show</button>
</template>

<script>
import { ref } from "vue";


const useVales = () => {
  const message = ref('hello Vue.js');
  const list = ref(['사과','바나나','딸기']);
  const inputdata = ref("");
  return { message , list , inputdata}
}

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap1",
  data()  {
    return{
      showEx :true,
      message2 : "클릭하세요"
    }
  },
  setup() {
    const {message, list, inputdata} = useVales()

    const handleClick = (event) => {
      alert(event.target)
      list.value.push('오렌지')

    }
    return {message, list, handleClick, inputdata}
  },
  methods: {
    del() {
      this.showEx =false
    }
  },
  computed: {

  }
}
</script>

<style scoped>
#chap1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.lines{
  line-height: 20px;
  border-collapse: collapse;
  border: 1px solid black;
  margin: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
}

</style>