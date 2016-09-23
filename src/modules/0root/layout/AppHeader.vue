<template>
<nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">CompLine</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a v-el:menucomunicado class="link-trigger">Comunicado de Dinistro</a></li>
            <ui-menu open-on="hover" :trigger="$els.menucomunicado" :options="menuOptions" show-icons @option-selected="tryroute"></ui-menu>
        </ul>
    </div>
</nav>
</template>

<script>
var menuOptions = [{
    id: 'cadastro-habitacional',
    text: 'Cadastrar Comunicado Habicational',
    icon: 'assignment'
}, {
    id: 'cadastro-prestamista',
    text: 'Cadastrar Comunicado Prestamista',
    icon: 'assignment',
    disabled: true
}, {
    type: 'divider'
}, {
    id: 'consultar-ase',
    text: 'Consultar Comunicado',
    icon: 'search'
}, {
    type: 'divider'
}, {
    id: 'area-par',
    text: 'Área de Trabalho PAR',
    icon: 'recent_actors'
}, {
    id: 'area-compline',
    text: 'Área de Trabalho CompLine',
    icon: 'recent_actors'
}];

export default {
    data() {
        return {
            menuOptions: menuOptions
        }
    },
    created() {
        $(".dropdown-button").dropdown({
            hover: true,
            linkActiveClass: 'active'
        });
    },
    methods: {
        tryroute: function(element) {
            this.$router.go({
                name: element.id
            });
        }
    }
}
</script>

<style>
.drop-element {
    top: 45px!important;
}
</style>
