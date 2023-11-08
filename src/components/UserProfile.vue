<template>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu active-text-color="#ffd04b" background-color="#ffec41" class="el-menu-vertical-demo" default-active="2"
          text-color="#fff" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span class="title-menu">Perfil</span>
            </template>
            <el-menu-item index="1-3" @click="navigateToHistoric">Histórico de compras</el-menu-item>
            <el-dialog v-model="isHistoricModalVisible" title="Histórico de Compras" width="50%">
              <el-scrollbar style="height: 300px;">
                <el-menu>
                  <el-menu-item v-for="item in historicItems" :key="item.id">{{ item.nome }}</el-menu-item>
                </el-menu>
              </el-scrollbar>
            </el-dialog>
          </el-sub-menu>
        </el-menu>
        <el-menu active-text-color="#ffd04b" background-color="#ffec41" class="el-menu-vertical-demo" default-active="2"
          text-color="#fff" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span class="title-menu">Meus cartões</span>
            </template>
            <el-menu-item index="1-1">Ver cartao</el-menu-item>
          </el-sub-menu>
        </el-menu>
        <el-menu active-text-color="#ffd04b" background-color="#ffec41" class="el-menu-vertical-demo" default-active="2"
          text-color="#fff" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span class="title-menu">Meus grupos e eventos</span>
            </template>
            <el-menu-item index="1-1">Grupos</el-menu-item>
            <el-menu-item index="1-2">Eventos</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
    <div class="common-layout">
      <el-container>
        <h1 class="cmp-states-order"></h1>
      </el-container>
      <el-card class="user-card" shadow="hover">
        <el-main>
          <div class="personal-image">
            <label class="label">
              <input type="file" ref="fileInput" @change="showImage" />
              <figure class="personal-figure">
                <img :src="imageUrl" class="personal-avatar" id="avatarImage">
              </figure>
            </label>
          </div>
          <div class="info-user">
            <h2 class="name" id="name"> Username</h2>
            <h3 class="cargo" id="cargo"> Cargo</h3>
          </div>
          <div class="details-user">
            <h4 class="profile-user">Telefone</h4>
            <span class="phone" id="phone">Carregando...</span>
            <h4 class="profile-user">Email</h4>
            <span class="email" id="email">Carregando...</span>
            <h4 class="profile-user">Privacidade de transações</h4>
            <span class="privacy" id="privacy">Carregando...</span>
          </div>
        </el-main>
      </el-card>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  const imageUrl = ref('../assets/avatar/avatare.png');
  const isHistoricModalVisible = ref(false); 
  async function navigateToHistoric() {
    try {
      const response = await fetch('/historico-de-compras');
      if (!response.ok) {
        throw new Error('Erro ao buscar histórico de compras');
      }
      const historicData = await response.json();
      historicItems.value = historicData; 
      isHistoricModalVisible.value = true; 
    } catch (error) {
      console.error(error);
    }
  }
  const historicItems = ref([]);
  
  function showImage(event) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target.result === 'string') {
          imageUrl.value = e.target.result;
        }
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  async function buscarDadosDoPerfil() {
    try {
      const response = await fetch('/perfil');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do perfil do usuário');
      }
      const userData = await response.json();
      document.getElementById("phone").textContent = userData.phone;
      document.getElementById("email").textContent = userData.email;
      document.getElementById("privacy").textContent = userData.privacy;
    } catch (error) {
      console.error(error);
    }
  }
  buscarDadosDoPerfil();
    </script>
  
  <style>
  .el-row,
  .el-col {
    text-align: unset !important;
    justify-content: center;
  }  
  .el-container {
    display: flex;
    font-weight: bold;
    justify-content: center;
  }  
  .title-profile {
    color: #ffe922;
    display: block !important;
    font-weight: bold;
  }  
  .global-actions {
    padding: 0%;
  }  
  .el-card__body {
    padding: var(--el-card-padding);
    margin-top: 0.625rem;
    height: 21.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
  .personal-image {
    text-align: center;  
  }  
  .personal-image input[type="file"] {
    display: none;  
  }  
  .personal-figure {
    position: relative;
    width: 7.5rem;
    height: 7.5rem;  
  }  
  .personal-avatar {
    display: block;
    cursor: pointer;
    width: 7.5rem;
    height: 7.5rem;
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
    width: 3.125rem;
    height: 3.125rem;
  }  
  .el-main {
    display: grid;
    justify-content: center;
  }  
  .profile-user {
    font-weight: bold;
    color: #ffec41;
  }  
  .info-user {
    display: grid;
  }  
  .title-menu {
    font-size: 0.938rem;
  }
  </style>