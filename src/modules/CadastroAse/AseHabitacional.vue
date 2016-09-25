<template>
<div class="row">
    <div class="row">
        <h4 class="center">Cadastro de Aviso de Sinistro Habitacional</h4>
    </div>
</div>

<div class="row ">
    <validator name="asecadastrovalidate">
        <form class="col s10 offset-s1 card-panel brown lighten-5" novalidate>
            <!-- Aviso de atenção -->
            <div class="section" style="padding-bottom: 0;">
                <ui-alert :dismissible="false" type="error">
                    <strong>ATENÇÃO!!!</strong> <br/> Este comunicado de sinistro só poderá ser realizado se o contrato de seguro for da CAIXA SEGURADORA. Dúvidas, Consultar Manual de Navegação <a href="#">AQUI</a>. <br/> Todos os campos com ( * ) são
                    obigatórios
                </ui-alert>
            </div>

            <!-- Dados do Contrato -->
            <div class="section">
                <h5>Dados do Contrato</h5>

                <div class="row">
                    <div class="input-field col s3">
                        <input id="aseNumeroContrato" type="text" v-model="ase.NumeroContrato" v-validate:ase.NumeroContrato="['required']" />
                        <label for="aseNumeroContrato ">Número do Contrato</label>
                    </div>

                    <div class="input-field col s4">
                        <input id="aseAgenciaContrato" type="text" v-model="ase.NumeroContrato" />
                        <label for="aseAgenciaContrato">Agência do Contrato</label>
                    </div>
                </div>
            </div>

            <div class="divider"></div>

            <!-- Dados do Segurado -->
            <div class="section">
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
            </div>

            <div class="divider"></div>

            <!-- Dados do Comunicante (Representante do Segurado) -->
            <div class="section">
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

                <div class="row">
                    <div class="input-field col s2">
                        <input type="text" id="aseCep">
                        <label for="aseCep">CEP</label>
                    </div>

                    <div class="input-field col s6">
                        <input type="text" id="aseEndereco">
                        <label for="aseEndereco">Endereço do Imóvel</label>
                    </div>

                    <div class="input-field col s2">
                        <input type="text" id="aseNumero">
                        <label for="aseNumero">Número</label>
                    </div>

                    <div class="input-field col s2">
                        <ui-select name="aseEstado" label="Estado" :options="ufs" placeholder="Selecione"></ui-select>
                    </div>

                </div>

                <div class="row">
                    <div class="input-field col s4">
                        <input type="text" id="aseBairro">
                        <label for="aseBairro">Bairro</label>
                    </div>

                    <div class="input-field col s5">
                        <input type="text" id="aseCidade">
                        <label for="aseCidade">Cidade</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s6">
                        <input type="text" id="aseEmailPessoal">
                        <label for="aseEmailPessoal">E-mail Pessoal</label>
                    </div>

                    <div class="input-field col s6">
                        <input type="text" id="aseEmailComercial">
                        <label for="aseEmailComercial">E-mail Comercial</label>
                    </div>
                </div>

                <!-- Informações da Agência que está comunicando o ASE -->
                <div class="section">
                    <div class="col s10 offset-s1">
                        <fieldset>
                            <h6>Informações da Agência que está comunicando o ASE</h6>

                            <div class="row">
                                <div class="input-field col s4">
                                    <input type="text" id="aseAgenciaComunicante">
                                    <label for="aseAgenciaComunicante">Agência Comunicante</label>
                                </div>

                                <div class="input-field col s2">
                                    <input type="text" id="aseTelAgComunicante">
                                    <label for="aseTelAgComunicante">Tel. Agência</label>
                                </div>

                                <div class="input-field col s6">
                                    <input type="text" id="aseAgEmail">
                                    <label for="aseAgEmail">E-mail Agência</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div class="clearfix"></div>
            </div>

            <div class="divider"></div>

            <!-- Dados do Sinistro -->
            <div class="section">
                <h5>Dados do Sinistro</h5>

                <div class="row">
                    <div class="input-field col s2">
                        <ui-select id="aseCobertura" name="aseCobertura" label="Cobertura" :options="cobertura" placeholder="Selecione">
                        </ui-select>
                    </div>

                    <div class="input-field col s6">
                        <ui-select id="aseTipoSinistro" name="aseTipoSinistro" label="Tipo de Sinistro" :options="tipoSinistro" placeholder="Selecione">
                        </ui-select>
                    </div>
                </div>

                <!-- Checklist de MIP - Morte por Acidente -->
                <div class="section" style="display: none;">
                    <div class="col s10 offset-s1">
                        <fieldset>
                            <h6>Checklist de MIP - Morte por Acidente</h6>

                            <!-- Exemplo disabled -->
                            <div class="row" style="margin-bottom: 0;">
                                <div class="col s12">
                                    <ui-checkbox name="listaChecklists" :model.sync="modelcheckbox" value="teste" :disabled="true">Cópia do Aviso de Sinistro ao Estipulante (assinada pelo comunicante e estipulante)</ui-checkbox>
                                </div>
                            </div>

                            <div class="row" v-for="check in checklists" style="margin-bottom: 0;">
                                <div class="col s12">
                                    <ui-checkbox name="listaChecklists" :model.sync="modelcheckbox" :value="check">{{check}}</ui-checkbox>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div class="clearfix"></div>

                <!-- Informações complementares de DFI - <<Checkist Selecionado>> -->
                <div class="section">
                    <div class="col s10 offset-s1">
                        <fieldset>
                            <h6>Informações complementares de DFI - ~~~~~~~~~~~~ </h6>

                            <div class="row">
                                <div class="col s12">
                                    <ui-checkbox name="listaChecklists" :model.sync="modelcheckbox" value="teste" :disabled="true">Cópia do Aviso de Sinistro ao Estipulante (assinada pelo comunicante e estipulante)</ui-checkbox>
                                </div>
                            </div>

                            <ui-alert type="error" :dismissible="false">*Atenção! Todos os campos a seguir são obrigatórios.</ui-alert>

                            <div class="row">
                                <div class="input-field col s2">
                                    <input type="text" id="aseDfiCep">
                                    <label for="aseDfiCep">CEP</label>
                                </div>

                                <div class="input-field col s6">
                                    <input type="text" id="aseDfiEndereco">
                                    <label for="aseDfiEndereco">Endereço do Imóvel</label>
                                </div>

                                <div class="input-field col s2">
                                    <input type="text" id="aseDfiNumero">
                                    <label for="aseDfiNumero">Número</label>
                                </div>

                                <div class="input-field col s2">
                                    <ui-select name="aseDfiEstado" label="Estado" :options="ufs" placeholder="Selecione"></ui-select>
                                </div>

                            </div>

                            <div class="row">
                                <div class="input-field col s4">
                                    <input type="text" id="aseDfiBairro">
                                    <label for="aseDfiBairro">Bairro</label>
                                </div>

                                <div class="input-field col s5">
                                    <input type="text" id="aseDfiCidade">
                                    <label for="aseDfiCidade">Cidade</label>
                                </div>

                                <div class="input-field col s3">
                                    <input type="text" id="aseDfiTelImovel">
                                    <label for="aseDfiTelImovel">Tel. do Imóvel</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" id="aseDfiReferencia">
                                    <label for="aseDfiReferencia">Ponto de Referência</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class=" col s12">
                                    <ui-textbox :rows="7" label="Descrição dos danos e/ou prejuízos causados ao imóvel" name="aseDfiDescricaoDanos" :multi-line="true" :max-length="2000" placeholder="Faça a descrição dos danos ocorridos ao imóvel" validation-rules="max:2000"></ui-textbox>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div class="clearfix"></div>
            </div>

            <div class="divider"></div>
            <div class="clearfix"></div>

            <div class="section">
                <div class="row right">
                    <div class="col s12">
                        <ui-button icon="clear" button-type="button" :raised="true">Cancelar</ui-button>
                        <ui-button icon="done" button-type="submit" :raised="true" color="success">Salvar</ui-button>
                    </div>
                </div>
            </div>

        </form>
    </validator>
</div>
</template>

<script>
let possibleHorarioRecardo = ['Manhã', 'Tarde', 'Noite'];
let cobertura = ['MIP', 'DFI'];
let tipoSinistro = ['DFI - Danos físicos ao imóvel em construção', 'Teste'];
let checklists = ['Cópia da Carteira Nacional de Habilitação - CNH, quando se tratar de acidente em que o segurado era o condutor do veículo automotor envolvido em acidente',
    'Boletim de Ocorrência Policial', 'Laudo do Instituto Médico Legal - IML, somente nos casos em que se tratar de suicídio'
]
let ufs = ['DF', 'BA', 'SP', 'RJ'];

export default {
    data() {
        return {
            ase: {
                NumeroContrato: ""
            },
            possibleHorarioRecardo,
            cobertura,
            tipoSinistro,
            checklists,
            modelcheckbox: [],
            ufs
        }
    },

    created() {},

    methods: {
        functionExample() {}
    }
}
</script>

<style media="screen">
.ui-checkbox-checkmark {
    min-width: 20px;
}
</style>
