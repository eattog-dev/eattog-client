<template>
    <div class="cmp-admin">
        <el-aside class="cmp-admin-menu-aside">
            <el-menu :default-active="activeTab">
                <div class="cmp-admin-user-conteiner">
                    <div class="cmp-admin-user-info">
                        <p class="cmp-admin-restaurant-name">Eattog Admin</p>
                    </div>
                </div>
                <el-menu-item class="cmp-admin-tabs-item" index="inicio" @click="changeToInicio('inicio')">
                    <i class="el-icon-house"></i>
                    Início
                </el-menu-item>
                <el-menu-item class="cmp-admin-tabs-item" index="clientes" @click="changeToClientes('clientes')">
                    <i class="el-icon-shopping-cart-2"></i>
                    Clientes
                </el-menu-item>
                <el-menu-item class="cmp-admin-tabs-item" index="solicitacoes" @click="changeToSolicitacoes('solicitacoes')">
                    <i class="el-icon-menu"></i>
                    Solicitações 
                </el-menu-item>
                <el-menu-item class="cmp-admin-tabs-item" index="ajuda" @click="changeToAjuda('ajuda')">
                    <i class="el-icon-question"></i>
                    Informações
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-main class="cmp-admin-content-container">
            <div class="cmp-admin-content">
                <div v-if="activeTab === 'inicio'">
                    <div class="cmp-admin_containerbanner-title">Cadastro de Dados do Sistema Eattog</div>
                        <div class="restaurant-info">
                            <div class="restaurant-details">
                                <p class="cmp-admin-restaurant-information">Para começar, é fundamental que você forneça informações precisas e completas sobre o sistema
                                . Abaixo, você encontrará os campos que precisam ser preenchidos.</p>
                                <el-form label-width="150px">
                                    <el-form-item label="Tipo de pratos" class="cmp-admin-form-item">
                                        <el-input v-model="typedishes" class="cmp-admin-form-input" required></el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="cmp-admin-form-submit">
                                <el-button @click="submitFormTypeDishes">Salvar</el-button>
                            </div>
                        </div>
                        <div class="cmp-admin_addmenu-formattext">
                            <h3 class="cmp-admin_addmenu-title">Lista de categoria</h3> 
                        </div>
                        <ul>
                            <li v-for="info in infos" :key="info.id">
                                {{ info.id }} - {{ info.categoria }}
                                <el-button @click="removeTypeDishes(info.id)">Remover</el-button>
                            </li>
                        </ul>
                </div>
                <div v-else-if="activeTab === 'clientes'">
                    <div class="cmp-admin_containerbanner-title">Gerenciar Clientes</div>
                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Lista</h3>
                    </div>
                    <ul>
                        <li v-for="establishment in establishments" :key="establishment.id">
                            {{ establishment.id }} - {{ establishment.titulo }}
                            <el-button @click="removeEstablishment(establishment.id)">Remover</el-button>
                        </li>
                    </ul>
                </div>
                <div v-else-if="activeTab === 'solicitacoes'" class="cmp-admin_addmenu">
                    <div class="cmp-admin_containerbanner-title">Solicitações</div>
                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Lista</h3>
                    </div>
                </div>
                <div v-else-if="activeTab === 'ajuda'">
                    <div class="cmp-admin_containerbanner-title">Dúvidas Frequentes</div>
                    Em breve conteúdo da aba 'Ajuda'
                </div>
            </div>
        </el-main>
    </div>
</template>

<style> </style>

<script>
    import axios from 'axios'
    export default {
    data() {
        return {
        activeTab: 'inicio',
        userImage: '../assets/img-banner/imagebanner.png',
        typedishes: '',
        infos: null,
        establishment: null
        };
    },
    mounted () {
    axios
        .get('http://54.233.122.212/categorias')
        .then(response => (this.infos = response.data
        ))
        .catch(error => {
            console.error(error);
        });

    axios
        .get('http://54.233.122.212/restaurantes')
        .then(response => (this.establishments = response.data
        ))
        .catch(error => {
            console.error(error);
        });
    },
    methods: {
        changeToInicio() {
            this.activeTab = 'inicio';
        },
        changeToClientes() {
            this.activeTab = 'clientes';
        },
        changeToSolicitacoes() {
            this.activeTab = 'solicitacoes';
        },
        changeToAjuda() {
            this.activeTab = 'ajuda';
        },

        submitFormTypeDishes() {
            const formData = {
                categoria_prato: this.typedishes,
            };

            console.log("dados:"+formData);

            axios.post('http://54.233.122.212/criar/categoria', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        },

        removeTypeDishes(categoriaId) {
            axios.delete(`http://54.233.122.212/deletar/categoria-prato/${categoriaId}`)
            .then(response => {
                alert('Categoria removida com sucesso.');
            })
            .catch(error => {
                console.error('Erro ao remover a categoria:', error);
            });
        },

        removeEstablishment(restauranteId) {
            axios.delete(`http://54.233.122.212/deletar/restaurante/${restauranteId}`)
            .then(response => {
                alert('Restaurante removida com sucesso.');
            })
            .catch(error => {
                console.error('Erro ao remover ${restauranteId} restaurante:', error);
            });
        },
    },
    };
</script>

