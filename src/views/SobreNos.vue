<template>
    <Navbar />
    <el-row>
        <el-col :span="20" style="padding: 1rem 0;">
            <p>
                O Eattog é um projeto de conclusao de curso feito em grupo por parte da turma do terceiro ano de TADS da Universidade Católica Dom Bosco (UCDB). O objetivo da nossa soluçao é oferecer
                um ambiente online onde clientes podem escolher e pedir comida sem sair de casa. Os membros do projeto sao:
            </p>
            <ol>
                <li>
                    <h3>Augusto Ferreira de Abreu</h3>
                    <h5>RA184048</h5>
                    <h6>github</h6>
                </li>
                <li>
                    <h3>Emanuel Barros Ibanhes</h3>
                    <h5>RA do Academico</h5>
                    <h6>github</h6>
                </li>
                <li>
                    <h3>Grazielly Rocha</h3>
                    <h5>RA do Academico</h5>
                    <h6>github</h6>
                </li>
                <li>
                    <h3>Milena do Santos Carmona</h3>
                    <h5>RA do Academico</h5>
                    <h6>github</h6>
                </li>
                <li>
                    <h3>Karina Oshiro</h3>
                    <h5>RA do Academico</h5>
                    <h6>github</h6>
                </li>

            </ol>
        </el-col>
    </el-row>
    <Footer />
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>