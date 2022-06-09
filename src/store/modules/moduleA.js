export const moduleA = {
    namespaced: true,
    state: () => ({
        count: 0,
    }),
    mutations: {
        increment(state, value) {
            state.count = value;
        }
    },
    getters: {
        // eslint-disable-next-line no-unused-vars
        doubleCount(state, getters, rootState) {
            return state.count * 2;
        }
    },
    actions: {
        incrementIfOddOnRootSum(state, commit, rootState) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit("increment");
            }
        }
    }
};