export default {

    install(Vue) {

        // [getSum 함수 설정]
        Vue.config.globalProperties.$getSum = function(one, two){
            return one + two;
        },

            // [로컬 스토리지 데이터 저장]
            Vue.config.globalProperties.$setLocalStoage = function(key, value){
                localStorage.setItem(key, value);
            },


            // [로컬 스토리지 저장 값 호출]
            Vue.config.globalProperties.$getLocalStoage = function(key){
                return localStorage.getItem(key);
            },


            // [로컬 스토리지 특정 값 삭제]
            Vue.config.globalProperties.$delItemLocalStoage = function(key){
                localStorage.removeItem(key);
            },


            // [로컬 스토리지 전체 데이터 삭제]
            Vue.config.globalProperties.$delAllLocalStoage = function(){
                localStorage.clear();
            }
    }
}