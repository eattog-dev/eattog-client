<script setup>
import { ref, computed } from 'vue';
import { usePerfilStore } from '../store/perfil'

const perfilStore = usePerfilStore();

const openedModal = computed(() => perfilStore.editProfileModal)

</script>
<template>
    <el-dialog v-model="openedModal">
        <form>
            <div class="edit-profile">
                <div class="profile">
                    <div class="personal-image">
                        <label class="label">
                            <input type="file" ref="fileInput" @change="showImage" />
                            <img src="../assets/img-login/monkey.svg" class="personal-avatar">
                        </label>
                    </div>
                </div>
                <div class="details">
                    <div>
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" placeholder="Jao da Silva">
                    </div>
                    <div>
                        <label for="telefone">Telefone</label>
                        <input type="text" name="telefone" placeholder="(11) 11111111" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="jaodasilva@gmail.com" />
                    </div>
                </div>
            </div>
            <div class="actions">
                <el-button class="salvar-cartao" @click="addCartao()">Salvar</el-button>
                <el-button class="cancelar-add-cartao" @click="perfilStore.statusEditProfileModal()">Cancelar</el-button>
            </div>
        </form>
    </el-dialog>
</template>
<style scoped>
header{ display: none!important;}
.edit-profile, .details div{
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

.details{
    padding: 1.5rem 0;
}

.details label {
  width: fit-content;
  color: var(--yellow500);
  font-weight: 700;
  font-size: 1rem;
}

.actions{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 600;
  text-transform: capitalize;
}
.salvar-cartao{
    background-color: var(--yellow500);
  color: var(--black100);
}
.cancelar-add-cartao{
    color: var(--white300);
    background-color: rgb(225, 18, 18);
}
</style>