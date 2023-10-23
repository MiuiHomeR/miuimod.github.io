import Vue from 'vue'
import Sider from './Sider.vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'github-markdown-css'
import 'highlight.js'

import '../public/css/style.css'
import '../public/css/sider.css'
import '../public/css/miuimod.css'
import '../public/css/miuihomer.css'

Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
new Vue({
    router,
    render: h => h(Sider)
}).$mount('#sider')