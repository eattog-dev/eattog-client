<template>
  <Navbar />
  <el-row justify="center" style="padding: 1rem 0;">
    <el-col :span="20">
      <div class="sair" @click="logout" v-if="isLogged">
        <el-icon>
          <Connection />
        </el-icon>
        <span @click="logout">Sair</span>
      </div>
      <div class="details">
        <Title text="Meu perfil"></Title>
        <div>
          <label for="telefone">Nome</label>
          <span name="telefone">{{ perfil.nome }}</span>
        </div>
        <div>
          <label for="telefone">Telefone</label>
          <span name="telefone">{{ perfil.numero_celular }}</span>
        </div>
        <div>
          <label for="email">Email</label>
          <span name="email">{{ perfil.email }}</span>
        </div>
        <el-button class="editar" @click="perfilStore.statusEditProfileModal()">editar perfil</el-button>
        <EditProfile v-show="perfilStore.editProfileModal" />
      </div>

      <EnderecoForm />
      <!-- <HistoricoPedido/> -->
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import Title from '../components/Title.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import EnderecoForm from '../components/FormEndereco.vue'
import EditProfile from '../components/EditProfile.vue'
import { usePerfilStore } from '../store/perfil'


const perfilStore = usePerfilStore();

const perfil = computed(() => perfilStore.perfil)
const perfilFla = computed(() => perfilStore.novoPerfil)

let clickedAddCard = ref(false);

const cardStatus = () => {
  clickedAddCard.value = !clickedAddCard.value
}

const addCartao = () => {
  alert("cartao salvo com sucesso")
}

onMounted(() => perfilStore.getEditedProfile)
</script>
  
<style scoped>
h1 {
  color: var(--black100);
  font-weight: bold;
}


.details {
  padding-bottom: 3rem
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

.editar {
  background-color: var(--yellow500);
  color: var(--black100);
  font-weight: 600;
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 4rem;
}

.demo-collapse {
  padding-top: 3rem;
  padding-bottom: 1rem;
}

@media (max-width: 1024px) {
  .editar {
    margin-right: 2.5rem;
  }
}

@media (max-width: 768px) {
  .editar {
    margin-right: 1rem;
  }
}
</style>