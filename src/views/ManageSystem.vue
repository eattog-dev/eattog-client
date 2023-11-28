<template>
    <div class="cmp-admin">
        <el-aside class="cmp-admin-menu-aside">
            <el-menu :default-active="activeTab">
                <div class="cmp-admin-user-conteiner">
                    <div class="cmp-admin-user-info">
                        <p class="cmp-admin-restaurant-name">Eattog Admin</p>
                    </div>
                </div>
                <el-menu-item class="cmp-admin-tabs-item" index="start" @click="changeToStart('start')">
                    Início
                </el-menu-item>
                <el-menu-item class="cmp-admin-tabs-item" index="clientes" @click="changeToClientes('clientes')">
                    Clientes
                </el-menu-item>
                <el-menu-item class="cmp-admin-tabs-item" index="help" @click="changeToHelp('help')">
                    Informações
                </el-menu-item>
                <el-menu-item class="cmp-admin-tabs-item" index="create" @click="changeToCreate('create')">
                    Equipe 
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-main class="cmp-admin-content-container">
            <div class="cmp-admin-content">
                <div v-if="activeTab === 'start'">
                    <div class="cmp-admin_containerbanner-title">Cadastro de Dados do Sistema Eattog</div>
                        <div class="restaurant-info">
                            <div class="restaurant-details">
                                <p class="cmp-admin-restaurant-information">Para começar, é fundamental que você forneça informações precisas e completas sobre o sistema
                                . Abaixo, você encontrará os campos que precisam ser preenchidos.</p>
                                <el-form>
                                    <el-form-item label="Tipo de pratos" class="cmp-admin-form-item-structtype">
                                        <el-input v-model="typedishes" class="cmp-admin-form-input-listtype cmp-admin-form-input" required></el-input>
                                        <el-button class="cmp-admin-form-submit-type" @click="submitFormTypeDishes">Salvar</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                        <div class="cmp-admin_addmenu-formattext">
                            <h3 class="cmp-admin_addmenu-title">Lista de Categoria</h3> 
                        </div>
                        <ul class="cmp-admin_addmenu-listtype">
                            <li class="cmp-admin_addmenu-listtype-item" v-for="info in infos" :key="info.id">
                                {{ info.id }} - {{ info.categoria }}
                                <el-button class="cmp-admin_addmenu-listtype-button" @click="removeTypeDishes(info.id)">Remover</el-button>
                            </li>
                        </ul>
                </div>
                <div v-else-if="activeTab === 'clientes'">
                    <div class="cmp-admin_containerbanner-title">Gerenciar Clientes</div>
                    <div class="restaurant-details">
                        <p class="cmp-admin-restaurant-information cmp-admin-spacebottom">Estabelecimentos de alimentos cadastrados é mantida em estrita conformidade com as diretrizes estabelecidas pelas 
                        regulamentações brasileiras vigentes. Em caso de violação das normas, diretrizes do sistema ou das regulamentações de venda de alimentos, reservamo-nos o direito 
                        de remover o estabelecimento em questão da lista. Quaisquer violações podem resultar na remoção imediata do estabelecimento desta lista. </p>
                    </div>
                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Catálogo de Estabelecimentos Alimentícios Registrados</h3>
                    </div>
                    <ul class="cmp-admin_addmenu-listtype">
                        <li class="cmp-admin_addmenu-listtype-item"  v-for="establishment in establishments" :key="establishment.id">
                            {{ establishment.id }} - {{ establishment.razao_social }}
                            <el-button class="cmp-admin_addmenu-listtype-button" @click="removeEstablishment(establishment.id)">Remover</el-button>
                        </li>
                    </ul>
                </div>
                <div v-else-if="activeTab === 'help'">
                    <div class="cmp-admin_containerbanner-title">Dúvidas Frequentes</div>
                    <div class="restaurant-details">
                        <p class="cmp-admin-restaurant-information cmp-admin-spacebottom">Algumas das principais dúvidas sobre informações do sistema.</p>
                    </div>
                    <el-collapse v-model="faqAccordion">
                    <el-collapse-item  class="cmp-admin_collapse-title" title="O que são as categorias ?" name="faq">
                        <div class="faq-content cmp-admin_collapse-text">
                            <p>Tipos de alimentos referem-se a classificações ou grupos nos quais os alimentos podem ser organizados com base em diferentes critérios. Essas categorias podem ser variadas e servem para auxiliar na identificação, classificação e seleção de alimentos de acordo com suas características específicas. Alguns exemplos comuns de categorias de tipos de alimentos incluem:
                            </p>
                            <ul class="cmp-admin_collapse-list">
                                <li><strong>Sem Glúten:</strong> Refere-se a alimentos que não contêm glúten, uma proteína encontrada em cereais como trigo, cevada e centeio. Esses alimentos são adequados para pessoas com intolerância ao glúten ou doença celíaca.</li>
                                <li><strong>Sem Lactose:</strong> Este grupo consiste em alimentos que não contêm lactose, o açúcar natural encontrado nos produtos lácteos. Isso inclui uma variedade de alternativas livres de laticínios, como leites vegetais (amêndoa, coco, arroz), queijos e iogurtes sem lactose. Esses alimentos são ideais para pessoas com intolerância à lactose, que têm dificuldade em digerir esse açúcar, resultando em desconforto gastrointestinal após consumir produtos lácteos tradicionais, como leite, queijo ou iogurte.</li>
                                <li><strong>Alimentos Vegetarianos:</strong> Os alimentos vegetarianos excluem carne, aves e peixes, mas incluem produtos lácteos e ovos, sendo baseados em fontes vegetais como frutas, legumes, grãos, leguminosas, nozes e sementes.</li>
                                <li><strong>Alimentos Integrais:</strong> Refere-se a alimentos não processados ou minimamente processados, que mantêm a maior parte de sua forma original, como grãos integrais, legumes frescos, etc.</li>
                                <li><strong>Alimentos Veganos:</strong> Os alimentos veganos eliminam completamente qualquer produto de origem animal, incluindo laticínios, ovos e mel. Eles consistem apenas em alimentos de fontes vegetais, como frutas, verduras, legumes, grãos, leguminosas, nozes e sementes.</li>
                            </ul>
                        </div>
                    </el-collapse-item>

                    
                    <el-collapse-item class="cmp-admin_collapse-title" title="Leis e Diretrizes Brasileiras de Alimentos" name="faq">
                        <div class="faq-content cmp-admin_collapse-text">
                            <p>Estabelecimentos de alimentos cadastrados são mantidos em estrita conformidade com as diretrizes estabelecidas pelas regulamentações brasileiras vigentes. Em caso de violação das normas, diretrizes do sistema ou das regulamentações de venda de alimentos, reservamo-nos o direito de remover o estabelecimento em questão da lista. Quaisquer violações podem resultar na remoção imediata do estabelecimento desta lista.</p>
                            <p>As leis e diretrizes brasileiras de alimentos são elaboradas para garantir a segurança alimentar, a qualidade dos produtos e a proteção dos consumidores. Elas abrangem aspectos como rotulagem, padrões de higiene, controle de qualidade, inspeção de alimentos, entre outros.</p>
                            <el-collapse v-model="lawsAccordion">
                                <el-collapse-item class="cmp-admin_collapse-title" title="Lei nº 8.078/1990 - Código de Defesa do Consumidor (CDC)" name="laws">
                                    <div class="faq-content cmp-admin_collapse-text">
                                        <p>O Código de Defesa do Consumidor (CDC) estabelece os direitos e deveres do consumidor no Brasil. Ele também aborda questões relacionadas à segurança e qualidade dos alimentos, garantindo proteção aos consumidores em relação aos produtos adquiridos.</p>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item class="cmp-admin_collapse-title" title="Lei nº 6.437/1977 - Infrações à Legislação Sanitária Federal" name="laws">
                                    <div class="faq-content cmp-admin_collapse-text">
                                        <p>A Lei nº 6.437/1977 trata das infrações à legislação sanitária federal, definindo penalidades para descumprimento das normas sanitárias estabelecidas. Essas penalidades visam assegurar a saúde pública e a qualidade dos produtos oferecidos aos consumidores.</p>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item class="cmp-admin_collapse-title" title="Resolução RDC nº 12/2001 - Regulamento Técnico sobre os Padrões Microbiológicos para Alimentos" name="laws">
                                    <div class="faq-content cmp-admin_collapse-text">
                                        <p>A Resolução RDC nº 12/2001 estabelece os padrões microbiológicos para diversos tipos de alimentos. Esses padrões são fundamentais para garantir a segurança e qualidade dos alimentos consumidos pela população, minimizando os riscos à saúde relacionados à contaminação microbiológica.</p>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item class="cmp-admin_collapse-title" title="Resolução RDC nº 259/2002 - Regulamento Técnico para Rotulagem de Alimentos Embalados" name="laws">
                                    <div class="faq-content cmp-admin_collapse-text">
                                        <p>A Resolução RDC nº 259/2002 define as informações obrigatórias que devem constar nos rótulos de alimentos embalados. Isso inclui detalhes sobre a composição do produto, data de validade, informações nutricionais, entre outros aspectos importantes para a orientação do consumidor.</p>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    </el-collapse>
                </div>
                <div v-else-if="activeTab === 'create'" class="cmp-admin_addmenu">
                    <div class="cmp-admin_containerbanner-title">Equipe</div>
                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Lista de Criadores</h3>
                    </div>
                    <el-list class="cmp-admin-listcreate">
                        <el-list-item class="cmp-admin-listcreate-item" v-for="(user, index) in team" :key="index">
                            <span class="el-avatar el-avatar--large el-avatar--circle cmp-admin-initials-circle ">
                                {{ user.initials }}
                            </span>
                            <div class="cmp-admin-listcreate-infor">
                                <h4>{{ user.name }}</h4> 
                                <p>{{ user.email }}</p>
                            </div>
                        </el-list-item>
                    </el-list>
                </div>
            </div>
        </el-main>
    </div>

    <div v-if="showModal" class="cmp-admin_dark-overlay"></div>

    <el-dialog :show-close="false"
    :close-on-click-modal="false"
    v-model="showModal" 
    title="Digite a senha de acesso"
    class="cmp-modaldialog--adddishes">
        <el-form ref="form" :model="passwordForm">
        <el-form-item label="Senha" prop="password">
            <el-input
            v-model="passwordForm.password"
            show-password
            autocomplete="off" class="cmp-admin-form-input-modalpass"
            ></el-input>
        </el-form-item>
        </el-form>
        <div slot="footer" class="cmp-modaldialog-footer">
            <el-button @click="returnHome" class="cmp-modaldialog-btnsalve">Ir para Home</el-button>
            <el-button @click="submitPassword" class="cmp-modaldialog-btnsalve">Confirmar</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import axios from 'axios'
    import { ref } from 'vue'

    const showModal = ref(true);

    export default {
    data() {
        return {
        activeTab: 'start',
        userImage: '../assets/img-banner/imagebanner.png',
        typedishes: '',
        infos: null,
        establishment: null,
        team: [
            { name: 'Augusto Ferreira Abreu', initials: 'AFA' , email: 'ra184048@ucdb.br'},
            { name: 'Emanuel Barros Ibanhes', initials: 'EBI', email: 'ra179952@ucdb.br' },
            { name: 'Grazielly Dos Santos De Rocha', initials: 'GSDR' , email: 'ra186304@ucdb.br' },
            { name: 'Karina Amaral Oshiro', initials: 'KAO' , email: 'ra187115@ucdb.br'},
            { name: 'Milena Dos Santos Carmona', initials: 'MDSC', email: 'ra188556@ucdb.br' }
        ],
        showModal: false,
        passwordForm: {
            password: '',
        },
        };
    },
    mounted () {
        this.showModal = true;

        axios
        .get('https://api.eattog.jera.com.br/categorias')
        .then(response => (this.infos = response.data))
        .catch(error => {
            console.error(error);
        });

        axios
        .get('https://api.eattog.jera.com.br/restaurantes')
        .then(response => (this.establishments = response.data))
        .catch(error => {
            console.error(error);
        });
    },
    methods: {
        changeToStart() {
            this.activeTab = 'start';
        },
        changeToClientes() {
            this.activeTab = 'clientes';
        },
        changeToCreate() {
            this.activeTab = 'create';
        },
        changeToHelp() {
            this.activeTab = 'help';
        },
        returnHome() {

        },
        submitPassword() {
            const enteredPassword = this.passwordForm.password;
            if (enteredPassword === 'admin') {
                this.$message.success('Senha correta. Acesso permitido.');
                this.showModal = false; 
            } else {
                this.$message.error('Senha incorreta. Tente novamente.');
            }
        },

        submitFormTypeDishes() {
            const formData = {
                categoria_prato: this.typedishes,
            };

            axios.post('https://api.eattog.jera.com.br/criar/categoria', formData)
            .then(response => {
                const newCategoryId = response.data.id;
                this.$message.success('Categoria adicionada com sucesso.');
                this.typedishes = '';
                this.infos = this.infos.filter(info => info.id !== newCategoryId);
            })
            .catch(error => {
                console.error(error);
                this.$message.error('Erro ao adicionar categoria');
                this.typedishes = '';
            });
        },

        removeTypeDishes(categoriaId) {
            axios.delete(`https://api.eattog.jera.com.br/deletar/categoria-prato/${categoriaId}`)
            .then(response => {
                this.$message.success('Categoria removida com sucesso.');
                this.infos = this.infos.filter(info => info.id !== categoriaId);
            })
            .catch(error => {
                console.error('Erro ao remover a categoria:', error);
                this.$message.error('Erro ao remover a categoria');
            });
        },

        removeEstablishment(restauranteId) {
            axios.delete(`https://api.eattog.jera.com.br/restaurante/${restauranteId}`)
            .then(response => {
                this.$message.success('Restaurante removida com sucesso.');
                this.establishments = this.establishments.filter(establishment => establishment.id !== restauranteId);
            })
            .catch(error => {
                console.error('Erro ao remover restaurante:', error);
                this.$message.error('Erro ao remover restaurante');
            });
        },
    },
    };
</script>

<style>
    .cmp-admin_dark-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--rgba-gray);
        z-index: 100;
    }
    .cmp-admin_collapse-text{
        text-align: justify;
        font-size: 0.875rem;
    }
    .cmp-admin_collapse-text p{
        color: var(--gray900);
    }
    .cmp-admin_collapse-title .el-collapse-item__header{
        font-weight: 600;
        font-size: .9rem;
        color: var(--gray900);
    }
    .cmp-admin_collapse-list li {
        padding: 0 .5rem;
        color: var(--gray900);
    }
    .cmp-admin_collapse-list strong{
        font-weight: bold;
    }
    .cmp-admin-form-item-structtype {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .cmp-admin-form-input-listtype {
        width: 89% !important
    }
    .cmp-admin_addmenu-listtype ,  .cmp-admin-form-input-modalpass {
        padding: 0;
    }
    .cmp-admin_addmenu-listtype-item{
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid var(--transp-gray100);
        padding: .5rem 0;
        list-style-type: none;
        color: var(--gray900);
        font-size: 0.875rem;
    }
    .cmp-admin_addmenu-listtype-button:hover {
        background-color: var(--yellow500) !important;
        border: 0.063rem solid var(--yellow500) !important;
        color: var(--white100) !important;
    }
    .cmp-admin_addmenu-listtype-button:hover  .cmp-admin_addmenu-listtype-button:active{
        background-color: var(--yellow500) !important;
        border: 0.063rem solid var(--yellow500) !important;
        color: var(--white100) !important;
        border-radius: 0.5rem;
        cursor: pointer; 
    }
    .cmp-admin_addmenu-listtype-button {
        border-radius: 0.5rem;
        padding: 1rem 1.2rem;
        background-color: var(--white100) !important;
        border: 0.063rem solid var(--gray200) !important;
        color: var(--gray300) !important;
    }
    .cmp-admin-form-submit-type {
        background-color: var(--yellow500) !important;
        border: 0.063rem solid var(--yellow500) !important;
        color: var(--white100) !important;
        border-radius: 0.5rem;
        cursor: pointer; 
        padding: 1rem 1.2rem;
        margin-left: 1rem;
    }
    .cmp-admin-form-submit-type:hover {
        background-color: var(--white100);
        border: 0.063rem solid var(--gray200);
        color: var( --gray900);
    }
    .cmp-admin-form-input-listtype .el-input__wrapper {
        padding: 0;
    }
    .cmp-admin-form-input-listtype .el-input__inner {
        box-shadow: 0 0 0 0.063rem var(--el-input-hover-border-color) inset !important;
        padding-left: 1rem;
        height: 2rem;
    }
    .cmp-admin-form-input-modalpass .el-input__wrapper.is-focus{
        box-shadow: 0 0 0 0.063rem var(--yellow500) inset !important;
    }
    .cmp-admin-spacebottom {
        padding-bottom: 1rem;
    }
    .cmp-admin-initials-circle {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--gray900);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white100); 
        font-weight: bold;
        margin-right: 1rem;
    }
    .cmp-admin-listcreate {  
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
    }
    .cmp-admin-listcreate-item {
        display: flex;
        align-items: center;
        margin: 1rem 1rem 1rem 0;
    }
    .cmp-admin-listcreate-infor{
        text-align: left;
    }
    .cmp-admin-listcreate-infor p{
        font-size: 0.875rem;
    }
    .cmp-admin-listcreate-infor h4{
        font-size: 1rem;
    }
</style>