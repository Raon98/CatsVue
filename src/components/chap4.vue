<template>
  <p> 콜백함수를 통해 처음 Index 반환 : {{findIndex}}</p>
  <p> 다차원 배열 내의 요소를 출력 :  {{flatten}}</p>
  <p> 배열 안 요소들의 값들을 비교하고 분석 : {{evens}}</p>
  <p> 배열안에 요소값 비교 : {{every}}</p>
  <p> 조건을 만족하는 첫번째 요소 : </p> <p>{{find}}</p>
  <p> 특정 조건을 만족하는 모든 요소를 추출하는 필터1 : </p> <p>{{find}}</p>
  <p> 특정 조건을 만족하는 모든 요소를 추출하는 필터2 : </p> <p>{{find}}</p>
  <p> 계산 결과 배열함수를 실행하고 그 결과를 배열로 반환 : {{mapEx}}</p>
</template>

<script>
import _ from "lodash";
import {cheol} from "@/plugins/cheol";

const myFriend = [
  {name:'kys',job:'developer',age:27},
  {name:'cys',job:'webtoons man',age:27},
  {name:'yhs',job:'florist',age:26},
  {name:'chj',job:'nonghyup man',age:27},
  {name:'ghh',job:'coffee man',age:27},
  {name:'ldh',job:'kangaroo father',age:27},
  {name:'hsy',job:'monk',age:27},
];

const myFriend1 = [
    {name:'sung',active : false },
    {name:'chae',active : false },
]

const myFriend3= [
  {'name':'kys'},
  {'name':'cys'},
];

const removeArr=[1,2,3,4];

export default {
  // lodash EX입니다.
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chap4",

  setup(){
    const {store, router} = cheol();

  //콜백함수를 통해 나이가 26인 객체가 처음으로 나오는 index 반환
   const findIndex = _.findIndex(myFriend, function(friend) {
      return friend.age === 26;
    })
  // 배열안의 배열 값을 깊이와 상관없이 순서대로 나열합니다.
  const flatten = _.flatten([1, [2, 3, [4]]], true);

  //배열 내의 조건에 맞는 요소들을 제거한 후 반환해줍니다.
   const evens=_.remove(removeArr,function(n){
      return n%2==0;
    });

    //collection 관련 method
    //배열 안 요소들의 값들을 비교하고 분석하는데 용이합니다.
    const every = _.every(myFriend1, 'active',false);
    console.log(every)

    //find()는 조건을 만족하는 컬렉션에서의 첫번째 요소를 찾는 메소드입니다.
    // 콜백함수가 처음으로 참이되는 객체를 반환
    const find = _.find(myFriend, function(friend) {
      return friend.age < 28;
    });

    //filter()는 특정 조건을 만족하는 모든 요소를 추출하는 메소드입니다.
    // 입력한 object의 key와 value들을 모두 포함하는 객체들을 배열로 반환합니다.
    const filter1 =  _.filter(myFriend, { age: 26, job: 'florist' });
    // 입력한 key값이 true인 객체들을 배열로 반환합니다.
    const filter2 = _.filter(myFriend, friend=>friend.age==26);

    const mapEx = _.map(myFriend3,'name');
    //_.map([1,2],timesTwo); //->[3,6]

      return {store,
              router,
              findIndex,
              flatten,
              evens,
              every,
              find,
              filter1,
              filter2,
              mapEx

      }
  },


}
</script>

<style scoped>

</style>