<template>
  <Navbar />

  <section id="carrinho" style=" padding: 4rem 0;">
    <el-row>
      <el-col :span="20">
        <Title text="Meu carrinho"></Title>
      </el-col>
    </el-row>
    <div>
      <el-row :gutter="20">
        <div class="cmp-listagem-carrinho" v-for="(item, i) in carrinhoStore.carrinho" index="item.prato.id">
          <div class="cmp-item-carrinho" v-if="!carrinhoStore.carrinho.length == false">
            <img :src='item.prato.imagem' alt="Imagem prato">
            <div class="cmp-itens-carrinho">
              <p><strong>Item:</strong> {{ item.prato.nome }}</p>
              <p><strong>Tempo estimado:</strong> {{ item.prato.tempo_preparo }} min</p>
              <p><strong>Descrição:</strong> {{ item.prato.descricao }}</p>
              <p><strong>Valor total:</strong> R$ {{ item.prato.valor * item.quantidade }},00</p>
              <p><strong>Desconto:</strong> R$ {{ item.prato.valor_desconto }},00</p>
            </div>
          </div>
        </div>
      </el-row>
    </div>
    <div class="cmp-finalizar-compra" v-if="!carrinhoStore.carrinho.length == false">
      <el-button class="cmp-button-yellow" @click="carrinhoStore.finalizarCompra()" role="link">Efetuar compra</el-button>
      <el-button class="cmp-button-yellow" @click="goToRestaurantes" role="link">Voltar as compras</el-button>
    </div>
    <div class="cmp-zero-itens" v-else>
      <p>Você não possui itens no carrinho</p>
    </div>
  </section>
  <Footer />
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Title from '../components/Title.vue'
import { useRouter } from 'vue-router';
import { useCarrinhoStore } from '../store/carrinho';

const carrinhoStore = useCarrinhoStore();
carrinhoStore.listarCarrinho()

const router = useRouter()
const goToRestaurantes = () => router.push("/restaurants")
</script>
<style scoped>
#carrinho .el-row {
  justify-content: center;
  width: 100%;
}

.cmp-listagem-carrinho {
  border-bottom: 1px solid #EEEEEE;
  padding: 10px;
  background-color: var(--white100);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--white300);
  color: var(--gray800);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  width: 480px;
  margin-right: 15px;
}

.cmp-listagem-carrinho:hover {
  transform: scale(1.02)
}

.cmp-listagem-carrinho .cmp-itens-carrinho {
  margin-left: 10px;
}

.cmp-listagem-carrinho .cmp-itens-carrinho p strong,
.cmp-listagem-carrinho .cmp-info-preco p strong {
  color: var(--orange100);
  font-weight: 500;
}

.cmp-zero-itens {
  background-color: #FEF0F0;
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
}

.cmp-item-carrinho {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cmp-item-carrinho img {
  width: 205px;
  height: 120px;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
}

.cmp-finalizar-compra {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.cmp-finalizar-compra .cmp-button-yellow {
  border: 1px solid var(--white100);
  background-color: var(--yellow100);
  color: var(--white100);
  font-weight: bolder;
  width: -moz-available;
}

.cmp-finalizar-compra .cmp-button-yellow:hover {
  border: 1px solid var(--yellow100);
  background-color: var(--orange100);
  color: var(--white100);
}

.cmp-zero-itens p {
  color: red;
  padding: 5px 0;
  border-radius: 5px;
  font-weight: 500;
}
</style>