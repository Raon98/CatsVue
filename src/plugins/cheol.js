
import{useStore} from "vuex";
import{useRoute} from "vue-router";

export function cheol() {
    const store = useStore()
    const router = useRoute()
    return {store,
            router,
    }
}