<template>
  <header>
    <el-row>
      <el-col :span="20" class="header-desktop" v-if="isDesktop">
        <span class="nav-name-logo" @click="goToHome">Eattog🟨</span>

        <div class="rotas">
          <span @click="goToHome">Inicio</span>
          <span @click="goToRestaurantes">Restaurantes</span>
          <span @click="goToCategorias">Categorias</span>
          <span @click="goToSobreNos">Sobre Nós</span>
        </div>

        <div class="localizacao" @click="openModal">
          <el-icon style="font-size: 1.2rem; margin: auto;">
            <MapLocation />
          </el-icon>
          <span class="location-input__address"> {{ userCity ? userCity : 'Localização' }}</span>
        </div>
        <div class="perfil" @click="goToPerfil">
          <el-icon class="profile-icon" style="font-size: 1.5rem; margin: auto;">
            <User />
          </el-icon>
          <span>Perfil</span>
        </div>

        <el-menu default-active="2" class="el-menu-vertical-demo cmp-menu-car" @open="handleOpen" @close="handleClose"
          position="absolute">

          <el-sub-menu index="1" v-if="!carrinhoStore.carrinho.length == false">

            <el-menu-item v-for="(item, i) in carrinhoStore.carrinho" index="item.prato.id" class="cmp-menu-item">{{
              item.prato.nome }}
              <span class="">R${{ item.prato.valor * item.quantidade }}</span>
            </el-menu-item>
            <el-button class="cmp-button-yellow" @click="carrinhoStore.finalizarCompra()" role="link">Finalizar
              Pedido</el-button>
          </el-sub-menu>
          <el-sub-menu v-else>
            <h3>0 itens no carrinho</h3>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <!-- MOBILE -->
      <el-col :span="20" class="header-desktop" v-else>
        <span class="nav-name-logo" @click="goToHome">Eattog🟨</span>

        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          position="absolute" :collapse="isCollapse">
          <el-sub-menu index="1" v-if="!carrinhoStore.carrinho.length == false">


            <el-menu-item v-for="(item, i) in carrinhoStore.carrinho" index="item.prato.id" class="cmp-menu-item">{{
              item.prato.nome }}
              <span class="">R${{ item.prato.valor * item.quantidade }}</span>
            </el-menu-item>
            <el-button class="cmp-button-yellow" @click="carrinhoStore.finalizarCompra()" role="link">Finalizar
              Pedido</el-button>
          </el-sub-menu>
          <el-sub-menu v-else>
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>
            </template>
            <el-menu-item>

              <el-icon>
                <House />
              </el-icon>
              <span @click="goToHome">Inicio</span>
            </el-menu-item>

            <el-menu-item>
              <el-icon>
                <KnifeFork />
              </el-icon>
              <span @click="goToRestaurantes">Restaurantes</span>
            </el-menu-item>
            <el-menu-item>
              <el-icon>
                <Tickets />
              </el-icon>
              <span @click="goToCategorias">Categorias</span>
            </el-menu-item>
            <el-menu-item>
              <el-icon>
                <Opportunity />
              </el-icon>
              <span @click="goToSobreNos">Sobre Nós</span>
            </el-menu-item>
            <el-menu-item>
              <div class="localizacao" @click="openModal">
                <el-icon style="font-size: 1.2rem; margin: auto;">
                  <MapLocation />
                </el-icon>
                <span class="location-input__address"> {{ userCity ? userCity : 'Localização' }}</span>
              </div>
            </el-menu-item>
            <el-menu-item>
              <el-icon @click="goToPerfil" class="profile-icon" style="font-size: 2rem">
                <User />
              </el-icon>
              <span>Perfil</span>
            </el-menu-item>
            <el-menu-item>
              <el-icon>
                <Goods />
              </el-icon>
              <h3>0 itens no carrinho</h3>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
    <Modal v-if="modalOpen" @update-user-city="updateUserCity" />
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, provide, reactive, computed } from 'vue';
import Modal from './Modal.vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Goods,
} from '@element-plus/icons-vue';
//import logoImage from '@/assets/quadrado.png';

import { useRouter, useRoute } from 'vue-router';

const router = useRouter()

import { useCarrinhoStore } from '../store/carrinho';

const carrinhoStore = useCarrinhoStore();

const goToHome = () => router.push("/")
const goToRestaurantes = () => router.push("/restaurants")
const goToCategorias = () => router.push("/categorias")
const goToSobreNos = () => router.push("/sobre-nos")
const goToPerfil = () => router.push("/perfil")


const handleOpen = (key, keyPath) => {
  carrinhoStore.listarCarrinho()
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const logoImage = '../assets/quadrado.png';
const logo = ref(logoImage);
const alt = ref('Eattog');
const modalOpen = ref(false);

const state = reactive({
  userCity: ''
});

const isCollapse = ref(true)

provide('navbarState', { userCity: state.userCity, modalOpen });

const openModal = () => {
  modalOpen.value = true;
};

const isDesktop = ref(window.innerWidth >= 768);

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768;
};

const updateUserCity = (newUserCity) => {
  state.userCity = newUserCity;
  modalOpen.value = false;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>


<style scoped>
header {
  height: 6rem;
  border-bottom: 1px solid var(--gray200);
}


.el-row {
  height: 100%;
}

.header-desktop {
  color: var(--black100);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header-desktop .nav-name-logo {
  font-weight: 600;
  font-size: 2rem;
  cursor: pointer;
}

.header-desktop .rotas span {
  margin: 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
}

.el-menu {
  border-right: none !important;

}

.localizacao,
.perfil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}

.localizacao span,
.perfil span {
  font-weight: 500;
}


@media (max-width: 1024px) {
  .header-desktop .nav-name-logo {
    font-size: 1.5rem;
  }

  .header-desktop .rotas span {
    margin: 0 0.5em;
  }
}

@media (max-width: 992px) {
  .header-desktop .nav-name-logo {
    font-size: 1.3rem;
  }

  .header-desktop .rotas span,
  .localizacao span {
    font-size: 0.95rem
  }
}

@media (max-width: 767px) {
  .el-menu-item span {
    color: var(--black100);
    font-weight: 500;
  }

  .localizacao {
    flex-direction: row;
  }
}

/*h3 {
  color: var(--black100)
}

.nav {
  height: 80px;
  background-color: var(--white100);
  box-shadow: inset 0 -1px 0 var(--gray200);
  top: 0;
  z-index: 9997;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-mobile {
  display: flex;
  justify-content: center;
}

.cmp-menu-car .el-sub-menu__title:hover {
  background-color: var(--white100) !important;
}

.nav a {
  color: var(--black100);
  text-decoration: none;
}

.nav-name-logo {
  font-weight: 600;
}

.location-input {
  padding-top: 0;
}

.nav #logo-url {
  left: 120px;
  position: relative;
  display: flex;
}

.logo {
  width: 10px;
  height: 10px;
  position: relative;
  bottom: -8px;
}

.nav-active {
  border-bottom: 1px solid var(--yellow100);
}

.location-input,
.location-input:hover {
  background-color: transparent;
  border: none;
}

.location-input__icon-arrow {
  display: inline-block;
  font-size: 12px;
  top: 2px;
  position: relative;
  margin-left: 4px;
}

.location-input__address {
  font-size: 14px;
  color: var(--yellow100);
  font-weight: 600;
}

.custom-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999999;
}

.el-menu {
  position: absolute !important;
  border-right: none;
  top: 2px !important;
  right: 0;
  z-index: 9999 !important;
  text-align: left;
}

.el-sub-menu__title {
  display: flex;
  top: -15px;
  position: relative;
}

.el-sub-menu {
  margin: -16px 0;
}

.none-margem {
  margin: auto 0px;
}

.cmp-button-yellow {

  display: flex;
  justify-content: center;
  margin: 16px 48px;
  border: 1px solid var(--white100);
  background-color: var(--yellow100);
  color: var(--white100);
  font-weight: bolder;
  width: -moz-available;
}

.cmp-button-yellow:hover {
  margin: 16px 48px;
  border: 1px solid var(--yellow100);
  background-color: var(--white100);
  color: var(--yellow100);
}

.cmp-menu-item {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}

.el-sub-menu__title:hover {
  background-color: var(--white100) !important;
}

.cmp-menu-item:hover {
  background-color: var(--white100);
  color: var(--yellow100);
}

.cmp-menu-item span {
  margin-left: 5px;
  color: var(--yellow100);
  font-weight: 800;
}
*/
</style>
