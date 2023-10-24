<template>
  <el-row class="animate__animated animate__fadeInDown">
    <el-col :span="12">
      <el-card shadow="always">
        <h1 class="title-state">Pedido enviado!</h1>
        <h4 class="subtitle-state"> Seu pedido já foi enviado e você pode acompanhar o estado do pedido já </h4>
        <img class="imagem-state"
          src="https://img.freepik.com/free-vector/take-away-concept-illustration_114360-2982.jpg?w=996&t=st=1694569200~exp=1694569800~hmac=eb80d6945500e79a70b1e4a1639d1bf27d7ef5d26d22c67f56547ac7eb342143"
          alt="sent-order">
      </el-card>
      <el-col>
        <el-link class="botao-default">Acompanhar pedido</el-link>
      </el-col>
    </el-col>
  </el-row>
</template>
  
<style>
.imagem-state {
  margin-top: 30px;
  border-radius: 10%;
  max-width: 300px;
  height: auto;
  max-height: 350px;
}

.el-card__body {
  padding: var(--el-card-padding);
  margin-top: 10px;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.el-row {
  height: 50%;
  justify-content: center;
}

.title-state {
  font-weight: bold;
  color: var(--yellow200);
  margin-bottom: 15px;
}

.subtitle-state {
  color: rgba(109, 109, 117, 0.575);
}

.butao-state {
  border-top: 1px dashed #dcdcdc;
  margin-top: 50px;

}

.el-link {
  --el-link-hover-text-color: transparent;
}

.el-progress-circle__track {
  color: #E6A23C;
  background-color: aqua;
}

.botao-default {
  background-color: #FFC048;
  padding: 5px 10px;
  color: var(--white100);
  border-radius: 7px;
}

.botao-default:hover {
  color: var(--white100);
}
</style>