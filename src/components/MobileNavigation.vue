<script setup> </script>

<template>
    <div id="navigation" class="cmp-navigator">
        <div id="home" class="cmp-navigator-item">
            <font-awesome-icon icon="fa-solid fa-house" />
            <span>Feed</span> 
        </div>
            <div id="alimentacao" class="cmp-navigator-item">
            <font-awesome-icon icon="fa-solid fa-utensils" />
            <span>Alimentação</span>
        </div>
            <div id="notificacoes" class="cmp-navigator-item">
            <font-awesome-icon icon="fa-solid fa-bell" />
            <span>Notificações</span>
        </div>
        <div id="perfil" class="cmp-navigator-item">
            <font-awesome-icon icon="fa-solid fa-user" />
            <span>Perfil</span>
        </div>
    </div>
</template>

<style>
    .cmp-navigator {
        display: flex;
        justify-content: space-between;
        padding: 24px;
        background-color: var(--white100);
        border-radius: 20px 20px 0 0 ;
    }

    .cmp-navigator-item {
        color: var(--rgba-yellow);
        margin: 0 8px;
        display: grid;
        text-align: center;
    }

    .cmp-navigator-item svg{ 
        margin: auto;
    }

    .cmp-navigator-item:hover {
        color: var(--yellow100);
    }
</style>