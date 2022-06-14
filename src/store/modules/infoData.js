
export const infoData = {
    namespace: true,
    state: () => ({
        change : 12,
        userData: {
            id: '',
            password: '',
            name: {},
            age: 30,
            job: 'programmer'
        },
    }),

    mutations: {
        setId(state,payload){
            state.userData.id = payload;
        },
        setPassword(state,payload){
            state.userData.password = payload;
        },
        setName(state,payload){
            state.userData.name = payload;
        },
    },
    getters: {
        setCompanyData: (state) =>{
           return state.userData
        }
    }
}

