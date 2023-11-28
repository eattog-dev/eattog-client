<template>
    <div class="cmp-admin_addmenu-formattext">
      <h3 class="cmp-admin_addmenu-title">{{ stageTitle }}</h3>
    </div>
    <div class="cmp-admin-slick-format  cmp-admin-status-{{ stage }}">
      <el-card v-for="pedido in pedidos" :key="pedido.id" class="cmp-admin_box-card">
        <div slot="header" class="cmp-admin_clearfix">
          <span> Pedido de <strong>{{ pedido.cliente }}</strong></span>
        </div>
        <div class="cmp-admin_box-card-item">
          <p v-for="(prato, index) in pedido.pratos" :key="index">
            {{ prato.quantidade }} {{ prato.nome }}
          </p>
        </div>
        <div class="cmp-admin_box-card-button">
          <el-button v-if="stage !== 'concluido'" style="float: left; padding: 3px 0" type="text" @click="cancelarPedido(pedido)">Cancelar</el-button>
          <el-button v-if="stage === 'preparo'" style="float: right; padding: 3px 0" type="text" @click="moverPedido(pedido, 'Pronto')">Iniciar</el-button>
          <el-button v-else style="float: right; padding: 3px 0" type="text" disabled>Concluído</el-button>
        </div>
      </el-card>
    </div>
  </template>
  
<script>
    export default {
    props: {
        stage: String,
        stageTitle: String,
        pedidos: Array
    },
    methods: {
        moverPedido(pedido, action) {
        const nextStatusMap = {
            'aberto': 'preparo',
            'preparo': 'transporte',
            'transporte': 'concluido'
        };

        const nextStatus = nextStatusMap[this.stage];

        if (action === 'Iniciar' || action === 'Pronto' || action === 'Entregue') {
            pedido.status = nextStatus;
            this.salvarPedido(pedido);
           // this.fetchPedidos(); 
        }
        },
        salvarPedido(pedido) {
        axios.put(`/pedidos/${pedido.id}`, pedido)
            .then(response => {
            console.log('Pedido atualizado com sucesso:', response.data);
            this.fetchPedidos();
            })
            .catch(error => {
            console.error('Erro ao atualizar o pedido:', error);
            });
        },
        cancelarPedido(pedido) {
            // ...
        }
    }
    };
</script>

  
<style>
.cmp-admin_addmenu-formattext {
    display: flex;
    border-top: 0.063rem solid var(--gray200);
}

.cmp-admin_addmenu-title {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
    color: var(--yellow500);
}

.cmp-admin-slick-format {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 2rem;
}
.cmp-admin_box-card {
    width: 16rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12) !important;
}

.cmp-admin_box-card-item {
    min-height: 3rem;
}

.cmp-admin_box-card .el-card__body {
    height: auto !important;
    margin: 0;
    padding: 1.25rem 0;
    justify-content: space-between;
    align-items: stretch;
}

.cmp-admin_box-card-button {
    display: inline-flex;
    justify-content: space-between;
    position: relative;
    width: 12rem;
    border-top: 0.063rem solid var(--gray200);
    margin-top: 0.8rem;
}

.cmp-admin_box-card-button .el-button {
    color: var(--yellow500);
    font-size: 1.1rem;
}
</style>
  