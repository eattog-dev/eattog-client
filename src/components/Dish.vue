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
console.log(props.dish)
</script>
<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="6" :span="8">
    <router-link :to="{
        name: 'SingleDish',
        params: {
          id_dish: dish.id,
          nome: dish.nome
        },
       
      }">
      <el-card :body-style="{ padding: '0px' }">
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
          <div class="clearfix">
            <!-- <time class="time">{{ dish.time }} min</time> -->
            <el-button type="text" class="button">Adicionar</el-button>
          </div>
        </div>
      </el-card>
      </router-link>
  </el-col>
</template>

<style>
#list-dishes a{text-decoration: none;}
#list-dishes .el-card {
   margin: 1rem 0;
   height: 300px;
  }
#list-dishes .time {
  font-size: 13px;
  color: #999;
}

#list-dishes .button {
  padding: 0;
  float: right;
}

#list-dishes .image{
  width: 100%;
  display: block;
  object-fit: cover;
    height: 200px
}

#list-dishes .tag-aliment {text-align: center;}

#list-dishes .clearfix {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


#list-dishes .dish-price__discount {
  color: #50a773;
  margin-bottom: 10px;
}

#list-dishes .dish-price__original {
  position: relative;
  font-size: 0.75rem;
  color: #dbdad9;
  text-decoration: line-through;
  margin-left: 6px;
}

#list-dishes .dish-restaurant__divisor {
  border-top: 2px dashed #f2f2f2;
  margin: 8px 0;
}
</style>
