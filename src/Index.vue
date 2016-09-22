<template>
 Bem vindo a Poc do ASE em Vue Js

<br/>

<date-picker :time.sync="starttime" :option="option" :limit="limit"></date-picker>
</template>

<script>
import DatePicker from 'vue-datepicker'

export default {
    data() {
        return {
            starttime: '',
            limit: [{
                type: 'weekday',
                available: [1, 2, 3, 4, 5]
            }],
            option: {
                type: 'day',
                week: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
                month: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                format: 'DD/MM/YYYY',
                // placeholder: 'when?',
                inputStyle: {
                    'display': 'inline-block',
                    'padding': '6px',
                    'line-height': '22px',
                    'font-size': '16px',
                    'border': '2px solid #fff',
                    'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                    'border-radius': '2px',
                    'color': '#5F5F5F'
                },
                color: {
                    header: '#2E7FB9',
                    headerText: '#FFF'
                },
                buttons: {
                    ok: 'Ok',
                    cancel: 'Cancelar'
                },
                overlayOpacity: 0.5, // 0.5 as default
                dismissible: true // as true as default
            },
            // endtime: '2016-01-19',
            // testTime: '',
            // multiTime: '',


        }
    },
    components: {
        DatePicker
    }
}
</script>
