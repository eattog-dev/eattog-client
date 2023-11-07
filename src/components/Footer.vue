<template>
    <footer class="cmp-footer">
        <el-row justify="center">
            <el-col :span="16" class="cmp-footer--padding">
                <el-row :gutter="10">
                    <el-col  :sm="12" :md="8" :lg="6" :xl="6" class="cmp-footer-format">
                        <router-link to="/" class="cmp-footer-link">Termos e condições de uso</router-link>
                    </el-col>
                    <el-col :sm="12" :md="6" :lg="6" :xl="6" class="cmp-footer-format">
                        <router-link to="/" class="cmp-footer-link">Código de conduta</router-link>
                    </el-col>
                    <el-col :sm="12" :md="4" :lg="6" :xl="6" class="cmp-footer-format">
                        <router-link to="/" class="cmp-footer-link">Privacidade</router-link>
                    </el-col>
                    <el-col :sm="12" :md="6" :lg="6" :xl="6" class="cmp-footer-format">
                        <router-link to="/" class="cmp-footer-link">Dicas de Segurança</router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div class="cmp-footer-text">
            <div class="cmp-footer-inline">
                <div class="cmp-footer-logo">
                    <img src="../assets/icon_stop.png" alt="Logo Eattog" />
                </div>
                <p>© Copyright 2023 - Eattog - Todos os direitos reservados Eattog com Agência de Restaurantes Online S.A.</p>
            </div>
            <p>CNPJ 16.642.553/0001-88</p>
        </div>
    </footer>
</template>

<style setup>
    .cmp-footer {
        border-top: 0.125rem solid var(--gray500);
        padding: 0.625rem 0 !important;   
        z-index: 999999;
        width: 100%;
        bottom: 0;
        position: relative;
    }
    .cmp-footer-link {
        text-decoration: none;
        font-weight: 600;
        line-height: 1.6rem;
        color: var(--black100);
        cursor: alias;
    }
    .cmp-footer-inline{
        display: inline-flex;
    }
    .cmp-footer-link:hover {
        text-decoration: underline;
    }
    .cmp-footer-text {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    .cmp-footer--margin-none {
        margin: 0 !important;
    }
    .cmp-footer--padding {
        padding: .625rem 0;
    }
    .cmp-footer-format {
        display: flex !important;
        justify-content: center;
    }
    .cmp-footer-text .cmp-footer-logo img {
        margin-right: .625rem;
    }

    @media (max-width: 768px) {
        .cmp-footer-logo{
            display: none;
        }
        .cmp-footer-text {
            flex-direction: column;
            padding: .625rem 1rem 0 1rem;
            text-align: center;
            border-top: .063rem solid var(--gray600);
        }
    }
</style>