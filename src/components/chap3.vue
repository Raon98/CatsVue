<template>
  <div id="simple">
        <h1> Store Ex</h1>
    <p> Name : {{info.name.laon.name}} </p>
    <p> ID : {{info.id}} </p>
    <p> Password : {{info.password[1]}} </p>
    <p> AGE : {{info.age}} </p>
    <p> JOB {{info.job}}</p>


    <button @click="inc">inc</button>
  </div>
</template>

<script>
import { computed } from "vue";
// import { useStore } from "vuex";
// import {useRoute} from "vue-router";
import {cheol} from "@/plugins/cheol";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap3",
  setup() {
    const {store, router} = cheol()

    // const infoData = computed(()=>store.getters["setCompanyData"])
    // console.log("======================================================")
    // console.log("infoData 데이터 값 : " + JSON.stringify(infoData));
    // console.log("======================================================")

    store.commit('setId',[12,13,14,15]);
    // console.log("======================================================")
    // console.log("ID 데이터 값 : " + id);
    // console.log("======================================================")
    store.commit('setPassword','123456789')
    // console.log("======================================================")
    // console.log("password 데이터 값 : " + pw);
    // console.log("======================================================")

    store.commit('setName', {'laon' : {'name' : 'sungcheol' , 'nic' : 'laon' } , 'hannah' : 'Chaemin'})
    // console.log("======================================================")
    // console.log("name 데이터 값 : " + name);
    // console.log("======================================================")

    let info = computed(()=> store.state.infoData.userData);
    console.log("======================================================")
    console.log("info 데이터 값 : " + JSON.stringify(info.value));
    console.log("======================================================")

    let name = info.value.name
    let nameStr = JSON.stringify(name)
    let namePas =  JSON.parse(JSON.stringify(nameStr))
    console.log("======================================================")
    console.log("nameStr 데이터 값 : " + nameStr);
    console.log("======================================================")

    console.log("======================================================")
    console.log("namePas 데이터 값 : " + JSON.stringify(namePas));
    console.log("======================================================")

    // const sung = nameStr.;
    // console.log("======================================================")
    // console.log("name 데이터 값 : " + sung);
    // console.log("======================================================")
    //모듈로 분리해서 사용
    // const store = useStore();
    // const route = useRoute();
    // state는 namespaced 유무와 상관 없이 moduleName으로 쪼개서 들어간다.
    // const counter = computed(() => store.state.counter.counter);
    // const count = computed(()=> store.state.moduleA.count);
    // console.log(counter);
    // const test = computed(() => store.getters["doubleCount"]);
    // console.log(test)
    // // namespaced 사용함으로 아래와 같이 [storeName/함수 이름]으로 부릅니다.
    // const doubleCount = computed(() => store.getters["moduleA/doubleCount"]);
    // const inc = () => store.commit("setCounter", counter.value + 1);
    // const inc1 = () => store.commit("moduleA/increment", count.value + 1);
    // console.log(inc)


    return {store,router,info,namePas};


  },
  // axios EX
  // mounted() {
  //
  //   this.$axios.get("http://jsonplaceholder.typicode.com/posts")
  //       .then(res => {
  //         console.log("======================================================")
  //         console.log("response 데이터 값 : " + JSON.stringify(res.data));
  //         console.log("======================================================")
  //       })
  //       .catch(error => {
  //         console.log("======================================================")
  //         console.log("error 메세지 : " + error.data);
  //         console.log("======================================================")
  //       })
  //       .finally(() => {
  //         console.log("======================================================")
  //         console.log("무조건 실행");
  //         console.log("======================================================")
  //       })
  // }
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