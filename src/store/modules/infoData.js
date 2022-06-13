
export const infoData = {
    namespace: true,
    state: () => ({
        change : 12,
        userData: {
            id: void 0,
            password: void 0,
            name: void 0,
            age: 30,
            job: 'programmer'
        },
    }),

    mutations: {
        initData(state) {
            state.userList = []
            state.isFlag = false
            state.userData = {
                id: void 0,
                password: void 0,
                name: void 0,
                age: 30,
                job: 'programmer'
            }
        },
    },
    getters: {
        setCompanyData: (state) =>{
            state.userData.age = state.change
           return state.userData.age

        }
    }
}

