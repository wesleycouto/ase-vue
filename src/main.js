// Vue Imports
import Vue from './../node_modules/vue/dist/vue.js'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueValidator from 'vue-validator'

// External Components Imports
import Keen from 'keen-ui'

//My Imports
import App from './App.vue'
import Index from './Index.vue'
import AseHabitacional from './modules/CadastroAse/AseHabitacional.vue'

// Uses
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(Vuex);
Vue.use(Keen);

// Router
const router = new VueRouter({
    // history: true,
    // hashbang: false
});

router.map({
    '/': {
        component: Index
    },
    '/cadastro-habitacional': {
        name: 'cadastro-habitacional',
        component: AseHabitacional
    }
});

router.beforeEach(function() {
    window.scrollTo(0, 0);
});

router.start(App, "App");
