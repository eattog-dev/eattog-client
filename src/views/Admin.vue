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
                            <p class="cmp-admin-restaurant-information">Para começar, é fundamental que você forneça
                                informações precisas e completas sobre o seu
                                estabelecimento. Abaixo, você encontrará os campos que precisam ser preenchidos.</p>
                            <el-form label-width="150px">
                                <el-form-item label="Razão social" class="cmp-admin-form-item">
                                    <el-input v-model="restaurantName" class="cmp-admin-form-input" required></el-input>
                                </el-form-item>
                                <el-form-item label="CNPJ" class="cmp-admin-form-item">
                                    <el-input v-model="restaurantCNPJ" class="cmp-admin-form-input"
                                        v-mask="'##.###.###/####-##'" @input="validateCNPJ" required></el-input>
                                </el-form-item>
                                <el-form-item label="Número de telefone" class="cmp -admin-form-item">
                                    <el-input v-model="restaurantPhone" class="cmp-admin-form-input" required></el-input>
                                </el-form-item>
                                <el-form-item label="Tipo" class="cmp-admin-form-item">
                                    <el-select v-model="restaurantMealType" class="cmp-admin-form-select" required>
                                        <el-option label="Selecione o Tipo de Restaurante" value=""></el-option>
                                        <el-option label="Restaurante tradicional"
                                            value="restaurantetradicional"></el-option>
                                        <el-option label="Restaurante internacional"
                                            value="restauranteinternacional"></el-option>
                                        <el-option label="Restaurante gastronômico"
                                            value="restaurantegastronomico"></el-option>
                                        <el-option label="Restaurantes de especialidades"
                                            value="restauranteespecialidade"></el-option>
                                        <el-option label="Fast-food" value="fastfood"></el-option>
                                        <el-option label="Cafeteria" value="Cafeteria"></el-option>
                                        <el-option label="Rotisseries" value="Rotisseries"></el-option>
                                        <el-option label="Docerias" value="Docerias"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Endereço" class="cmp-admin-form-item">
                                    <div class="cmp-admin-flex">
                                        <el-input v-model="restaurantAddress.cep" placeholder="CEP" class="cmp-admin-form-input"
                                            required></el-input>
                                        <el-input v-model="restaurantAddress.district" placeholder="Bairro"
                                            class="cmp-admin-form-input" required></el-input>
                                    </div>
                                    <div class="cmp-admin-flex">
                                        <el-input v-model="restaurantAddress.street" placeholder="Nome da Rua"
                                        class="cmp-admin-form-input" required></el-input>
                                        <el-input v-model="restaurantAddress.streetNumber" placeholder="Número"
                                            class="cmp-admin-form-input" required></el-input>
                                    </div>
                                    <div class="cmp-admin-flex">
                                        <el-input v-model="restaurantAddress.city" placeholder="Cidade"
                                            class="cmp-admin-form-input" required></el-input>
                                        <el-input v-model="restaurantAddress.state" placeholder="Estado"
                                            class="cmp-admin-form-input" required></el-input>
                                    </div>
                                </el-form-item>
                                <el-form-item label="Tipo de Retirada" class="cmp-admin-form-item">
                                    <el-checkbox-group v-model="restaurantTakeawayType"
                                        class="cmp-admin-form-checkbox-group" required>
                                        <el-checkbox label="Entrega" class="cmp-admin-form-checkbox"></el-checkbox>
                                        <el-checkbox label="Local" class="cmp-admin-form-checkbox"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="Descrição" class="cmp-admin-form-item">
                                    <el-input type="textarea" v-model="restaurantDescription"
                                        class="cmp-admin-form-textarea" required placeholder="Breve resumo"></el-input>
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
                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Pedidos em Aberto</h3>
                    </div>
                    <div class="cmp-admin-slick-format  cmp-admin-status-aberto">
                        <el-card class="cmp-admin_box-card">
                            <div slot="header" class="mp-admin_clearfix">
                                <span> Pedido de <strong>João </strong></span>
                            </div>
                            <div class="cmp-admin_box-card-item">
                                <p v-for="o in 1" :key="o">
                                    {{ o + ' Prato x ' }}
                                </p>
                            </div>
                            <div class="cmp-admin_box-card-button">
                                <el-button style="float: left; padding: 3px 0" type="text">Recusar</el-button>
                                <el-button style="float: right; padding: 3px 0" type="text">Aceitar</el-button>
                            </div>
                        </el-card>

                        <el-card class="cmp-admin_box-card">
                            <div slot="header" class="cmp-admin_clearfix">
                                <span>Pedido de <b> Maria </b></span>
                            </div>
                            <div class="cmp-admin_box-card-item">
                                <p v-for="o in 2" :key="o">
                                    {{ o + ' Prato x ' }}
                                </p>
                            </div>

                            <div class="cmp-admin_box-card-button">
                                <el-button style="float: left; padding: 3px 0" type="text">Recusar</el-button>
                                <el-button style="float: right; padding: 3px 0" type="text">Aceitar</el-button>
                            </div>
                        </el-card>

                        <el-card class="cmp-admin_box-card">
                            <div slot="header" class="mp-admin_clearfix">
                                <span> Pedido de <strong>João </strong></span>
                            </div>
                            <div class="cmp-admin_box-card-item">
                                <p v-for="o in 2" :key="o">
                                    {{ o + ' Prato x ' }}
                                </p>
                            </div>
                            <div class="cmp-admin_box-card-button">
                                <el-button style="float: left; padding: 3px 0" type="text">Recusar</el-button>
                                <el-button style="float: right; padding: 3px 0" type="text">Aceitar</el-button>
                            </div>
                        </el-card>
                    </div>

                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Pedidos em Preparo</h3>
                    </div>
                    <div class="cmp-admin-slick-format  cmp-admin-status-preparo">
                        <el-card class="cmp-admin_box-card">
                            <div slot="header" class="mp-admin_clearfix">
                                <span> Pedido de <strong>João </strong></span>
                            </div>
                            <div class="cmp-admin_box-card-item">
                                <p v-for="o in 1" :key="o">
                                    {{ o + ' Prato x ' }}
                                </p>
                            </div>
                            <div class="cmp-admin_box-card-button">
                                <el-button style="float: left; padding: 3px 0" type="text">Recusar</el-button>
                                <el-button style="float: right; padding: 3px 0" type="text">Aceitar</el-button>
                            </div>
                        </el-card>
                    </div>

                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Pedidos em Transporte</h3>
                    </div>
                    <div class="cmp-admin-slick-format  cmp-admin-status-transporte">
                        <el-card class="cmp-admin_box-card">
                            <div slot="header" class="mp-admin_clearfix">
                                <span> Pedido de <strong>Milena </strong></span>
                            </div>
                            <div class="cmp-admin_box-card-item">
                                <p v-for="o in 1" :key="o">
                                    {{ o + ' Prato x ' }}
                                </p>
                            </div>
                            <div class="cmp-admin_box-card-button">
                                <el-button style="float: left; padding: 3px 0" type="text">Recusar</el-button>
                                <el-button style="float: right; padding: 3px 0" type="text">Aceitar</el-button>
                            </div>
                        </el-card>
                    </div>


                    <div class="cmp-admin_addmenu-formattext">
                        <h3 class="cmp-admin_addmenu-title">Pedidos em Concluido</h3>
                    </div>
                    <div class="cmp-admin-slick-format  cmp-admin-status-transporte">
                        <el-card class="cmp-admin_box-card">
                            <div slot="header" class="mp-admin_clearfix">
                                <span> Pedido de <strong>Karina</strong></span>
                            </div>
                            <div class="cmp-admin_box-card-item">
                                <p v-for="o in 1" :key="o">
                                    {{ o + ' Prato x ' }}
                                </p>
                            </div>
                            <div class="cmp-admin_box-card-button">
                                <el-button style="float: left; padding: 3px 0" type="text">Recusar</el-button>
                                <el-button style="float: right; padding: 3px 0" type="text" class="cmp">Aceitar</el-button>
                            </div>
                        </el-card>
                    </div>
                </div>
                <div v-else-if="activeTab === 'cardapio'" class="cmp-admin_addmenu">
                    <div class="cmp-admin_containerbanner-backgroundimage">
                    </div>
                    <div class="cmp-admin_addmenu-add">
                        <span> Adicione os dados dos seus pratos para montar o cardápio digital. Clique no botão 'Adicionar'
                            para começar. </span>
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
                        <div class="cmp-admin_addmenu-item">
                            <el-card>
                                <div class="cmp-admin_addmenu-function">
                                    <el-button class="cmp-admin_addmenu-function-btn">Editar</el-button>
                                    <el-button class="cmp-admin_addmenu-function-btn">Remover</el-button>
                                </div>
                                <img src="../assets/img-pratos/lanche.jpg" alt="Imagem do Prato"
                                    class="cmp-admin_addmenu-item-image">
                                <div class="cmp-admin_addmenu-item-formattext">
                                    <h4 class="cmp-admin_addmenu-item-name">X Tudo</h4>
                                    <p class="cmp-admin_addmenu-item-price">R$ 20,00</p>
                                    <p class="cmp-admin_addmenu-item-ingredients"> Ingredientes: Queijo, tomate, pão </p>
                                </div>
                            </el-card>
                        </div>

                        <div class="cmp-admin_addmenu-item">
                            <el-card>
                                <div class="cmp-admin_addmenu-function">
                                    <el-button class="cmp-admin_addmenu-function-btn">Editar</el-button>
                                    <el-button class="cmp-admin_addmenu-function-btn">Remover</el-button>
                                </div>
                                <img src="../assets/img-pratos/pintado-na-telha.webp" alt="Imagem do Prato"
                                    class="cmp-admin_addmenu-item-image">
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
                    </el-collapse>
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
            <el-form-item label="Descricao">
                <el-input v-model="novoPrato.descricao" class="cmp-admin-form-input"></el-input>
            </el-form-item>
            <el-form-item label="Desconto">
                <el-input type="number" v-model="novoPrato.desconto" class="cmp-admin-form-input"></el-input>
            </el-form-item>
            <el-form-item label="Desconto">
                <el-input v-model="novoPrato.valor_desconto" class="cmp-admin-form-input"></el-input>
            </el-form-item>
            <el-select v-model="restaurantMealType" class="cmp-admin-form-select" required>
                <el-option
                    v-for="c in categorias"
                    :key="c.id"
                    :label="c.categoria" 
                    :value="c.id" 
                ></el-option>
            </el-select>
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

.cmp-admin-flex {
    display: grid;
    justify-content: space-between;
}
.cmp-admin-flex  .cmp-admin-form-input {
    width: 20rem;
    margin-right: 0.5rem;
}
.cmp-admin_box-card {
    width: 16rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12) !important;
}

.cmp-admin_box-card-item {
    min-height: 3rem;
}

.cmp-admin_box-card .el-card__body {
    height: auto !important;
    margin: 0;
    padding: 1.25rem 0;
    justify-content: space-between;
    align-items: stretch;
}

.cmp-admin_box-card-button {
    display: inline-flex;
    justify-content: space-between;
    position: relative;
    width: 12rem;
    border-top: 0.063rem solid var(--gray200);
    margin-top: 0.8rem;
}

.cmp-admin_box-card-button .el-button {
    color: var(--yellow500);
    font-size: 1.1rem;
}

.cmp-admin-slick-format {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 2rem;
}

.cmp-admin_addmenu-function {
    position: absolute;
    z-index: 999;
    top: 0.313rem;
}

.cmp-admin_addmenu-item-ingredients {
    border-top: 0.063rem solid var(--gray200);
    text-align: left;
    margin-top: 0.2rem;
    padding: .5rem 0 0;
}

.cmp-admin_addmenu-item-formattext {
    font-size: 0.875rem;
    padding: 1rem;
    text-align: center;
}

.cmp-admin_addmenu-function-btn {
    background-color: rgba(255, 254, 212, 0.409);
    color: var(--black100);
    border: 0.063rem solid rgba(255, 254, 212, 0.409);
}

.cmp-admin_addmenu-function-btn:hover {
    background-color: rgba(255, 251, 5, 0.409);
    color: var(--black100);
    border: 0.063rem solid rgba(255, 251, 5, 0.409);
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
    border-top: 0.063rem solid var(--gray200);
}

.cmp-admin_addmenu-title {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
    color: var(--yellow500);
}

.cmp-admin-form-file .el-input__inner {
    padding: 1rem 0;
    height: 4rem;
}

.cmp-admin_addmenu-add {
    padding: 4rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cmp-admin_addmenu-add span {
    font-size: 0.875rem;
}

.cmp-admin_addmenu-add .el-button {
    border-radius: 0.5rem;
    background-color: var(--yellow500);
    border-color: var(--yellow500);
    padding: 1rem 1.5rem;
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

.cmp-admin .el-form-item__label {
    font-weight: bold;
}

.cmp-admin .content {
    text-align: center;
    padding: 1.25rem;
    width: 100%;
}

.cmp-modaldialog--adddishes {
    border-radius: 0.5rem !important;
}

.cmp-modaldialog--adddishes .el-dialog {
    border-radius: 0.5rem !important;
    display: flex;
    flex-direction: column;
}

.cmp-modaldialog--adddishes .el-dialog__header {
    display: flex;
    height: 3.625rem;
    padding: 0.5rem 1.5rem;
    margin-right: 0;
    align-items: center;
    background-color: var(--yellow500);
}

.cmp-modaldialog--adddishes .el-dialog__title {
    font-size: 1rem;
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
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--gray400);
}

.cmp-modaldialog--adddishes .el-form-item {
    display: grid;
    margin-bottom: 0.5rem !important;
}

.cmp-modaldialog--adddishes .el-dialog__body {
    padding: 1rem 1.5rem !important;
}

.cmp-modaldialog--adddishes .el-input__inner:focus,
.cmp-modaldialog--adddishes .el-input__wrapper:focus {
    border-color: var(--yellow100);
}

.cmp-modaldialog--adddishes .el-input__inner:active,
.cmp-modaldialog--adddishes .el-input__wrapper:active {
    border-color: var(--yellow100);
}

.cmp-modaldialog--adddishes .el-input__wrapper:hover {
    box-shadow: 0 0 0 0.063rem var(--yellow100) inset;
}

.cmp-modaldialog-btnsalve {
    border-radius: 0.5rem;
    background-color: var(--yellow500);
    border-color: var(--yellow500);
    padding: 0.5rem 1rem;
    align-items: center;
    color: var(--white100);
}

.cmp-modaldialog-btncancel {
    border-radius: 0.5rem;
    background-color: var(--white100);
    border-color: var(--yellow500);
    padding: 0.5rem 1rem;
    align-items: center;
    color: var(--yellow500);
}

.cmp-modaldialog-btncancel:hover,
.cmp-modaldialog-btnsalve:hover {
    background-color: var(--gray300);
    border-color: var(--white100);
    color: var(--white100);
}

.cmp-modaldialog-footer {
    display: flex;
    justify-content: flex-end;
}

.cmp-admin_containerbanner-title {
    width: -moz-available;
    width: -webkit-fill-available;
    position: absolute;
    top: 0;
    left: 18.75rem;
    padding: 0.625rem;
    text-align: center;
    color: var(--yellow500);
    border-bottom: 0.063rem solid var(--el-menu-border-color);
    background-color: var(--el-menu-bg-color);
    background-repeat: no-repeat;
    background-size: 100%;
    font-size: 1rem;
    font-weight: 700;
    z-index: 99;
    background-image: url(../assets/img-banner/imagebackground.png)
}

.cmp-admin_containerbanner-backgroundimage {
    position: absolute;
    top: 0;
    left: 18.75rem;
    color: var(--yellow500);
    border-bottom: 0.063rem solid var(--el-menu-border-color);
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

.cmp-admin-form-submit .el-button {
    background-color: var(--yellow500);
    border: 0.063rem solid var(--yellow500);
    color: var(--white100);
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

.cmp-admin-image-upload-descripition {
    font-size: 0.875rem;
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
    border: 0.063rem solid var(--yellow500);
    background-color: var(--white100);
    padding: .5rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

.cmp-admin-image-upload:hover {
    border: 0.063rem solid #f9f9f9;
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
    border: 0.063rem solid #ccc;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    margin: .5rem 0;
}

.cmp-admin-form-select {
    width: 100%;
    border: 0.063rem solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
}

.cmp-admin-form-checkbox-group {
    display: flex;
    gap: 1rem;
}

.cmp-admin-form-checkbox {
    font-size: 1rem;
}

.cmp-admin-form-textarea {
    width: 100%;
    border: 0.063rem solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
}

.cmp-admin-custom-upload-button {
    font-size: 0.875rem;
}

.cmp-admin-form-item {
    margin-bottom: .8rem;
}

.cmp-admin-restaurant-information {
    font-size: 0.875rem;
    text-align: start;
    padding-top: 1.875rem;
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
    width: 100%;
    text-align: center;
    padding: 1.25rem;
    font-size: 1.125rem;
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
    color: var(--yellow500);
}

.cmp-admin-restaurant-logo {
    width: 5rem;
    height: 5rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
}

.cmp-admin-restaurant-name {
    font-size: 1.125rem;
    color: #575656;
    font-weight: 600;
    font-variant-caps: all-small-caps;
}

.cmp-admin-user-container {
    display: flex;
}

.cmp-admin-user-info {
    display: flex;
    align-items: center;
    padding: 0.625rem 1.25rem;
    color: var(--white100);
    justify-content: center;
    flex-direction: column;
}

.cmp-admin .el-menu {
    height: 98%;
}

.cmp-admin .el-menu-item i {
    font-size: 1.125rem;
    margin-right: 0.625rem;
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
            restaurantPhone: '', 
            restaurantMealType: 'restaurantetradicional',
            restaurantAddress: {
                cep: '',
                street: '',
                city: '',
                streetNumber: '',
                district: '',
                state: '',
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
            categorias: []
        };
    },
    mounted() {
    this.fetchCategorias(); },
    methods: {
        fetchCategorias() {
        axios.get('http://api.eattog.jera.com.br/categorias')
            .then(response => {
            this.categorias = response.data;
            })
            .catch(error => {
            console.error(error);
            });
        },
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
                alert(this.restaurantImage)
                };
                reader.readAsDataURL(file);
            }
        },

        // uploadBanner(event) {
        //     const file = event.target.files[0];
        //     if (!file.type.startsWith('image/')) {
        //         alert('Por favor, selecione um arquivo de imagem.');
        //         return;
        //     }
        //     if (file) {
        //         const reader = new FileReader();
        //         reader.onload = (e) => {
        //             alert(this.restaurantBanner)

        //             this.restaurantBanner = event.target.files[0];
        //         };
        //         reader.readAsDataURL(file);
        //     }
        // },

        uploadBanner(event) {
            const file = event.target.files[0];
            if (!file.type.startsWith('image/')) {
                alert('Por favor, selecione um arquivo de imagem.');
                return;
            }
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    console.log(file); 
                    this.restaurantBanner = e.target.file;
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
                axios.post('http://api.eattog.jera.com.br/criar/restaurante',
                    {
                        "imagem": this.restaurantBanner,
                        "logo": this.restaurantBanner,
                        "banner": this.restaurantBanner,
                        "razao_social": this.restaurantName,
                        "cnpj": this.restaurantCNPJ,
                        "numero_telefone": this.restaurantPhone,
                        "cep": this.restaurantAddress.cep,
                        "rua": this.restaurantAddress.street,
                        "numero_endereco": this.restaurantAddress.streetNumber,
                        "bairro":  this.restaurantAddress.district,
                        "cidade": this.restaurantAddress.city,
                        "estado": this.restaurantAddress.state,
                        "avaliacao": 3.0,
                        "tipo_restaurante": this.restaurantMealType,
                        "distancia": '1km',
                        "tipo_retirada": this.restaurantTakeawayType[0],
                        "descricao": this.restaurantDescription,
                    }, {
                    headers: { 'Authorization': sessionStorage.getItem("token-admin") }
                })
                    .then(response => {
                        sessionStorage.setItem('restaurante-id', response.data.id);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                this.$message.error('CNPJ inválido');
            }
        },

        adicionarPrato() {
            this.showPratoModal = true;
        },

        adicionarNovoPrato() {
            this.showPratoModal = true;
            if (this.novoPrato.nome && this.novoPrato.valor && this.novoPrato.imagem) {
                const novoPrato = {
                    nome: this.novoPrato.nome,
                    valor: this.novoPrato.valor,
                    imagem: this.novoPrato.imagem,
                    ingredientes: this.novoPrato.ingredientes,
                    restaurante: sessionStorage.getItem('restaurante-id'), // restaurante: 1, 
                    descricao: this.novoPrato.descricao,
                    categoria_prato: this.novoPrato.categoria_prato,
                    desconto: this.novoPrato.desconto,
                    valor_desconto: this.novoPrato.valor_desconto,
                };

                axios.post('http://api.eattog.jera.com.br/criar/prato', novoPrato, {
                    headers: {
                        'Authorization': sessionStorage.getItem("token-admin")
                    }
                })
                .then(response => {
                    console.log('Prato criado com sucesso:', response.data);

                    this.novoPrato = {
                        nome: '',
                        valor: '',
                        imagem: '',
                        ingredientes: '',
                        time: '',
                        descricao: '',
                        categoria_prato: '',
                        desconto: '',
                        valor_desconto: "",
                    };
                    this.showPratoModal = false;
                })
                .catch(error => {
                    console.error('Erro ao criar o prato:', error);
                });


            }
        }
    },
};
</script>