// store/modules/Counter.js
export const Counter = {
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
        }
    }
};
