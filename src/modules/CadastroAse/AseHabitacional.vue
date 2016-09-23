<template>
<div class="row">
    <div class="row">
        <h4>Cadastro de Aviso de Sinistro Habitacional</h4>
    </div>
</div>

<div class="row ">
    <validator name="asecadastrovalidate">
        <form class="col s10 offset-s1 card-panel brown lighten-5" novalidate>
            <!-- Dados do Contrato -->
            <h5>Dados do Contrato</h5>
            <div class="row">
                <div class="input-field col s3">
                    <input id="aseNumeroContrato" type="text" v-model="ase.NumeroContrato" v-validate:ase.NumeroContrato="['required']" />
                    <label for="aseNumeroContrato ">Número do Contrato</label>
                </div>

                <div class="input-field col s4">
                    <input id="aseAgenciaContrato" type="text" v-model="ase.NumeroContrato" />
                    <label for="aseAgenciaContrato">Agência do Contrato<label>
                </div>
            </div>

            <!-- Dados do Segurado -->
            <h5>Dados do Segurado-Mutuário Sinistrado</h5>
            <div class="row">
              <div class="input-field col s10">
                <input type="text" id="aseNomeSegurado" />
                <label for="aseNomeSegurado">Nome do Segurado</label>
                </div>

                <div class="input-field col s2">
                    <input type="text" id="aseCpfSegurado" />
                    <label for="aseCpfSegurado">CPF do Segurado</label>
                </div>
            </div>

            <!-- Dados do Comunicante (Representante do Segurado) -->
            <h5 style="display: inline;">Dados do Comunicante</h5>
            <h6 style="display: inline;">(Representante do Segurado)</h6>
            <div class="row">
                <div class="input-field col s10">
                    <input type="text" id="aseNomeComunicante">
                    <label for="aseNomeComunicante">Nome do Comunicante</label>
                </div>

                <div class="input-field col s2">
                    <input type="text" id="aseCpfComunicante" />
                    <label for="aseCpfComunicante">CPF do Segurado</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s2">
                    <input type="text" id="aseTelResidencial">
                    <label for="aseTelResidencial">Tel. Residêncial</label>
                </div>

                <div class="input-field col s2">
                    <input type="text" id="aseTelCelular">
                    <label for="aseTelCelular">Tel. Celular</label>
                </div>

                <div class="input-field col s2">
                    <input type="text" id="aseTelComercial">
                    <label for="aseTelComercial">Tel. Comercial</label>
                </div>

                <div class="input-field col s2">
                    <input type="text" id="aseTelRecado">
                    <label for="aseTelRecado">Tel. Recado</label>
                </div>

                <div class="input-field col s4">
                    <ui-select id="aseHorarioContato" name="aseHorarioContato" label="Melhor período para contato" :options="possibleHorarioRecardo" placeholder="Selecione">
                    </ui-select>
                </div>
            </div>

            <!-- Informações da Agência que está comunicando o ASE -->


            <!-- Dados do Sinistro -->
        </form>
    </validator>
</div>
</template>

<script>
let possibleHorarioRecardo = ['Manhã', 'Tarde', 'Noite'];

export default {
    data() {
        return {
            ase: {
                NumeroContrato: ""
            },
            possibleHorarioRecardo
        }
    },

    created() {},

    methods: {
        functionExample() {}
    }
}
</script>
