<template>
  <div class="order-details">
    <el-button class="icon-back-header">
      <router-link to="/inicio" style="vertical-align: middle">
    <el-icon :size="25" color="black" style="vertical-align: middle">
      <ArrowLeft />
    </el-icon>
  </router-link>
  </el-button>
    <span class="store-name">Pizzaria 067</span>
    <div class="order-header">
      <h1>Pedido #0001</h1>
      <p>Feito às 14:30</p>
      <p>Id do pedido: 4204 9129</p>
      <a href="#">Entrar em contato com a loja?</a>
    </div>
    <div class="order-status">
      <h2>Status do pedido</h2>
      <p>Esperando que a loja confirme seu pedido</p>
    </div>
    <div class="order-timeline">
      <img class="order-status-gif" src="https://i.gifer.com/4vsk.gif" alt="GIF status" />
      <!-- https://i.gifer.com/DBN.gif -->
      <el-timeline>
        <el-timeline-item v-for="(status, index) in orderTimeline" :key="index" :timestamp="status.timestamp"
          placement="top">
          <img v-if="status.image" :src="status.image" alt="Imagem do Status do Pedido" class="order-status-image" />
          {{ status.text }}
        </el-timeline-item>
      </el-timeline>
      <span class="order-status-delivery">
        Entrega prevista: 15:30
      </span>
    </div>
    <div class="order-address">
      <h2>Endereço de Entrega</h2>
      <p>Av. Tamandare, 6000 - Jardim Seminario</p>
      <p>Campo Grande - MS, 79117-900</p>
    </div>
    <div class="order-items">
      <h2>Itens do Pedido</h2>
      <el-table :data="orderItems" style="width: 100%">
        <el-table-column prop="product" label="Produto" width="180"></el-table-column>
        <el-table-column prop="quantity" label="Quantidade" width="180"></el-table-column>
        <el-table-column prop="price" label="Preço"></el-table-column>
      </el-table>
    </div>
    <div class="order-total">
      <h2>Total do seu pedido</h2>
      <p>Subtotal: R$ 150,00</p>
      <p>Taxa de entrega: R$ 10,00</p>
      <p>Total: R$ 160,00</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  ElButton,
  
} from "element-plus";
import trucks from '../assets/icon-notification/icontruck.png';

export default {
  setup() {
    const orderTimeline = ref([
      {
        text: "Pedido confirmado",
        timestamp: "14:31",
      },
      {
        text: "Pedido está sendo preparado",
        timestamp: "14:41",
      },
      {
        text: "Motorista a caminho do estabelecimento",
        timestamp: "14:56",
      },
      {
        text: "Seu pedido está a caminho",
        timestamp: "14:59",
      },
      {
        image: trucks,
        timestamp: "Pedido Entregue",
      },
    ]);

    const orderItems = ref([
      {
        product: "Pizza Margherita",
        quantity: 2,
        price: "R$ 50,00",
      },
      {
        product: "Pizza 4 Queijos",
        quantity: 1,
        price: "R$ 50,00",
      },
    ]);

    return {
      orderTimeline,
      orderItems,
    };
  },
};
</script>
<style setup>

.order-details {
  padding: 2.2rem;
}

.icon-back-header {
  background-color: var(--rgba-yellow);
  margin: 0.5rem 2rem 1rem 0;
  text-decoration: none;
}

.store-name {
  font-size: xx-large;
  font-family: cursive;
}


.order-header,
.order-status,
.order-address,
.order-items,
.order-total {
  background-color: #dcdcdc7f;
  padding: 1.25rem;
  border-radius: 0.5rem;
  margin-bottom: 1.25rem;
}

.order-header a {
  text-decoration: none;
  color: var(--black100); 
}


.order-status-gif {
  display: flex;
  margin: 0 0 2rem 0;
  width: 100px;
  height: auto;  
}

.order-status-delivery {
  display: flex;
  justify-content: flex-end; 
  font-size: 1.8rem;
}

.el-timeline-item__content {
  font-size: x-large;
}

.order-timeline {
  margin-bottom: 1.7em; 
  padding: 1.25rem;
}

.el-timeline {
  margin: 0;
  --el-timeline-node-color: var(--rgba-yellow);
  list-style: none;
}

@media (max-width: 900px) {
  .store-name {
    font-size: xx-large;
}

  .el-timeline-item__content {
    font-size: large;
  }

  .el-button span {
    font-size: small;
  }
}

</style>

