import Vue from 'vue'
import ElementUI from 'element-ui';
import './style/theme/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(ElementUI, {locale})

Vue.use(VueAxios, axios)
// axios.defaults.baseURL = 'http://127.0.0.1/gas/index.php';
axios.defaults.baseURL = 'http://106.12.47.33/gas/index.php';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')