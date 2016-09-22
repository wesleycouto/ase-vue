<template>
<!-- Dropdown Structure -->
<!-- <ul id="menuDdlComunicadoSinistro" class="dropdown-content">
    <li>
        <a href="#!"> <i class="small right material-icons">recent_actors</i></a>
    </li>
    <li>
        <a href="#!"> <i class="small right material-icons"></i></a>
    </li>
</ul> -->

<nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">CompLine</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <!-- <li><a href="sass.html">Sass</a></li> -->
            <!-- <li><a class="dropdown-button" href="#!" data-activates="menuDdlComunicadoSinistro" data-constrainwidth="false">Comunicado de Sinistro <i class="material-icons right">arrow_drop_down</i></a></li> -->

            <li><a v-el:menucomunicado class="link-trigger">Comunicado de Dinistro</a></li>
            <ui-menu :trigger="$els.menucomunicado" :options="menuOptions" show-icons @option-selected="tryteste"></ui-menu>
        </ul>
    </div>
</nav>
</template>

<script>
let menuOptions = [{
    id: 'habitacional',
    text: 'Cadastrar Comunicado Habicational',
    icon: 'assignment',
    link: {
        path: '/'
    }
}, {
    id: 'prestamista',
    text: 'Cadastrar Comunicado Prestamista',
    icon: 'assignment',
    disabled: true
}, {
    type: 'divider'
}, {
    id: 'consultar',
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
        tryteste: function(element) {
            console.log(element);

            console.log(element.link);
        }
    }
}
</script>

component
