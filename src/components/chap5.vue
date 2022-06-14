<template>
  <div style="background: green">
      <h2>{{title}}</h2>
      <h2>{{user.name}}</h2>
    <h2>{{user.age}}</h2>
    <h2>{{user.spName}}</h2>
    <h2>{{user.nic}}</h2>
  </div>
</template>

<script>
import {inject, ref, onMounted, watch} from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap5",
  setup() {
    const emitter = inject('emitter')
     const title = ref('Good')
     const user = ref({name : 'status',age :25 , nic: "" , spName : ""})
    // onMounted(()=>this.emitter.on('sibling',user =>{
    //   this.user.name = user.name;
    //   this.user.age = user.age
    // }))
    onMounted(()=> emitter.on('sibling',(val1)=>{
      user.value.name = val1[0]
      title.value = val1[1]
      console.log('sibling Arr 값 : ' , `value : ${val1}`)
    }))

    onMounted(()=> emitter.on('sibling2',(val1,payload)=> {
      payload = JSON.stringify(val1);
      payload = JSON.parse(payload)
      //console.log('sibling 파싱 값 : ', payload.men.spname)
      if (payload.men.check === true) {
        payload.men.check = false;
        user.value.spName = payload.men.spName
        user.value.nic = payload.men.nic
        console.log("변경실행중")
        payload.girl.check = true;
        console.log('sibling 남자 오브젝트 값 : ', `value : ${JSON.stringify(payload.men)}`)
        console.log('sibling 여자 오브젝트 값 : ', `value : ${JSON.stringify(payload.girl)}`)
      // } else if (payload.girl.check === true){
      //     payload.girl.check = false;
      //     user.value.spName = payload.girl.spName
      //     user.value.nic = payload.girl.nic
      //   payload.men.check = true;
      //     console.log('sibling 남자 오브젝트 값 : ' , `value : ${JSON.stringify(payload.men)}`)
      //     console.log('sibling 여자 오브젝트 값 : ' , `value : ${JSON.stringify(payload.girl)}`)

        // watch(payload.men.check === true,
        //     ()=>user.value.spName = payload.men.spName,
        //     user.value.nic = payload.men.nic)

        watch(payload.girl.check === true,
            ()=>user.value.spName = payload.men.spName,user.value.nic = payload.men.nic
            ,user.value.spName = payload.girl.spName, user.value.nic = payload.girl.nic)
      }


      // }

    }))
    // emitter.on('sibling',(val1)=>{
    //   user.value.name = val1[0]
    //   title.value = val1[1]
    //   console.log('sibling Chap5 값 : ' , `value : ${val1}`)
    // })
    return{title,user}
  },
  // [생명 주기 : 라이프 사이클]
  // beforeCreate() {
  //   console.log("----------------------");
  //   console.log("인스턴스 초기화 준비중");
  //   console.log("----------------------");
  // },
  // created() {
  //   console.log("----------------------");
  //   console.log("인스턴스 생성 완료");
  //   console.log("----------------------");
  // },
  // beforeMount() {
  //   console.log("----------------------");
  //   console.log("DOM 렌더링 준비");
  //   console.log("----------------------");
  // },
  // mounted() {
  //   console.log("----------------------");
  //   console.log("설 명 : DOM 렌더링 완료");
  //   console.log("----------------------");
  //
  // }
}


</script>

<style scoped>

</style>