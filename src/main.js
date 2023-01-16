import Vue from 'vue'
import router from '@/router'
import filters from '@/filters'
import { createPinia, PiniaVuePlugin} from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import './assets/sass/main.scss';

import draggable from 'vuedraggable'
Vue.component('draggable', draggable);

Vue.config.productionTip = false

Vue.use(filters);
Vue.use(Antd);
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  render: h => h(App),
  pinia,
  router,
})
