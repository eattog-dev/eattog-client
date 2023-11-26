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
            <el-button class="cmp-modal-btn-address" @click="getUserLocation">Usar minha localização</el-button>
            <div class="" v-if="userCity">
                <el-button class="cmp-modal-btn-close" @click="updateUserCityAndCloseModal">Finalizar</el-button>
            </div>
        </div>

        <div class="cmp-modal-address-login">
            <span class="cmp-modal-address-login__description">
                Possui um endereço registrado? Aproveite para fazer o login e escolher seu endereço salvo, ou cadastre-se para salvar seu endereço.
            </span>
            <RouterLink to="/login" class="cmp-modal-btn-login">Login ou Cadastrar</RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, inject, onMounted, toRefs } from 'vue';
import { RouterLink } from 'vue-router';

    const { userCity, modalOpen } = toRefs(inject('navbarState'));
    const loadingLocation = ref(false);
    const updateUserCityAndCloseModal = () => {
        modalOpen.value = false;
    };

    const customModal = computed(() => ({
        display: modalOpen.value ? 'block' : 'none'
    }));
    
    const getUserLocation = () => {
        loadingLocation.value = true;

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async position => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDBzZgyhRCL1b_SGJpykfsAhVasXjdb6PU`
                    );
                    const data = await response.json();
                    console.log(response)
                    if (data.status === 'OK') {
                    const cityResult = data.results.find(result =>
                        result.types.includes('locality') ||
                        result.types.includes('administrative_area_level_1')
                    );

                    if (cityResult) {
                        const addressComponents = cityResult.address_components;
                        console.log(addressComponents)
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
</script> 

<style scoped>
    .cmp-modal-content {
        background-color: var(--white100);
        padding: 1.25rem;
        border-radius: 0.625rem;
        text-align: center;
        box-shadow: 0 0.125rem 0.313rem rgba(0, 0, 0, 0.3);
        z-index: 9999;
        position: absolute;
    }
    .cmp-modal-title {
        margin-top: 0;
    }
    .cmp-modal-input {
        width: 100%;
        margin-top: 0.625rem;
        border: 0.063rem solid var(--gray100);
        border-radius: 0.313rem;
        color: var(--gray400);
        height: 2.5rem;
    }
    .cmp-modal-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cmp-modal-btn-address,
    .cmp-modal-btn-login {
        background-color: var(--orange100);
        color: var(--white100);
        padding: 0.625rem 1.25rem;
        border: none;
        border-radius: 0.313rem;
        cursor: pointer;
        margin-top: 0.625rem;
    }
    .cmp-modal-btn-close {
        color: var(--orange100);
        padding: 0.625rem 1.25rem;
        border: 0.063rem solid var(--orange100);
        border-radius: 0.313rem;
        cursor: pointer;
        margin-top: 0.625rem;
        margin-left: 2.5rem;
    }
    .cmp-modal-btn-login {
        color: var(--orange100);
        background-color: transparent;
        margin: 0;
    }
    .cmp-modal-address-login {
        margin-top: 1.25rem;
        font-size: 0.75rem;
        color: var(--gray400);
        display: grid;
    }
</style>