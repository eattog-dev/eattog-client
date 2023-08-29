<template>
  <el-row>
    <el-col
      :span="8"
      v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" >
      
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/img-pratos/pacu-recheado.jpg" class="image" />
        <div style="padding: 14px">
          <p
            class="dish-content__container dish-content__details"
            data-test-id="dish-content__details"
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
              R$ 45,00
              <span class="dish-price__original">R$ 57,00</span>
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

<style>
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
