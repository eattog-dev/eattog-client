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
        margin-top: 1.875rem;
        border-radius: 0.625rem;
        max-width: 18.75rem;
        height: auto;
        max-height: 21.875rem;
    }

    .el-card__body {
        padding: var(--el-card-padding);
        margin-top: 0.625rem; 
        height: 27.5rem; 
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
        margin-bottom: 0.9375rem;
    }

    .subtitle-state {
        color: rgba(109, 109, 117, 0.575);
    }

    .butao-state {
        border-top: 0.063rem dashed var(--gray200);
        margin-top: 3.125rem;
    }

    .el-link {
        --el-link-hover-text-color: transparent;
    }

    .el-progress-circle__track {
        color: var(--orange200);
        background-color: var(--aqua100);
    }

    .botao-default {
        background-color: var(--orange300);
        padding: 0.313rem 0.625rem;
        color: var(--white100);
        border-radius: 0.438rem;
    }

    .botao-default:hover {
        color: var(--white100);
    }
</style>