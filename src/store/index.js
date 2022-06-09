import {createStore} from "vuex";
import { Counter } from "@/store/modules/Counter";
import { moduleA } from "@/store/modules/moduleA";

export default createStore({
    //모듈로 분리형
    modules: { Counter, moduleA }

    //하나로 사용
    // count state 속성 추가
    // state: {
    //     counter: 10
    // },
    // getters: {
    //     time2(state) {
    //         return state.counter * 2;
    //     }
    // },
    // mutations: {
    //     setCounter(state, value) {
    //         state.counter = value;
    //     }
    // }
});