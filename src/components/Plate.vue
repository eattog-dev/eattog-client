<template>
  <el-row>
    <el-col
      :span="8"
      v-for="(o, index) in 1"
      :key="o"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/img-pratos/pacu-recheado.jpg" class="image" />
        <div style="padding: 14px">
          <p
            class="dish-content_container dish-contentdetails"
            data-test-id="dish-content_details"
          >
            Marmitex: Pacu recheado, com farofa
          </p>
          <div class="dish-info">
            <span class="dish-info-serves__title">Serve 1 pessoa</span>
          </div>
          <div class="dish-price">
            <span
              class="dish-price__discount"
              data-test-id="dish-content-discount-price"
            >
              R$ 45,00 <span class="dish-price__original">R$ 57,00</span>
            </span>
          </div>
          <div class="dish-restaurant" href="">
            <!--colocar o endereço-->
            <div class="dish-restaurante__header">
              <div class="dish-restaurant__descripition">
                <div id="app">
                  <i class="el-icon-s-shop"></i>
                </div>
                <span class="dish-restaurant__title">Pacuzinho da Ceara</span>
                <div class="dish-restaurant__divisor"></div>
              </div>
            </div>
          </div>
          <div class="bottom clearfix">
            <el-button type="text" class="button">Adicionar</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<!--
  <script>
  export default {
    data() {
      return {
          Image: [
              "../assets/img-pratos/pacu-recheado.jpg",
              "../assets/img-pratos/lanche.jpg",
              "../assets/img-pratos/feijao-tropeiro.jpg",
              "../assets/img-pratos/moqueca-pantaneira.jpg",
              "../assets/img-pratos/pintado-na-telha.jpg",
              "../assets/img-pratos/soba-pantaneiro.jpg",
              "../assets/img-pratos/salada-pantaneira.jpg"
          ]
      }
    }
  }
  </script>
  -->
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.dish-price__discount {
  color: #50a773;
  margin-bottom: 10px;
}
.dish-price__original {
  position: relative;
  font-size: 0.75rem;
  color: #dbdad9;
  text-decoration: line-through;
  margin-left: 6px;
}
.dish-restaurant__divisor {
  border-top: 2px dashed #f2f2f2;
  margin: 8px 0;
}
</style>
