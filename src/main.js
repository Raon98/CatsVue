import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import axios from "axios";
import global from "@/common/global";
import mitts from "mitt";
const app = createApp(App)
app.config.productionTip =false


const emitter = mitts();
app.config.globalProperties.emitter = emitter;

app.provide('emitter', emitter);

app.use(router).use(store).use(global)
app.config.globalProperties.$axios = axios;
app.mount('#app')