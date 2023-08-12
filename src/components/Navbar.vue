 <template>
  <div>
    <el-header class="nav">
      <router-link id="logo-url" to="/">
        <span class="nav-name-logo">Eattog</span>
        <img class="logo" :src="logo" :alt="alt" />
      </router-link>
      <router-link to="/" class="nav-active">Inicio</router-link>
      <router-link to="/Restaurantes">Restaurantes</router-link>
      <el-button class="location-input" @click="openModal">
        <span class="location-input__address">Bonito - MS</span>
        <i class="el-icon-arrow-down location-input__icon-arrow"></i>
      </el-button>
    </el-header>
    <div v-if="modalOpen" class="custom-modal">
      <Modal />
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Modal from './Modal.vue';

    const logo = ref('/assets/quadrado.png');
    const alt = ref('Eattog');
    const modalOpen = ref(false);

    const openModal = () => {
        modalOpen.value = true;
    };

    const closeModal = () => {
        modalOpen.value = false;
    };
</script>

<style scoped>
  .nav {
    display: flex;
    position: sticky;
    flex-direction: row;
    align-items: center;
    grid-column-gap: 24px;
    -moz-column-gap: 24px;
    column-gap: 24px;
    width: 100vw;
    height: 80px;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 #dcdcdc;
    top: 0;
    z-index: 9997;
    padding: 20px 32px;
  }

  .nav-name-logo {
    font-weight: 600;
  }

  .nav #logo-url {
    margin: auto;
    margin-left: 0;
  }

  .logo {
    width: 10px;
    height: 10px;
    position: relative;
    bottom: -8px;
  }

  .nav-active {
    border-bottom: 1px solid #ffe500;
  }
  .location-input {
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
    color: #ffe500;
    font-weight: 600;
  }

  .custom-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
