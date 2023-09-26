<template>
  <div class="cmp-modal-content" v-if="modalOpen" :style="customModal">
    <h3 class="cmp-modal-title">Onde você quer receber seu pedido?</h3>
    <el-input
      placeholder="Endereço atual"
      v-model="userCity"
      class="cmp-modal-input"
      :suffix-icon="loadingLocation ? 'el-icon-loading' : ''"
      @click.native="getUserLocation"
    ></el-input>
    <div class="cmp-modal-btn">
      <el-button class="cmp-modal-btn-address" @click="getUserLocation">
        Usar minha localização
      </el-button>
      <div class="" v-if="userCity">
        <el-button class="cmp-modal-btn-close" @click="updateUserCityAndCloseModal">Finalizar</el-button>
      </div>
    </div>

    <div class="cmp-modal-address-login">
      <span class="cmp-modal-address-login__description">
        Possui um endereço registrado? Aproveite para fazer o login e escolher seu endereço salvo, ou cadastre-se para salvar seu endereço.
      </span>
      <el-button type="text" class="cmp-modal-btn-login">Login ou Cadastrar</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, toRefs } from 'vue';

const { userCity, modalOpen } = toRefs(inject('navbarState'));

const loadingLocation = ref(false);

const updateUserCityAndCloseModal = () => {
  modalOpen.value = false;
};

const getUserLocation = () => {
  loadingLocation.value = true;

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBd6WFE2-Z1e6ESVGbILra9yYXfIAKY3KU`
        );
        const data = await response.json();
        if (data.status === 'OK') {
          const cityResult = data.results.find(result =>
            result.types.includes('locality') ||
            result.types.includes('administrative_area_level_1')
          );

          if (cityResult) {
            const addressComponents = cityResult.address_components;
            const city = addressComponents.find(comp =>
              comp.types.includes('locality')
            );
            const state = addressComponents.find(comp =>
              comp.types.includes('administrative_area_level_1')
            );

            const cityName = city?.long_name || 'Cidade não encontrada';
            const stateName = state?.short_name || 'Estado não encontrado';
            userCity.value = `${cityName} - ${stateName}`;
          } else {
            userCity.value = 'Cidade não encontrada';
          }
        } else {
          console.error('Erro ao buscar cidade:', data.error_message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        loadingLocation.value = false;
      }
    });
  } else {
    console.log('Geolocalização não suportada pelo navegador.');
    loadingLocation.value = false;
  }
};
  
const customModal = computed(() => ({
  display: modalOpen.value ? 'block' : 'none'
}));
</script>

<style scoped>
.cmp-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  position: absolute;
}

.cmp-modal-title {
  margin-top: 0;
}

.cmp-modal-input {
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: gray;
  height: 40px;
}
.cmp-modal-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cmp-modal-btn-address,
.cmp-modal-btn-login {
  background-color: #f39c12;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.cmp-modal-btn-close {
  color: #f39c12;
  padding: 10px 20px;
  border: 1px solid #f39c12;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 40px;
}

.cmp-modal-btn-login {
  color: #f39c12;
  background-color: transparent;
  margin: 0;
}
.cmp-modal-address-login {
  margin-top: 20px;
  font-size: 12px;
  color: gray;
  display: grid;
}
</style>
