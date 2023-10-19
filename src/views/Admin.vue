<template>
    <div class="dashboard-container">
      <el-aside class="cmp-dashboard-menu-aside">
        <el-menu :default-active="activeTab">
            <div class="user-conteiner">
                <div class="user-info">
                    <img :src="restaurantImage" alt="Logo do Restaurante" class="restaurant-logo">
                    <p class="restaurant-name">{{ restaurantName }}</p>
                </div>
            </div>
          <el-menu-item index="inicio" @click="changeToInicio('inicio')">
            <i class="el-icon-house"></i>
            Início
          </el-menu-item>
          <el-menu-item index="pedido" @click="changeToPedido('pedido')">
            <i class="el-icon-shopping-cart-2"></i>
            Pedido
          </el-menu-item>
          <el-menu-item index="cardapio" @click="changeToCardapio('cardapio')">
            <i class="el-icon-menu"></i>
            Cardápio
          </el-menu-item>
          <el-menu-item index="ajuda" @click="changeToAjuda('ajuda')">
            <i class="el-icon-question"></i>
            Ajuda
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="content-container">
        <div class="content">
          <div v-if="activeTab === 'inicio'">
            <div class="content-container-title">Cadastro de Dados Empresariais</div>
                <div class="restaurant-info">
                    <div class="restaurant-details">
                        <p class="restaurant-information">Para começar, é fundamental que você forneça informações precisas e completas sobre o seu 
                        estabelecimento. Abaixo, você encontrará os campos que precisam ser preenchidos.</p>
                        <el-form label-width="150px">
                            <el-form-item label="Razão social" class="cmp-admin-form-item">
                                <el-input v-model="restaurantName" class="cmp-admin-form-input" required></el-input>
                                <span class="error-message" v-if="!restaurantName">Razão social é obrigatória.</span>
                            </el-form-item>
                            <el-form-item label="CNPJ" class="cmp-admin-form-item">
                                <el-input v-model="restaurantCNPJ" class="cmp-admin-form-input" v-mask="'##.###.###/####-##'" @input="validateCNPJ" required></el-input>
                                <span class="error-message" v-if="!restaurantCNPJ">CNPJ é obrigatória.</span>                                
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
                            <span class="error-message" v-if="!restaurantMealType">Tipo é obrigatória.</span>               
                            </el-form-item>
                            <el-form-item label="Endereço" class="cmp-admin-form-item">
                            <el-input v-model="restaurantAddress.cep" placeholder="CEP" class="cmp-admin-form-input" required></el-input>
                            <el-input v-model="restaurantAddress.street" placeholder="Nome da Rua/Bairro" class="cmp-admin-form-input" required></el-input>
                            <el-input v-model="restaurantAddress.city" placeholder="Cidade" class="cmp-admin-form-input" required></el-input>
                            <span class="error-message" v-if="!restaurantAddress ">Endereço é obrigatória.</span>               
                        </el-form-item>
                            <el-form-item label="Tipo de Retirada" class="cmp-admin-form-item">
                            <el-checkbox-group v-model="restaurantTakeawayType" class="cmp-admin-form-checkbox-group" required>
                                <el-checkbox label="Entrega" class="cmp-admin-form-checkbox"></el-checkbox>
                                <el-checkbox label="Local" class="cmp-admin-form-checkbox"></el-checkbox>
                            </el-checkbox-group>
                            <span class="error-message" v-if="!restaurantTakeawayType ">Retirada é obrigatória.</span>               
                            </el-form-item>
                            <el-form-item label="Descrição" class="cmp-admin-form-item">
                            <el-input type="textarea" v-model="restaurantDescription" class="cmp-admin-form-textarea" required></el-input>
                            <span class="error-message" v-if="!restaurantDescription">Descrição é obrigatória.</span>               
                            </el-form-item>

                        </el-form>
                    </div>
                    <label class="image-upload-descripition">Selecione ás imagens para :</label>

                    <div class="image-upload-container">
                        <div class="image-upload">
                            <input type="file" class="upload-input" @change="uploadImage" accept="image/*">
                            <label for="file-input" class="custom-upload-button">Logo</label>
                        </div>

                        <div class="image-upload">
                            <input type="file" class="upload-input" @change="uploadBanner" accept="image/*">
                            <label for="file-input" class="custom-upload-button">Banner (Cardápio)</label>
                        </div>
                    </div>
                    <div class="cmp-form-submit">
                        <el-button @click="submitForm">Salvar</el-button>
                    </div>
                </div>
          </div>
          <div v-else-if="activeTab === 'pedido'">
            Conteúdo da aba 'Pedido'
          </div>
          <div v-else-if="activeTab === 'cardapio'">
                <div class="content-container-banner">
                </div>
                <div class="cmp-form-addprato">
                    <el-button @click="adicionarPrato">Adicionar Prato</el-button>
                </div>

                <div class="menu-items">
                    <div v-for="(prato, index) in pratos" :key="index" class="menu-item">
                        <el-card>
                            <img :src="prato.imagem" alt="Imagem do Prato" class="menu-item-image">
                            <h3>{{ prato.nome }}</h3>
                            <p class="menu-item-price">Valor: R$ {{ prato.valor }}</p>
                            <p class="menu-item-description">{{ prato.descricao }}</p>
                            <div class="menu-item-ingredients">
                                <strong>Ingredientes:</strong>
                                <ul>
                                    <li v-for="(ingrediente, i) in prato.ingredientes" :key="i">{{ ingrediente }}</li>
                                </ul>
                            </div>
                        </el-card>
                    </div>
                </div>
                <el-dialog title="Adicionar Prato" :visible="showPratoModal" @close="showPratoModal = false">
                    <el-form label-width="150px">
                        <el-form-item label="Nome do Prato">
                        <el-input v-model="novoPrato.nome" class="cmp-admin-form-input"></el-input>
                        </el-form-item>
                        <el-form-item label="Valor">
                        <el-input v-model="novoPrato.valor" class="cmp-admin-form-input"></el-input>
                        </el-form-item>
                        <el-form-item label="Descrição">
                        <el-input v-model="novoPrato.descricao" class="cmp-admin-form-input"></el-input>
                        </el-form-item>
                        <el-form-item label="Ingredientes">
                        <el-input v-model="novoPrato.ingredientes" class="cmp-admin-form-input"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="showPratoModal = false">Cancelar</el-button>
                        <el-button type="primary" @click="adicionarNovoPrato">Adicionar</el-button>
                    </div>
                </el-dialog>

          </div>
          <div v-else-if="activeTab === 'ajuda'">
            Conteúdo da aba 'Ajuda'
          </div>
        </div>
      </el-main>
    </div>
  </template>

<style scoped>

    .error-message{
        color: #FFC530;
        font-size: 11px;
    }
    .cmp-form-addprato{
        display: inline-flex;
        justify-content: flex-end;
        width: -webkit-fill-available;
        padding-top: 4rem;
    }
    .cmp-form-submit {
        display: inline-flex;
        justify-content: flex-end;
        width: -webkit-fill-available;
        width: -moz-available;
        padding-top: 2rem;
    }
    .cmp-form-submit  .el-button {
        background-color: #FFC530;
        border: 1px solid #FFC530;
        color: #fff;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    .dashboard-container {
        display: flex;
        background-color: #f9f9f9;
        align-items: flex-end;
        height: 100vh;
    }
    .cmp-dashboard-menu-aside {
        height: 100%;
        background-color: var(--gray400);
    }
    .restaurant-information {
        font-size: 14px;
        text-align: start;
        padding-top: 30px;
        color: var(--el-text-color-regular);
    }
    .content-container-title {
        width: -moz-available;
        width: -webkit-fill-available;
        position: absolute;
        top: 0;
        left: 300px;
        padding: 10px;
        text-align: center;
        color: #FFC530;
        border-bottom: 1px solid var(--el-menu-border-color);
        background-color: var(--el-menu-bg-color);
        background-repeat: no-repeat;
        background-size: 100%;
        font-size: 16px;
        font-weight: 700;
        z-index: 99;
        background-image: url(../assets/img-banner/imagebackground.png)
    }
    .content-container-banner {
        position: absolute;
        top: 0;
        left: 300px;
        color: #FFC530;
        border-bottom: 1px solid var(--el-menu-border-color);
        background-image: url(../assets/img-banner/imagebanner.png);
        z-index: 99;
        height: 5rem;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position-y: center;
        width: -webkit-fill-available;       
    }
    .content-container {
        display: flex;
        height: 100%;
        background: white;
        flex-direction: column;
        flex-wrap: wrap;
        overflow-y: auto;
        align-content: center;
    }
    .content {
        text-align: center;
        padding: 20px;
        font-size: 18px;
        color: var(--brack);
    }
    .el-menu {
        height: 98%;
    }
    .el-menu-item i {
        font-size: 18px;
        margin-right: 10px;
    }
    .user-container{
        display: flex;
    }
    .user-info {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        color: var(--white100);
        justify-content: center;
        flex-direction: column;
    }
    .el-menu-item.is-active {
        color: #FFC530;
    }
    .restaurant-logo {
        width: 5rem;
        height: 5rem;
        margin: 1rem 0;
        border-radius: 8px;
    }
    .restaurant-name {
        font-size: 18px;
        color: #575656;
        font-weight: 600;
        font-variant-caps: all-small-caps;
    }
    .el-form {
        margin: 1.25rem 0;
    }
    .el-menu-item:hover {
        background-color: #f9f9f9;
    }
    .el-form-item {
        margin-bottom: 1.25rem;
    }
    .el-form-item label {
        font-weight: bold;
    }
    .cmp-admin-form-item {
        margin-bottom: .8rem;
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

    .el-checkbox {
        
    }
    .cmp-admin-form-textarea {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }
    .custom-upload-button {
        font-size: 14px;
    }
    .image-upload-descripition {
        font-size: 14px;
        position: relative;
        display: flex;
    }
    .image-upload-container{
        display: inline-flex;
        align-items: center;
        width: -webkit-fill-available;
        width: -moz-available;
        justify-content: space-evenly;
    }
    .image-upload {
        position: relative;
        display: inline-block;
    }
    .upload-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
    .image-upload {
        color: #FFC530;
        border: 1px solid #FFC530;
        background-color: #fff;
        padding: .5rem 2rem;                   
        border-radius: 0.5rem;
        cursor: pointer;
    }
    .image-upload:hover {
        border: 1px solid #f9f9f9;
        background-color: #f9f9f9;
    }

   

</style>
  
<script>
    import VueTheMask from 'vue-the-mask';
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
            descricao: '',
            ingredientes: '',
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
            if (this.novoPrato.nome && this.novoPrato.valor && this.novoPrato.descricao) {
                this.pratos.push(this.novoPrato); 
                this.showPratoModal = false;
                this.novoPrato = {
                nome: '',
                valor: '',
                descricao: '',
                ingredientes: '',
                };
            } else {
                this.$message.error('Por favor, preencha todos os campos do prato.');
            }
        },

    },
    };

</script>