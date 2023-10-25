<template>
        <div class="cmp-admin">
        <el-aside class="cmp-admin-menu-aside">
            <el-menu :default-active="activeTab">
                <div class="cmp-admin-user-conteiner">
                    <div class="cmp-admin-user-info">
                        <img :src="restaurantImage" alt="Logo do Restaurante" class="cmp-admin-restaurant-logo">
                        <p class="cmp-admin-restaurant-name">{{ restaurantName }}</p>
                    </div>
                </div>
            <el-menu-item class="cmp-admin-tabs-item" index="inicio" @click="changeToInicio('inicio')">
                <i class="el-icon-house"></i>
                Início
            </el-menu-item>
            <el-menu-item class="cmp-admin-tabs-item" index="pedido" @click="changeToPedido('pedido')">
                <i class="el-icon-shopping-cart-2"></i>
                Pedido
            </el-menu-item>
            <el-menu-item class="cmp-admin-tabs-item" index="cardapio" @click="changeToCardapio('cardapio')">
                <i class="el-icon-menu"></i>
                Cardápio
            </el-menu-item>
            <el-menu-item class="cmp-admin-tabs-item" index="ajuda" @click="changeToAjuda('ajuda')">
                <i class="el-icon-question"></i>
                Ajuda
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main class="cmp-admin-content-container">
            <div class="cmp-admin-content">
            <div v-if="activeTab === 'inicio'">
                <div class="cmp-admin_containerbanner-title">Cadastro de Dados Empresariais</div>
                    <div class="restaurant-info">
                        <div class="restaurant-details">
                            <p class="cmp-admin-restaurant-information">Para começar, é fundamental que você forneça informações precisas e completas sobre o seu 
                            estabelecimento. Abaixo, você encontrará os campos que precisam ser preenchidos.</p>
                            <el-form label-width="150px">
                                <el-form-item label="Razão social" class="cmp-admin-form-item">
                                    <el-input v-model="restaurantName" class="cmp-admin-form-input" required></el-input>
                                </el-form-item>
                                <el-form-item label="CNPJ" class="cmp-admin-form-item">
                                    <el-input v-model="restaurantCNPJ" class="cmp-admin-form-input" v-mask="'##.###.###/####-##'" @input="validateCNPJ" required></el-input>
                                </el-form-item>
                                <el-form-item label="Tipo" class="cmp-admin-form-item">
                                <el-select v-model="restaurantMealType" class="cmp-admin-form-select" required>
                                    <el-option label="Selecione o Tipo de Restaurante" value=""></el-option>
                                    <el-option label="Restaurante tradicional" value="restaurantetradicional"></el-option>
                                    <el-option label="Restaurante internacional" value="restauranteinternacional"></el-option>
                                    <el-option label="Restaurante gastronômico" value="restaurantegastronomico"></el-option>
                                    <el-option label="Restaurantes de especialidades" value="restauranteespecialidade"></el-option>
                                    <el-option label="Fast-food" value="fastfood"></el-option>
                                    <el-option label="Cafeteria" value="Cafeteria"></el-option>
                                    <el-option label="Rotisseries" value="Rotisseries"></el-option>
                                    <el-option label="Docerias" value="Docerias"></el-option>
                                </el-select>
                                </el-form-item>
                                <el-form-item label="Endereço" class="cmp-admin-form-item">
                                <el-input v-model="restaurantAddress.cep" placeholder="CEP" class="cmp-admin-form-input" required></el-input>
                                <el-input v-model="restaurantAddress.street" placeholder="Nome da Rua/Bairro" class="cmp-admin-form-input" required></el-input>
                                <el-input v-model="restaurantAddress.city" placeholder="Cidade" class="cmp-admin-form-input" required></el-input>
                            </el-form-item>
                                <el-form-item label="Tipo de Retirada" class="cmp-admin-form-item">
                                <el-checkbox-group v-model="restaurantTakeawayType" class="cmp-admin-form-checkbox-group" required>
                                    <el-checkbox label="Entrega" class="cmp-admin-form-checkbox"></el-checkbox>
                                    <el-checkbox label="Local" class="cmp-admin-form-checkbox"></el-checkbox>
                                </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="Descrição" class="cmp-admin-form-item">
                                <el-input type="textarea" v-model="restaurantDescription" class="cmp-admin-form-textarea" required placeholder="Breve resumo"></el-input>
                                </el-form-item>

                            </el-form>
                        </div>
                        <label class="cmp-admin-image-upload-descripition">Selecione ás imagens para :</label>

                        <div class="cmp-admin-image-upload-container">
                            <div class="cmp-admin-image-upload">
                                <input type="file" class="cmp-admin-upload-input" @change="uploadImage" accept="image/*">
                                <label for="file-input" class="cmp-admin-custom-upload-button">Logo</label>
                            </div>

                            <div class="cmp-admin-image-upload">
                                <input type="file" class="cmp-admin-upload-input" @change="uploadBanner" accept="image/*">
                                <label for="file-input" class="cmp-admin-custom-upload-button">Banner (Cardápio)</label>
                            </div>
                        </div>
                        <div class="cmp-admin-form-submit">
                            <el-button @click="submitForm">Salvar</el-button>
                        </div>
                    </div>
            </div>
            <div v-else-if="activeTab === 'pedido'">
                <div class="cmp-admin_containerbanner-title">Gerenciar Pedido</div>
            </div>
            <div v-else-if="activeTab === 'cardapio'" class="cmp-admin_addmenu">
                    <div class="cmp-admin_containerbanner-backgroundimage">
                    </div>
                    <div class="cmp-admin_addmenu-add">
                        <span> Adicione os dados dos seus pratos para montar o cardápio digital. Clique no botão 'Adicionar' para começar. </span>
                        <el-button @click="adicionarPrato">Adicionar</el-button>
                    </div>

                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Menu de pratos</h3>
                    </div>

                    <div class="menu-items">
                        <div v-for="(prato, index) in pratos" :key="index" class="menu-item">
                            <el-card>
                                <img :src="prato.imagem" alt="Imagem do Prato" class="menu-item-image">
                                <h3>{{ prato.nome }}</h3>
                                <p class="menu-item-price">Valor: R$ {{ prato.valor }}</p>
                                <div class="menu-item-ingredients">
                                    <strong>Ingredientes:</strong>
                                    <ul>
                                        <li v-for="(ingrediente, i) in prato.ingredientes" :key="i">{{ ingrediente }}</li>
                                    </ul>
                                </div>
                            </el-card>
                        </div>
                    </div>

                    <div class="cmp-admin_addmenu-items">
                        <div  class="cmp-admin_addmenu-item">
                            <el-card>
                                <div class="cmp-admin_addmenu-function">
                                    <el-button class="cmp-admin_addmenu-function-btn">Editar</el-button>
                                    <el-button class="cmp-admin_addmenu-function-btn">Remover</el-button>
                                </div>
                                <img src="../assets/img-pratos/lanche.jpg" alt="Imagem do Prato" class="cmp-admin_addmenu-item-image">
                                <div class="cmp-admin_addmenu-item-formattext">
                                    <h4 class="cmp-admin_addmenu-item-name">X Tudo</h4>
                                    <p class="cmp-admin_addmenu-item-price">R$ 20,00</p>
                                    <p class="cmp-admin_addmenu-item-ingredients"> Ingredientes: Queijo, tomate, pão </p>
                                </div>
                            </el-card>
                        </div>

                        <div  class="cmp-admin_addmenu-item">
                            <el-card>
                                <div class="cmp-admin_addmenu-function">
                                    <el-button class="cmp-admin_addmenu-function-btn">Editar</el-button>
                                    <el-button class="cmp-admin_addmenu-function-btn">Remover</el-button>
                                </div>
                                <img src="../assets/img-pratos/pintado-na-telha.webp" alt="Imagem do Prato" class="cmp-admin_addmenu-item-image">
                                <div class="cmp-admin_addmenu-item-formattext">
                                    <h4 class="cmp-admin_addmenu-item-name">Pintado na telha</h4>
                                    <p class="cmp-admin_addmenu-item-price">R$ 35,00</p>
                                    <p class="cmp-admin_addmenu-item-ingredients">Ingredientes: Queijo, tomate </p>
                                </div>
                            </el-card>
                        </div>
                    </div>
            </div>
            <div v-else-if="activeTab === 'ajuda'">
                Conteúdo da aba 'Ajuda'
            </div>
            </div>
        </el-main>
        </div>

    <el-dialog title="Adicionar Prato" v-model="showPratoModal" class="cmp-modaldialog--adddishes">
        <el-form label-width="150px">
            <el-form-item label="Nome do Prato">
            <el-input v-model="novoPrato.nome" class="cmp-admin-form-input"></el-input>
            </el-form-item>
            <el-form-item label="Valor">
            <el-input v-model="novoPrato.valor" class="cmp-admin-form-input"></el-input>
            </el-form-item>
            <el-form-item label="Ingredientes">
            <el-input v-model="novoPrato.ingredientes" class="cmp-admin-form-input"></el-input>
            </el-form-item>
            <el-form-item label="Tempo de Preparo">
            <el-input v-model="novoPrato.time" class="cmp-admin-form-input"></el-input>
            </el-form-item>
            <el-form-item label="Imagem">
                <el-input type="file" v-model="novoPrato.imagem" class="cmp-admin-form-file"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="cmp-modaldialog-footer">
            <el-button @click="showPratoModal = false" class="cmp-modaldialog-btncancel">Cancelar</el-button>
            <el-button type="primary" @click="adicionarNovoPrato" class="cmp-modaldialog-btnsalve">Adicionar</el-button>
        </div>
    </el-dialog>


    <el-dialog title="Confirma exclusão?" v-model="showRemover" class="cmp-modaldialog--adddishes">
        <el-form label-width="150px">
            <p>O prato seleciondo será deletado permantimente</p>
        </el-form>
        <div slot="footer" class="cmp-modaldialog-footer">
            <el-button @click="showRemover = false" class="cmp-modaldialog-btncancel">Cancelar</el-button>
            <el-button type="primary" @click="adicionarNovoPrato" class="cmp-modaldialog-btnsalve">Remover</el-button>
        </div>
    </el-dialog>
</template>

<style>
    .cmp-admin_addmenu-function {
        position: absolute;
        z-index: 999;
        top: 5px;
    }

    .cmp-admin_addmenu-item-ingredients{
        border-top: 1px solid var(--gray200);
        text-align: left;
        margin-top: 0.2rem;
        padding: .5rem 0 0;
    }

    .cmp-admin_addmenu-item-formattext {
        font-size: 14px;
        padding: 16px;
        text-align: center;
    }

    .cmp-admin_addmenu-function-btn {
        background-color: rgba(255, 254, 212, 0.409);
        color: var(--black100);
        border: 1px solid rgba(255, 254, 212, 0.409);
    }

    .cmp-admin_addmenu-function-btn:hover{
        background-color: rgba(255, 251, 5, 0.409);
        color: var(--black100);
        border: 1px solid  rgba(255, 251, 5, 0.409);
    }

    .cmp-admin_addmenu-item-name {
        margin-bottom: .2rem;
    }

    .cmp-admin_addmenu-item-image {
        width: 100%;
        height: 8rem;
    }

    .cmp-admin_addmenu-items {
        display: flex;
        flex-wrap: nowrap;
    }

    .cmp-admin_addmenu-item {
        width: 13rem;
        min-height: 13rem;
        margin-right: 1rem;
    }

    .cmp-admin_addmenu-item .el-card__body {
        padding: 0;
        margin: 0;
        height: inherit;
        position: relative;
    }

    .cmp-admin_addmenu-formattext {
        display: flex;
        border-top: 1px solid var(--gray200);
    }

    .cmp-admin_addmenu-title {
        margin: 16px 0;
        font-size: 16px;
        font-weight: 700;
        color: var(--yellow500);
    }

    .cmp-admin-form-file .el-input__inner{
        padding: 16px 0;
        height: 4rem;
    }

    .cmp-admin_addmenu-add {
        padding: 4rem 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cmp-admin_addmenu-add span{
        font-size: 14px;
    }

    .cmp-admin_addmenu-add .el-button {
        border-radius: 8px;
        background-color: var(--yellow500);
        border-color: var(--yellow500);
        padding: 16px 24px;
        align-items: center;
        color: var(--white100);
    }

    .cmp-admin_addmenu-add .el-button:hover {
        background-color: var(--gray300);
        border-color: var(--white100);
        color: var(--white100);
    }

    .cmp-admin {
        display: flex;
        background-color: #f9f9f9;
        align-items: flex-end;
        height: 100vh;
    }
    
    .cmp-admin .content {
        text-align: center;
        padding: 20px;
        width: 100%;
    }

    .cmp-modaldialog--adddishes {
        border-radius: 8px !important;
    }

    .cmp-modaldialog--adddishes .el-dialog {
        border-radius: 8px !important;
        display: flex;
        flex-direction: column;
    }

    .cmp-modaldialog--adddishes .el-dialog__header {
        display: flex;
        height: 58px;
        padding: 8px 24px;
        margin-right: 0;
        align-items: center;
        background-color: var(--yellow500);
    }

    .cmp-modaldialog--adddishes  .el-dialog__title {
        font-size: 16px;
        font-weight: 600;
        color: var(--white100);
    }

    .cmp-modaldialog--adddishes .el-dialog__headerbtn .el-dialog__close {
        color: var(--white100);
        font-size: larger;
    }

    .cmp-modaldialog--adddishes .el-form-item__label {
        justify-content: flex-start;
        align-items: inherit;
        font-size: 14px;
        font-weight: 600;
        color: var(--gray400);
    }

    .cmp-modaldialog--adddishes .el-form-item {
        display: grid;
        margin-bottom: 8px !important;
    }

    .cmp-modaldialog--adddishes .el-dialog__body {
        padding: 16px 24px !important;
    }

    .cmp-modaldialog--adddishes .el-input__inner:focus ,  .cmp-modaldialog--adddishes .el-input__wrapper:focus  {
        border-color: var(--yellow100);
    }

    .cmp-modaldialog--adddishes .el-input__inner:active , .cmp-modaldialog--adddishes .el-input__wrapper:active {
        border-color: var(--yellow100);
    }

    .cmp-modaldialog--adddishes .el-input__wrapper:hover {
        box-shadow: 0 0 0 1px var(--yellow100) inset;
    }

    .cmp-modaldialog-btnsalve {
        border-radius: 8px;
        background-color: var(--yellow500);
        border-color: var(--yellow500);
        padding: 8px 16px;
        align-items: center;
        color: var(--white100);
    }

    .cmp-modaldialog-btncancel {
        border-radius: 8px;
        background-color: var(--white100);
        border-color: var(--yellow500);
        padding: 8px 16px;
        align-items: center;
        color: var(--yellow500);
    }

    .cmp-modaldialog-btncancel:hover , .cmp-modaldialog-btnsalve:hover {
        background-color: var(--gray300);
        border-color: var(--white100);
        color: var(--white100);
    }

    .cmp-modaldialog-footer{
        display: flex;
        justify-content: flex-end;
    }

    .cmp-admin_containerbanner-title {
        width: -moz-available;
        width: -webkit-fill-available;
        position: absolute;
        top: 0;
        left: 300px;
        padding: 10px;
        text-align: center;
        color: var(--yellow500);
        border-bottom: 1px solid var(--el-menu-border-color);
        background-color: var(--el-menu-bg-color);
        background-repeat: no-repeat;
        background-size: 100%;
        font-size: 16px;
        font-weight: 700;
        z-index: 99;
        background-image: url(../assets/img-banner/imagebackground.png)
    }

    .cmp-admin_containerbanner-backgroundimage {
        position: absolute;
        top: 0;
        left: 300px;
        color: var(--yellow500);
        border-bottom: 1px solid var(--el-menu-border-color);
        background-image: url(../assets/img-banner/imagebanner.png);
        z-index: 99;
        height: 5rem;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position-y: center;
        width: -moz-available;
        width: -webkit-fill-available;      
    }

    .cmp-admin-form-submit {
        display: inline-flex;
        justify-content: flex-end;
        width: -webkit-fill-available;
        width: -moz-available;
        padding-top: 2rem;
    }

    .cmp-admin-form-submit  .el-button {
        background-color: var(--yellow500);
        border: 1px solid var(--yellow500);
        color: var(--white100);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .cmp-admin-image-upload-descripition {
        font-size: 14px;
        position: relative;
        display: flex;
    }

    .cmp-admin-image-upload-container {
        display: inline-flex;
        align-items: center;
        width: -webkit-fill-available;
        width: -moz-available;
        justify-content: space-evenly;
    }

    .cmp-admin-image-upload {
        position: relative;
        display: inline-block;
    }

    .cmp-admin-image-upload {
        color: var(--yellow500);
        border: 1px solid  var(--yellow500);
        background-color:  var(--white100);
        padding: .5rem 2rem;                   
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .cmp-admin-image-upload:hover {
        border: 1px solid #f9f9f9;
        background-color: #f9f9f9;
    }

    .cmp-admin-upload-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    .cmp-admin-form-item label {
        font-weight: bold;
    }
    .cmp-admin-form-input {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        margin: .5rem 0;
    }
    .cmp-admin-form-select {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }
    .cmp-admin-form-checkbox-group {
        display: flex;
        gap: 1rem;
    }
    .cmp-admin-form-checkbox {
        font-size: 1rem;
    }
    .cmp-admin-form-checkbox   .el-checkbox__input.is-checked + .el-checkbox__label {
        color: red !important;
    }
    .cmp-admin-form-textarea {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }
    .cmp-admin-custom-upload-button {
        font-size: 14px;
    }

    .cmp-admin-form-item {
        margin-bottom: .8rem;
    }
    .cmp-admin-restaurant-information{
        font-size: 14px;
        text-align: start;
        padding-top: 30px;
        color: var(--el-text-color-regular);
    }
    .cmp-admin-content-container {
        display: flex;
        height: 100%;
        background: white;
        flex-direction: column;
        flex-wrap: wrap;
        overflow-y: auto;
        align-content: center;
    }
    .cmp-admin-content {
        text-align: center;
        padding: 20px;
        font-size: 18px;
        color: var(--brack);
    }
    .cmp-admin-menu-aside {
        height: 100%;
        background-color: var(--gray400);
    }

    .cmp-admin-tabs-item {
        font-weight: 600;
    }
    .cmp-admin .el-menu-item.is-active {
        color: var(--yellow500) ;
    }
    .cmp-admin-restaurant-logo {
        width: 5rem;
        height: 5rem;
        margin: 1rem 0;
        border-radius: 8px;
    }
    .cmp-admin-restaurant-name {
        font-size: 18px;
        color: #575656;
        font-weight: 600;
        font-variant-caps: all-small-caps;
    }

    .cmp-admin-user-container{
        display: flex;
    }
    .cmp-admin-user-info {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        color: var(--white100);
        justify-content: center;
        flex-direction: column;
    }
    .cmp-admin .el-menu {
        height: 98%;
    }
    .cmp-admin .el-menu-item i {
        font-size: 18px;
        margin-right: 10px;
    }
    .cmp-admin .el-form {
        margin: 1.25rem 0;
    }
    .cmp-admin .el-menu-item:hover {
        background-color: #f9f9f9;
    }
    .cmp-admin .el-form-item {
        margin-bottom: 1.25rem;
    }
    .cmp-admin .el-form-item label {
        font-weight: bold;
    }
</style>

<script>
    import { ref } from 'vue'
    const showPratoModal = ref(true);
    const showRemover = ref(true);
    export default {
    data() {
        return {
        activeTab: 'inicio',
        restaurantImage: '',
        restaurantBanner: '',
        restaurantName: '',
        restaurantCNPJ: '',
        restaurantMealType: '',
        restaurantAddress: {
            cep: '',
            street: '',
            city: '',
        },
        restaurantTakeawayType: [],
        restaurantDescription: '',
        cnpjValidationFailed: false,
        showPratoModal: false,
        novoPrato: {
            nome: '',
            valor: '',
            imagem: '',
            ingredientes: '',
            time: '',
        },
        };
    },
    methods: {
        changeToInicio() {
        this.activeTab = 'inicio';
        },
        changeToPedido() {
        this.activeTab = 'pedido';
        },
        changeToCardapio() {
        this.activeTab = 'cardapio';
        },
        changeToAjuda() {
        this.activeTab = 'ajuda';
        },
        uploadImage(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            this.restaurantImage = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        },

        uploadBanner(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            this.restaurantBanner = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        },
        validateCNPJ() {
        const cnpj = this.restaurantCNPJ.replace(/[^0-9]/g, '');

        if (cnpj.length !== 14) {
            this.cnpjValidationFailed = true;
        } else {
            this.cnpjValidationFailed = false;
        }
        },
        submitForm() {
            this.validateCNPJ();

            if (!this.cnpjValidationFailed) {
                const formData = {
                restaurantName: this.restaurantName,
                restaurantMealType: this.restaurantMealType,
                restaurantAddress: {
                    cep: this.restaurantAddress.cep,
                    street: this.restaurantAddress.street,
                    city: this.restaurantAddress.city,
                },
                restaurantTakeawayType: this.restaurantTakeawayType,
                restaurantDescription: this.restaurantDescription,
                };

                console.log(formData);
            }else{
                this.$message.error('CNPJ inválido');
            }
        },

        adicionarPrato() {
            this.showPratoModal = true;
        },

        adicionarNovoPrato() {
            this.showPratoModal = true;
            if (this.novoPrato.nome && this.novoPrato.valor && this.novoPrato.imagem) {
                this.pratos.push(this.novoPrato); 
                this.showPratoModal = false;
                this.novoPrato = {
                    nome: '',
                    valor: '',
                    imagem: '',
                    ingredientes: '',
                    time: '',
                };
            } else {
                this.$message.error('Por favor, preencha todos os campos do prato.');
            }
        },

    },
    };
</script>