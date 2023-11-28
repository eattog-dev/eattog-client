<template>
    <div class="endereco">
        <h2>Endereço</h2>
        <el-form ref="enderecoForm" :model="endereco">
            <el-col>
                <el-row :gutter=8>
                    <el-col :xs="6" :span="4">
                        <el-form-item prop="cep" :rules="cepRule">
                            <label for="cep">CEP</label>
                            <el-input v-model="endereco.cep" class="lala" name="cep" maxLength="8"
                                :disabled="enderecoSalvo" />
                        </el-form-item>
                    </el-col>
                    <el-col :xs="8" :md="7" :lg="6" :span="5">
                        <el-form-item prop="estado" :rules="estadoRule">
                            <label for="estado">Estado</label>
                            <el-input v-model="endereco.estado" name="estado" :disabled="enderecoSalvo" />

                        </el-form-item>
                    </el-col>
                    <el-col :xs="10" :md="13" :lg="14" :span="15">
                        <el-form-item prop="municipio" :rules="municipioRule">
                            <label for="municipio">Município</label>
                            <el-input v-model="endereco.municipio" name="municipio" :disabled="enderecoSalvo" />

                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="logradouro" :rules="logradouroRule">

                            <label for="logradouro">Logradouro</label>
                            <el-input v-model="endereco.logradouro" name="logradouro" :disabled="enderecoSalvo" />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter=8>
                    <el-col :xs="6" :md="7" :span="4">
                        <el-form-item prop="numero_residencia" :rules="numeroRule">
                            <label for="numero">Número</label>
                            <el-input v-model="endereco.numero_residencia" name="numero_residencia"
                                :disabled="enderecoSalvo" />

                        </el-form-item>
                    </el-col>
                    <el-col :xs="6" :md="7" :span="6">
                        <el-form-item prop="bairro" :rules="bairroRule">
                            <label for="bairro">Bairro</label>
                            <el-input v-model="endereco.bairro" name="bairro" :disabled="enderecoSalvo" />
                        </el-form-item>
                    </el-col>
                    <el-col :xs="12" :md="10"  :span="14">
                        <el-form-item prop="complemento">
                            <label for="complemento">Complemento</label>
                            <el-input v-model="endereco.complemento" name="complemento"
                                placeholder="Deixe vazio se nao houver" :disabled="enderecoSalvo" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-col>
            <div class="actions">
                <el-form-item>
                    <el-button class="salvar-endereco" @click="submitForm(enderecoForm)"
                        v-if="!enderecoSalvo">Salvar</el-button>
                    <el-button class="cancelar-endereco" @click="cancelar()"
                        v-if="!enderecoSalvo">Cancelar</el-button>
                    <el-button class="salvar-endereco" @click="handleDataForm()" v-else>Editar</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
import axios from "axios";

import { usePerfilStore } from '../store/perfil'

const perfilStore = usePerfilStore();

const endereco = computed(() => perfilStore.endereco);

const enderecoForm = ref({})

const cepRule = [
    {
        required: true,
        message: "Preencha corretamente o cep",
        trigger: "blur"
    },
    {
        validator: async (rule, value, callback) => {
            const resposta = await axios
                .get(`https://viacep.com.br/ws/${value}/json/`)
            if (!resposta.data.erro) {
                endereco.value.bairro = resposta.data.bairro
                endereco.value.municipio = resposta.data.localidade
                endereco.value.logradouro = resposta.data.logradouro
                endereco.value.estado = resposta.data.uf
                callback();
            } else {
                callback(new Error("Preencha um cep válido"));
            }
        },
        trigger: "blur",
    },
]
const bairroRule =
{
    required: true,
    message: "Preencha corretamente o bairro",
    trigger: "blur"
}
const estadoRule = {
    required: true,
    message: "Preencha corretamente o estado",
    trigger: "blur"
}

const municipioRule = {
    required: true,
    message: "Preencha corretamente o municipio",
    trigger: "blur"
}

const numeroRule = {
    required: true,
    message: "Preencha corretamente o numero do endereco",
    trigger: "blur"
}

const logradouroRule = [
    {
        validator: (rule, value, callback) => {
            if (perfilStore.novoPerfil.rua !== null)
                callback()
            else
                callback(new Error("Preencha corretamente o logradouro2"));
        },
        trigger: "blur",
    }
]


const submitForm = (cadastroForm) => {
    cadastroForm.validate(async (valid) => {
        if (valid) {
            console.log("asjdhasdasjkhdh");
            await axios
                .post(`https://api.eattog.jera.com.br/endereco`, {
                    "cep": perfilStore.endereco.cep,
                    "estado": perfilStore.endereco.estado,
                    "municipio": perfilStore.endereco.municipio,
                    "logradouro": perfilStore.endereco.logradouro,
                    "numero_residencia": perfilStore.endereco.numero_residencia,
                    "bairro": perfilStore.endereco.bairro,
                    "complemento": perfilStore.endereco.complemento,
                }, {
                    headers: { 'Authorization': `Bearer ${sessionStorage.getItem("token")}` },
                }
                );

            handleDataForm()
        }
    });
}

let enderecoSalvo = ref(true)

const handleDataForm = () => {
    enderecoSalvo.value = !enderecoSalvo.value
    return enderecoSalvo.value
}

const cancelar = () => {
    handleDataForm();
    perfilStore.handleDataForm()
}
</script>
  
<style scoped>
.endereco {
    padding: 1rem 0;
    color: var(--black100);
    border-top: 1px solid #ebeef7;
}

button.el-dialog__headerbtn {
    display: none !important
}

.el-form {
    margin-right: 4rem;
}

.localizacao-atual {
    margin: 1rem 0;
}

.localizacao-atual,
.actions {
    font-weight: 600;
    text-transform: capitalize;
}

.localizacao-atual,
.salvar-endereco {
    background-color: var(--yellow500);
    color: var(--black100);
}

.cancelar-endereco {
    background-color: rgb(225, 18, 18);
    color: var(--white200);
}

.actions {
    display: flex;
    flex-direction: row;
    justify-content: end;
}

@media (max-width: 1024px) {
    .el-form {
        margin-right: 2.5rem;
    }
}

@media (max-width: 768px) {
    .el-form {
        margin-right: 1rem;
    }
}
</style>
  