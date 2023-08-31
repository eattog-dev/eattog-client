<script setup>

</script>

<template>
  <div id="navigation">
    <router-link to="/feed" class="navigator">
      <font-awesome-icon icon="fa-solid fa-house" />
      <span>Feed</span>
    </router-link>

    <router-link to="/alimentação" class="navigator">
      <font-awesome-icon icon="fa-solid fa-utensils" />
      <span>Alimentação</span>
    </router-link>

    <router-link to="/notificações" class="navigator">
      <font-awesome-icon icon="fa-solid fa-bell" />
      <span>Notificações</span>
    </router-link>

    <router-link to="/perfil" class="navigator">
      <font-awesome-icon icon="fa-solid fa-user" />
      <span>Perfil</span>
    </router-link>

  </div>
</template>

<style>
#navigation{display: none;}
@media (max-width: 768px) {
  #navigation {
    display: flex;
    justify-content: space-between;
    padding: 24px;
    background-color: #ffffff;
    border-radius: 20px 20px 0 0;
  }

  .navigator {
    color: #bea1d1;
    margin: 0 8px;
    display: grid;
    text-align: center;
    text-decoration: none;
  }

  .navigator svg {
    margin: auto;
  }

  .navigator:hover {
    color: #7625ab;
  }
}
@media (max-width: 375px){
  .navigator{font-size: 13.5px;}
}
</style>