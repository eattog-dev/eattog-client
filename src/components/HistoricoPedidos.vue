<template>
    <div class="historico-pedidos">
        <h2>Seus últimos pedidos</h2>
        <div class="item-pedido">
            <img src="../assets/img-login/monkey.svg" alt="">
            <div class="info">
                <h5>Masqueico cozido</h5>
                <span class="descricao">3 UN. x R$ 38,00</span>
                <span class="valorTotal">Total R$ 114,00</span>
                <p class="endereco">
                    <span class="bold">Rua/Av:</span> Sobe Desce Nunca Aparece
                    <span class="bold">Bairro:</span> Aquele lá
                    <span class="bold">Cidade:</span> Gotham City
                    <span class="bold">Estado:</span> De Choque
                    <span class="bold">Complemento:</span> lalalalalalalalalalalalala
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.historico-pedidos {
    padding: 1rem 0;
    color: var(--black100);
    border-top: 1px solid #ebeef7;
}

.historico-pedidos h4 {
    font-size: 1.1rem;
}

.historico-pedidos .item-pedido {
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
}

.historico-pedidos .item-pedido img {
    width: 6rem;
}

.historico-pedidos .item-pedido .info {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
}

.historico-pedidos .item-pedido .info h5 {
    font-size: 1rem;
    font-weight: 600;
}

.historico-pedidos .item-pedido .info span {
    font-size: 0.8rem;
    font-weight: 700;
}

.bold {
    font-weight: bold;
}
</style>