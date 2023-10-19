<template>
    <div class="states-order">
        <h2 class="title-state">Estado do pedido</h2>

        <OrderStates />
    </div>
     <AvaliationPlate/>
    <!--previsao-->
    <div class="prevision">
        <h3 class="title-state">Previsão de entrega</h3>
        <span class="title-state">13:10</span>
    </div>
<!--comanda-->
<el-descriptions title="Sua comanda">
    <el-descriptions-item label="Cliente">Ana</el-descriptions-item>
    <el-descriptions-item label="Prato">Bife com cebolas</el-descriptions-item>
    <el-descriptions-item label="Preço">15.90</el-descriptions-item>
   </el-descriptions>

  
</template>

<script setup>
//checklist
import { ref } from 'vue';
import OrderStates from '../components/OrderStates.vue';
import AvaliationPlate from '../components/AvaliationPlate.vue'

//star-avalation
const value = ref()
//coments
const textarea = ref('')
</script>

<style>
.states-order{
    margin-left: 40%;
}
.components-state{
    margin-left: 40%;
}
.components-title {
    width: 10em;
}

.avalation-state {
    width: 30em;
}
.prevision{
    margin-left: 40%;
    align-items: center;
}
.prevision_title-test{
    display:flex ;
}
.el-descriptions {
    margin-left: 40%;
}
.el-descriptions__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-descriptions__title{
    color:#ffe500e8;
    align-items: center;
}
.el-descriptions__body .el-descriptions__table{
    width: 60%;
}

</style>