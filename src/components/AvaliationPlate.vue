<template>
    <div class="components-state">
    <h3 class="title-state">O que achou do pedido?</h3>

    <div class="avalation-state">
    <el-rate v-model="value" show-score text-color="#ff9900" score-template="{value} points"/>
    <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Nos diga sua opinião"  />
</div>
<el-col>
        <el-link class="botao-default">Avaliar</el-link>
      </el-col>

</div>
</template>