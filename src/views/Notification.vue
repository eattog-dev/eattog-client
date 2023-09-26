<template>
    <section id="notification">
      <el-tabs :tab-position="tabPosition" style="height: 70vh;" class="demo-tabs">
        <el-tab-pane label="pendente">
           Esperando que a loja confirme seu pedido
        </el-tab-pane>
        <el-tab-pane label="confirmado">
           Pedido confirmado
        </el-tab-pane>
        <el-tab-pane label="processando">
           Pedido sendo Preparado
        </el-tab-pane>
        <el-tab-pane label="aguardando">
           Motorista está a caminho do estabelecimento
        </el-tab-pane>
        <el-tab-pane label="transporte">
           Seu pedido está a caminho
        </el-tab-pane>
        <el-tab-pane label="concluido">
           Pedido Entregue
        </el-tab-pane>
      </el-tabs>
    </section>
  </template>
    
  <script setup>
  import { ref } from 'vue';
  
  const tabPosition = ref('top');
  </script>
    
  <style setup>
  #notification {
    --el-color-primary: #ffe500;
  }
  
  #notification .demo-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  #notification .el-tabs__item {
    padding: 0 10px !important;
    color: transparent;
  }
  
  #notification .el-tabs__item.is-active {
    background-color: transparent;
    color: transparent;
    font-weight: normal;
    border-color: transparent;
  }
  
  #notification .el-tabs__content {
    background-color: #fff;
    padding: 16px;
    color: #333;
    font-size: 18px;
    text-align: center;
  }
  
  #notification .demo-tabs>.el-tabs__content {
    background-color: #fff;
    padding: 16px;
    color: #333;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
  </style>