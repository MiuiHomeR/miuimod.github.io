import Vue from 'vue'
import Sider from './Sider.vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '../public/css/style.css'
Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
new Vue({
    router,
    render: h => h(Sider)
}).$mount('#sider')