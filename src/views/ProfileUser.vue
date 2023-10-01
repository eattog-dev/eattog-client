<template>
    <div class="common-layout">
    <el-container>
      <h1 class="title-profile">Perfil</h1>
    </el-container>
    <el-main>
      <div class="personal-image">
        <label class="label">
          <input type="file" ref="fileInput" @change="showImage" />
          <figure class="personal-figure">
            <img :src="imageUrl" class="personal-avatar" alt="avatar" id="avatarImage">
            <figcaption class="personal-figcaption">
              <img src="../assets/Avatar/camera-white.png">
            </figcaption>
          </figure>
        </label>
      </div>
      <div class="details-user">
        <h4 class="profile-user">Telefone</h4>
        <span class="phone">tel user</span>
        <h4 class="profile-user">Email</h4>
        <span class="email">Email user</span>
        <h4 class="profile-user">Privacidade de transações</h4>
        <span class="privacy">Privacidade privada</span>
      </div>
    </el-main>

    <el-row class="tac">
      <el-col :span="16">
        <el-menu active-text-color="#ffd04b" background-color="#f5de186e" class="el-menu-vertical-demo"
          default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span class="title-menu">Menu</span>
            </template>
            <el-menu-item-group title="Perfil">
              <el-menu-item index="1-1">Meu cartões</el-menu-item>
              <el-menu-item index="1-2">Meus grupos</el-menu-item>
              <el-menu-item index="1-3">Historico de compras</el-menu-item>
              <el-menu-item index="1-4-1">Eventos</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const imageUrl = ref('../assets/avatar/avatare.png'); // Defina a imagem padrão

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
    color: #ffe600;
}

.global-actions {
    padding: 0%;
}

.personal-image {
    text-align: center;
}

.personal-image input[type="file"] {
    display: none;
}

.personal-figure {
    position: relative;
    width: 120px;
    height: 120px;
}

.personal-avatar {
    cursor: pointer;
    width: 120px;
    height: 120px;
    box-sizing: border-box;
    border-radius: 100%;
    border: 2px solid transparent;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out .3s;
}

.personal-avatar:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
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
    margin-top: 32.5px;
    width: 50px;
    height: 50px;
}

.el-main {
    display: flex;
    justify-content: center;

}

.profile-user {
    font-weight: bold;
    color: #ffe600;
}

.details-user {}

.title-menu {
    font-weight: 600;
}
</style>