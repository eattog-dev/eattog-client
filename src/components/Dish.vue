<script setup>
const props = defineProps({
  dish: {
    id: Number,
    image: String,
    title: String,
    ingredients: String,
    time: Number,
    tag: String,
    price: Number,
    isSale: Boolean,
    sale_price: Number
  }
});
</script>
<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="6" :span="8">
    <router-link :to="{
        name: 'SingleDish',
        params: {
          id_dish: dish.id,
          title: dish.title
        },
       
      }">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="dish.image" class="image">
        <span class="tag-aliment">{{ dish.tag }}</span>
        <div style="padding: 14px; text-align: center;">
          <span>{{ dish.title }}</span>
          <div class="dish-price">
            <span class="dish-price__discount">
              R$ {{ dish.price.toFixed(2) }}
              <span v-if=dish.isSale class="dish-price__original">R$ {{ dish.sale_price.toFixed(2) }}</span>
            </span>
          </div>
          <div class="clearfix">
            <time class="time">{{ dish.time }} min</time>
            <el-button type="text" class="button">Adicionar</el-button>
          </div>
        </div>
      </el-card>
      </router-link>
  </el-col>
</template>

<style>
/*#list-dishes a{text-decoration: none;}

#list-dishes .time {
  font-size: 13px;
  color: #999;
}

#list-dishes .button {
  padding: 0;
  float: right;
}

#list-dishes .image {
  width: 100%;
  display: block;
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
}*/
</style>
