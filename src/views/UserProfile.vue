<template>
  <Navbar />
  <el-row justify="center">
    <el-col :span="20">
      <div class="profile">
        <div class="personal-image">
          <label class="label">
            <input type="file" ref="fileInput" @change="showImage" />
            <img src="../assets/img-login/monkey.svg" class="personal-avatar">
          </label>
          <h1 class="nome">Jao da Silva</h1>
        </div>
      </div>
      <div class="details">
        <div>
          <label for="telefone">Telefone</label>
          <span name="telefone">(11) 11111111</span>
        </div>
        <div>
          <label for="email">Email</label>
          <span name="email">jaodasilva@gmail.com</span>
        </div>
      </div>
      <el-button class="editar" @click="perfilStore.statusEditProfileModal()">editar perfil</el-button>
      <EditProfile v-show="perfilStore.editProfileModal"/>

      <div class="demo-collapse menu">
        <el-collapse accordion>
          <el-collapse-item name="1">
            <template #title>
              <h3 class="titulo">Endereço</h3>
            </template>
            <div class="endereco">
              <el-button class="endereco-automatico">Preencha Automaticamente</el-button>
              <div>
                ESPAÇO DO FORMULÁRIO
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template #title>
              <h3 class="titulo">Cartoes</h3>
            </template>

            <div class="cartoes">
              <h4>Seus cartoes</h4>

              <div class="cartao">
                <span>final do cartao <span class="digitos-finais">5542</span></span>
                <img src="../assets/img-card/logovisa.png" alt="">
                <el-button>Remover</el-button>
              </div>

              <el-button class="add-cartao" v-if="!clickedAddCard" @click="cardStatus()">Adicionar novo cartao</el-button>
              <div class="card-form-actions" v-else>
                <el-button class="salvar-cartao" @click="addCartao()">Salvar</el-button>
                <el-button class="cancelar-add-cartao" @click="cardStatus()">Cancelar</el-button>
              </div>

              <FormAddCartao v-show="clickedAddCard" />
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template #title>
              <h3 class="titulo">Histórico de Pedidos</h3>
            </template>
            <div class="historico-pedidos">
              <h4>Seus últimos pedidos</h4>
              <div class="item-pedido">
                <img src="../assets/img-login/monkey.svg" alt="">
                <div class="info">
                  <h5>Masqueico cozido</h5>
                  <span class="descricao">3 UN. x R$ 38,00</span>
                  <span class="valorTotal">Total R$ 114,00</span>
                  <p class="endereco">
                    <span class="bold">Rua/Av:</span> Sobe Desce Nunca Aparece
                    <span class="bold">Bairro:</span> Aquele lá
                    <span class="bold">Cidade:</span> Gotham City
                    <span class="bold">Estado:</span> De Choque
                    <span class="bold">Complemento:</span> lalalalalalalalalalalalala
                  </p>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-col>
  </el-row>
  <Footer />
</template>
<script setup>
import { ref } from 'vue'

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import FormAddCartao from '../components/CardAdd.vue'
import EditProfile from '../components/EditProfile.vue'

import {usePerfilStore} from '../store/perfil'

const perfilStore = usePerfilStore();


let clickedAddCard = ref(false);

const cardStatus = () => {
  clickedAddCard.value = !clickedAddCard.value
}

const addCartao = () => {
  alert("cartao salvo com sucesso")
}
</script>
  
<style scoped>
.profile {
  width: 30rem;
  margin: auto;
  text-align: center;
  padding: 2rem 0;
}

.nome {
  color: var(--black100)
}

.personal-image {
  text-align: center;
}

.personal-image input[type="file"] {
  display: none;
}

.personal-figure {
  position: relative;
  /* width: 7.5rem;
  height: 7.5rem; */
}

.personal-avatar {
  cursor: pointer;
  /* width: 7.5rem;
  height: 7.5rem; */
  box-sizing: border-box;
  border-radius: 100%;
  z-index: 9999999999;
  border: 2px solid transparent;
  box-shadow: 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.2);
  transition: all ease-in-out .3s;
  object-fit: contain;
}

.personal-avatar:hover {
  box-shadow: 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.5);
}

.personal-figcaption {
  cursor: pointer;
  position: absolute;
  top: 0px;
  width: inherit;
  height: inherit;
  border-radius: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out .3s;
}

.personal-figcaption:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, .5);
}

.personal-figcaption>img {
  margin-top: 2.031rem;
  /* width: 3.125rem;
  height: 3.125rem; */
}

.details,
.details div {
  display: flex;
  flex-direction: column;
}

.details div {
  margin: 0.5rem 0;
}


.details span {
  color: var(--black100);
  width: fit-content;
  margin: 0;
  font-size: 0.85rem;
}

.details label {
  width: fit-content;
  color: var(--yellow500);
  font-weight: 700;
  font-size: 1rem;
}

.editar,
.menu .cartoes .add-cartao {
  background-color: var(--yellow500);
  color: var(--black100);
  font-weight: 600;
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 4rem;
}

.menu .card-form-actions {
  justify-content: end;
  display: flex;
  margin-right: 4rem;
}

.menu .card-form-actions button {

  background-color: var(--yellow500);
  color: var(--black100);
  font-weight: 600;
  text-transform: capitalize;
}

.demo-collapse {
  padding-top: 3rem;
  padding-bottom: 1rem;
}

.menu .titulo {
  font-size: 1rem;
  font-weight: 700;
}

.menu .endereco button {
  background-color: var(--yellow500);
  font-weight: 600;
  text-transform: capitalize;
  color: var(--black100);
}

.menu .cartoes h4 {
  font-size: 1.1rem;
}

.menu .cartoes .cartao {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu .cartoes .cartao span {
  font-weight: 500;
}

.menu .cartoes .cartao .digitos-finais {
  font-weight: 900;
  font-size: 1rem;
}

.menu .historico-pedidos h4 {
  font-size: 1.1rem;
}

.menu .historico-pedidos .item-pedido {
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
}

.menu .historico-pedidos .item-pedido img {
  width: 6rem;
}

.menu .historico-pedidos .item-pedido .info {
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
}

.menu .historico-pedidos .item-pedido .info h5 {
  font-size: 1rem;
  font-weight: 600;
}

.menu .historico-pedidos .item-pedido .info span {
  font-size: 0.8rem;
  font-weight: 700;
}

.bold {
  font-weight: bold;
}</style>