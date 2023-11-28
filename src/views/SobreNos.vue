<template>
    <Navbar />
    <el-row>
        <el-col :span="20" style="padding: 1rem 0;">
            <p>
                O Eattog é um projeto de conclusao de curso feito em grupo por parte da turma do terceiro ano de TADS da Universidade Católica Dom Bosco (UCDB). O objetivo da nossa soluçao é oferecer
                um ambiente online onde clientes podem escolher e pedir comida sem sair de casa. Os membros do projeto sao:
            </p>
            <el-row justify="center" >
                <el-col :span="4" >
                    <h3>Augusto Ferreira de Abreu</h3>
                    <h5>RA184048</h5>
                    <a target="_blank" href="https://github.com/4august">GitHub</a>
                </el-col>
                <el-col :span="4" >
                    <h3>Emanuel Barros Ibanhes</h3>
                    <h5>RA179952</h5>
                    <a target="_blank" href="https://github.com/EIBANHES">GitHub</a>
                </el-col>
                <el-col :span="4" >
                    <h3>Grazielly Rocha</h3>
                    <h5>RA186304</h5>
                    <a target="_blank" href="https://github.com/GrazieRcha">GitHub</a>
                </el-col>
                <el-col :span="4" >
                    <h3>Milena do Santos Carmona</h3>
                    <h5>RA 188556</h5>
                    <a target="_blank" href="https://github.com/MilenaSCarmona">GitHub</a>
                </el-col>
                <el-col :span="4" >
                    <h3>Karina Amaral Oshiro</h3>
                    <h5>RA 187115</h5>
                    <a target="_blank" href="https://github.com/karinaoxiru">GitHub</a>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <Footer />
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>
<style scoped>
.sobre-nos a{
    text-decoration: none;
    color: var(--yellow500);
    font-weight: 700;
    text-align: center;
    margin: auto;
}
.sobre-nos .el-row{
    padding: 1.5rem 0;
}
.el-col .sobre-nos{
    display: grid;
    justify-content: center;
}
.sobre-nos h3, .sobre-nos h5{
    text-align: center;
}
</style>