<template>
    <div class="modal-content">
    <h3 class="modal-title">Onde você quer receber seu pedido?</h3>
    <input placeholder="Endereço atual" class="modal-input" v-model="userCity"  @click="getUserLocation">
    <button class="modal-btn-address" @click="getUserLocation">Usar minha localização</button>
    <div class="modal-address-login">
        <span class="modal-address-login__description">Possui um endereço registrado? Aproveite para fazer o login e escolher seu endereço salvo, ou cadastre-se para salvar seu endereço.</span>
        <button type="button" class="modal-btn-login">Login ou Cadastrar</button>
    </div>
    
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    onMounted(() => {
        getUserLocation();
    });

    const userCity = ref('');
    const getUserLocation = () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBd6WFE2-Z1e6ESVGbILra9yYXfIAKY3KU`);
            const data = await response.json();

            if (data.status === 'OK') {
            const cityResult = data.results.find(result =>
                result.types.includes('locality') || result.types.includes('administrative_area_level_1')
            );

            if (cityResult) {
                const addressComponents = cityResult.address_components;
                const street = addressComponents.find(comp => comp.types.includes('route'));
                const neighborhood = addressComponents.find(comp => comp.types.includes('neighborhood'));
                
                console.log("Rua:", street ? street.long_name : 'Não encontrado');
                console.log("Bairro:", neighborhood ? neighborhood.long_name : 'Não encontrado');

                const city = addressComponents.find(comp => comp.types.includes('locality'));
                const state = addressComponents.find(comp => comp.types.includes('administrative_area_level_1'));
                userCity.value = `${city.long_name} - ${state.short_name}`;
            } else {
                userCity.value = 'Cidade não encontrada';
            }
            } else {
            console.error('Erro ao buscar cidade:', data.error_message);
            }
        } catch (error) {
            console.error(error);
        }
        });
    } else {
        console.log('Geolocalização não suportada pelo navegador.');
    }
};
</script>
<style>
    .custom-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        width: 80%;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    .modal-close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .modal-title {
        margin-top: 0;
    }

    .modal-input {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: gray;
    }

    .modal-btn-address,
    .modal-btn-login {
        background-color: #f39c12;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }

    .modal-btn-login {
        color: #f39c12; 
        background-color: transparent;
        margin: 0;
    }

    .modal-address-login {
        margin-top: 20px;
        font-size: 12px;
        color: gray;
        display: grid;
    }

    .custom-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
    }
</style>