// store/modules/counter.js
export const counter = {
    namespace : true,
    state: () => ({ counter: 0 }),
    mutations: {
        setCounter(state, value) {
            state.counter = value;
        }
    },
    actions: {
        test() {
            console.log(4);
        }
    },
    getters: {
        time2(state) {
            return state.counter * 2;
        },
        // eslint-disable-next-line no-unused-vars
        doubleCount(state, getters, rootState) {
            return state.counter * 2;
        }
    }
};
