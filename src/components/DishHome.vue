<script setup>
const props = defineProps({
  dish: {
    id: Number,
    image: String,
    nome: String,
    ingredientes: String,
    time: Number,
    prato_categoria: String,
    price: Number,
    desconto: Boolean,
    valor_desconto: Number
  }
});

const emits = defineEmits('pratoClicado');
const handlePratoClicado = () => {
  emits('pratoClicado', props.dish)
}
</script>

<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="6" :span="8">
    <div class="cmp-card-config">
      <div class="cmp-card-prato">
        <img :src="dish.imagem" class="image">
        <span class="tag-aliment" v-if="dish.prato_categoria.categoria == null">celta</span>
        <span class="tag-aliment" v-else>{{ dish.prato_categoria.categoria }}</span>
        <div style="padding: 14px; text-align: center;">
          <span>{{ dish.nome }}</span>
          <div class="dish-price">
            <span class="dish-price__discount">
              R$ {{ dish.valor }}
              <span v-if=dish.desconto class="dish-price__original">R$ {{ dish.valor_desconto }}</span>
            </span>
          </div>
          <div class="cmp-botao-adicionar">
            <el-button type="text" class="button" @click="handlePratoClicado()">Adicionar</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<style scoped>
.cmp-card-prato {
  height: 290px;
  margin-bottom: 30px;
  text-align: center;
  background-color: var(--white100);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--white300);
  color: var(--gray800);
  text-decoration: none !important;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  position: relative;
}

.cmp-card-config {
  height: 100%;
}

.cmp-card-prato .tag-aliment {
  position: absolute;
  position: absolute;
  right: 117px;
  bottom: 92px;
  z-index: 9999999;
  background-color: var(--yellow100);
  padding: 5px;
  border-radius: 5px;
  color: var(--white100);
  font-weight: 600;
}

.cmp-card-prato .cmp-botao-adicionar .button {
  color: var(--yellow100);
}

.cmp-card-prato .cmp-botao-adicionar .button:hover {
  color: var(--yellow100);
}

.cmp-card-prato:hover {
  transform: scale(1.02);

}

.cmp-card-prato .image {
  width: 100%;
  height: 180px;
  border-radius: 5px 5px 0px 0px;
}
</style>
