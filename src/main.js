// Vue Imports
import Vue from './../node_modules/vue/dist/vue.js'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// External Components Imports
import Keen from 'keen-ui';

//My Imports
import App from './App.vue'
import Index from './Index.vue'

// Uses
Vue.use(VueRouter);
Vue.use(Keen);

const router = new VueRouter({
    history: true
});

// Router
router.map({
    '/': {
        component: Index
    }
});

router.beforeEach(function () {
    window.scrollTo(0, 0)
})

router.start(App, "App");
