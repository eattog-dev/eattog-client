<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { usePerfilStore } from '../store/perfil'

import axios from "axios";


const perfilStore = usePerfilStore();

const openedModal = computed(() => perfilStore.editProfileModal)
const perfil = computed(() => perfilStore.novoPerfil)

const formBind = ref({})

const submit = (form)  => {
  form.validate(async (valid) => {
    if (valid) {
      await axios
        .put(`http://api.eattog.jera.com.br/atualizar-usuario/`, {
          "nome": perfilStore.novoPerfil.nome,
          "numero_celular": perfilStore.novoPerfil.numero_celular,
        }, {
          headers: { 'Authorization': `Bearer ${sessionStorage.getItem("token")}` },
        }
        );
        
      alert(`perfil salvo com sucesso`)
      location.reload()
    } else {
      alert('erro ao atualizar!')
      return false
    }
  })
}

const nomeRules = {
  required: true,
  message: "Preencha um novo nome de endereco",
  trigger: "blur"
  /*
 validator: (rule, value, callback) => {
   if (value === perfilStore.perfil.nome )
   callback(new Error("Preencha um novo nome"));
   else
   callback()
 },
 trigger: "blur",
 */
}

const numeroCelularRules = {

  validator: (rule, value, callback) => {
    if (perfilStore.perfil.numero_celular == null)
      callback(new Error("Preencha um novo telefone"));
    else
      callback()
  },
  trigger: "blur"
  /* validator: (rule, value, callback) => {
     if (value === perfilStore.perfil.numero_celular )
     callback(new Error("Preencha um novo telefone"));
     else
     callback()
   },
   trigger: "blur",
   */
}


const handleClose = () => {
  perfilStore.statusEditProfileModal()
  return perfilStore.editedProfile()
}
</script>
<template>
  <el-dialog v-model="openedModal" @closed="handleClose()">
    <el-form ref="formBind" :model="perfil">
      <div class="edit-profile">
        <div class="details">
          <el-form-item prop="nome" :rules="nomeRules">
            <label for="nome">Nome</label>
            <input type="text" name="nome" v-model="perfil.nome">
          </el-form-item>
          <el-form-item prop="telefone" :rules="numeroCelularRules">
            <label for="telefone">Telefone</label>
            <input type="text" name="telefone" v-model="perfil.numero_celular" />
          </el-form-item>
          <!-- <el-form-item prop="email" :rules="emailRules">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="perfil.email" />
          </el-form-item> -->
        </div>
      </div>
      <div class="actions">
        <el-button class="salvar-cartao" @click="submit(formBind)">Salvar</el-button>

      </div>
    </el-form>
  </el-dialog>
</template>
<style scoped>
header {
  display: none !important;
}

.details input {
  width: 100%;
}

.edit-profile,
.details div {
  display: flex;
  flex-direction: column;
}

.profile {
  width: 30rem;
  margin: auto;
  text-align: center;
}

.personal-image {
  text-align: center;
}

.personal-image input[type="file"] {
  display: none;
}

.personal-figure {
  position: relative;
  /* width: 7.5rem;
  height: 7.5rem; */
}

.personal-avatar {
  cursor: pointer;
  /* width: 7.5rem;
  height: 7.5rem; */
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
  /* width: 3.125rem;
  height: 3.125rem; */
}

.edit-profile .details input {
  border: none;
  border-bottom: 1px solid var(--white300);
  padding: 0.5rem 0;
}

.details {
  padding: 1.5rem 0;
}

.details label {
  width: fit-content;
  color: var(--yellow500);
  font-weight: 700;
  font-size: 1rem;
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 600;
  text-transform: capitalize;
}

.salvar-cartao {
  background-color: var(--yellow500);
  color: var(--black100);
}

.cancelar-add-cartao {
  color: var(--white300);
  background-color: rgb(225, 18, 18);
}
</style>