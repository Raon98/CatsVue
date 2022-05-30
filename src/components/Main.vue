<template>
  {{message}}
  <ol>
    <li v-for="(item,i) in list" :key="i">{{item}}</li>
  </ol>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  data() {
    return{
      message : 'hello Vue.js',
      list:['사과','바나나','딸기'],
    }},
  methods:{

  },
  computed:{

  }
}
</script>

<style scoped>

</style>