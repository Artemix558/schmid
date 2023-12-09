import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import i18n from './locale/i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import emitter from './emitter/useremitter';

window.emitter = emitter;
createApp(App).config.globalProperties.$mitt = emitter;
createApp(App).use(router).use(store).use(VueAxios, axios).use(i18n).mount('#app')
