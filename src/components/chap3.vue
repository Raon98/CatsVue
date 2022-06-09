<template>
  <div id="simple">
        <h1> Store Ex</h1>

    {{counter}}
    {{ test }}
    {{doubleCount}}
    <button @click="inc">inc</button>
    <button @click="inc1">inc</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap3",
  setup() {
    //모듈로 분리해서 사용
    const store = useStore();
    // state는 namespaced 유무와 상관 없이 moduleName으로 쪼개서 들어간다.
    const counter = computed(() => store.state.counter.counter);
    const count = computed(()=> store.state.moduleA.count);
    console.log(counter);
    const test = computed(() => store.getters["doubleCount"]);
    console.log(test)
    // namespaced 사용함으로 아래와 같이 [storeName/함수 이름]으로 부릅니다.
    const doubleCount = computed(() => store.getters["moduleA/doubleCount"]);
    const inc = () => store.commit("setCounter", counter.value + 1);
    const inc1 = () => store.commit("moduleA/increment", count.value + 1);
    console.log(inc)
    return { inc,inc1, test ,doubleCount , counter};
  }

    // 기본형으로 Store사용
    // const store = useStore();
    // const counter = computed(() => store.state.counter);
    // const test = computed(() => store.getters);
    // const inc = () => store.commit("setCounter", counter.value + 1);
    //
    // return { counter, inc, test };
  }

</script>

<style scoped>

</style>