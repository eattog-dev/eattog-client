<template>
  <div>
    <el-header v-if="isDesktop" class="nav desktop">
      <el-row type="flex" class=" none-margem">
        <el-col :span="9">
          <router-link id="logo-url" to="/">
            <span class="nav-name-logo">Eattog🟨</span>
            <!-- <img class="logo" :src="logo" :alt="alt" /> -->
          </router-link>
        </el-col>
        <el-col :span="3">
          <router-link to="/" :class="[$route.path === '/' ? 'nav-active' : '']">Inicio</router-link>
        </el-col>
        <el-col :span="3">
          <router-link to="/restaurants"
            :class="[$route.path === '/restaurants' ? 'nav-active' : '']">Restaurantes</router-link>
        </el-col>
        <el-col :span="3">
          <el-button class="location-input" @click="openModal">
            <span class="location-input__address"> {{ userCity ? userCity : 'Localização' }}</span>
            <i class="el-icon-caret-bottom location-input__icon-arrow"></i>
          </el-button>
        </el-col>
        <el-col :span="3">
         {{ userStore.getNome }}
        </el-col>
        <el-col :span="3">
          <el-menu default-active="2" class="el-menu-vertical-demo cmp-menu-car" @open="handleOpen" @close="handleClose"
            position="absolute">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Goods />
                </el-icon>
              </template>
              <el-menu-item-group title="Restaurante João">
                <el-menu-item index="1-1" class="cmp-menu-item">Sobá Pantaneiro <span
                    class="">R$22,00</span></el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Restaurante Maria">
                <el-menu-item index="1-1" class="cmp-menu-item">Pacu Assado <span class="">R$29,00</span></el-menu-item>
              </el-menu-item-group>
              <router-link to="/finalizepurchase" custom v-slot="{ navigate }">
                <el-button class="cmp-button-yellow" @click="navigate" role="link">Finalizar Pedido</el-button>
              </router-link>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>

    <el-header v-else class="nav nav-mobile">
      <el-button class="location-input" @click="openModal">
        <span class="location-input__address">{{ userCity ? userCity : 'Localização' }}</span>
        <i class="el-icon-caret-bottom location-input__icon-arrow"></i>
      </el-button>
    </el-header>

    <div v-if="modalOpen" class="custom-modal">
      <Modal @update-user-city="updateUserCity" />
    </div>
  </div>
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

import { useUserStore } from '../store/user-session';

const userStore = useUserStore();

onMounted(() => {
  userStore.loggedUser();
})

const nome = computed(() => userStore.userSession.nome )




const handleOpen = (key, keyPath) => {
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
  .nav-mobile{
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
  .location-input, .location-input:hover{
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

  .cmp-button-yellow:hover{
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

</style>
