<template>
    <footer class="cmp-footer">
        <el-row justify="center">
            <el-col :span="16" class="cmp-footer--padding">
                <el-row :gutter="10">
                    <el-col :sm="12" :md="4" :lg="6" :xl="6" class="cmp-footer-format">
                        <router-link to="/login" class="cmp-footer-link">Meu login</router-link>
                    </el-col>
                    <el-col :sm="12" :md="6" :lg="6" :xl="6" class="cmp-footer-format">
                        <router-link to="/login/proprietario" class="cmp-footer-link">Login dos restaurantes</router-link>
                    </el-col>
                    <el-col  :sm="12" :md="8" :lg="6" :xl="6" class="cmp-footer-format">
                        <a @click="openModal" class="cmp-footer-link">Termos de uso e conduta</a>
                    </el-col>
                    <el-col :sm="12" :md="6" :lg="6" :xl="6" class="cmp-footer-format">
                        <router-link to="/adminconsole" class="cmp-footer-link">Admistrador</router-link>
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

        <el-dialog title="Termos de Uso e Política de Privacidade do Eattog" v-model="showModal" class="cmp-modaldialog--terms">
            <ul class="cmp-footer-terms">
                <li>
                    <h3>Cookies:</h3>
                    <p>Ao utilizar nosso site/serviço, você concorda com o uso de cookies de acordo com a nossa política de cookies. Utilizamos cookies para [descreva os propósitos, como análise de tráfego, personalização de conteúdo etc.]. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador ou dispositivo.</p>
                </li>
                <li>
                    <h3>Propriedade Intelectual:</h3>
                    <p>Todo o conteúdo disponível em nosso site/serviço, incluindo textos, imagens, logotipos, software, entre outros, está protegido por direitos autorais. Não é permitida a reprodução, distribuição ou utilização sem autorização prévia por escrito.</p>
                </li>
                <li>
                    <h3>Direito de Informação:</h3>
                    <p>Respeitamos a privacidade dos nossos usuários e coletamos dados pessoais de acordo com a legislação aplicável. Consulte nossa política de privacidade para obter informações detalhadas sobre como coletamos, usamos, protegemos e compartilhamos seus dados pessoais.</p>
                </li>
            </ul>
        </el-dialog>
    </footer>

</template>

<style setup>
    .cmp-footer {
        border-top: 0.125rem solid var(--gray100);
        padding: 0.625rem 0 !important;   
        z-index: 999;
        width: 100%;
        /* bottom: 0;
        position: absolute; */
        background-color: var(--white100);
    }
    .cmp-footer-link {
        text-decoration: none;
        font-weight: 600;
        line-height: 1.6rem;
        color: var(--gray800);
        cursor: pointer;
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
    .cmp-footer-text p{
        color: var(--gray800);
    }
    .cmp-footer-terms {
        color: var(--gray800);
    }
    .cmp-footer-terms li {
        margin-bottom: .5rem;
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
    .cmp-modaldialog--terms {
        border-radius: 0.5rem !important;
    }

    .cmp-modaldialog--terms .el-dialog__header {
        display: flex;
        height: 3.625rem;
        padding: 0.5rem 1.5rem;
        margin-right: 0;
        align-items: center;
        background-color: var(--yellow500) !important;
    }
    .cmp-modaldialog--terms .el-dialog__close:focus ,.cmp-modaldialog--terms .el-dialog__close:hover {
        color: var(--gray800);
    }
    .cmp-modaldialog--terms .el-dialog__close{
        color: var(--white100);
    }
    .cmp-modaldialog--terms  .el-dialog__title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--white100);
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

<script>
    import { ref } from 'vue'

    const showModal = ref(true);
    export default {
        data() {
            return {
                showModal: false,
            };
        },
        methods: {
            openModal() {
                this.showModal = true;
            },

        },
    };
</script>