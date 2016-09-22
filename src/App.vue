<template>
<div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
</div>
</template>

<script>
import AppHeader from './modules/0root/layout/AppHeader.vue'
import AppFooter from './modules/0root/layout/AppFooter.vue'
import AppContent from './modules/0root/layout/AppContent.vue'

export default {
    components: {
        AppHeader,
        AppFooter,
        AppContent
    }
}
</script>

<style>

</style>
