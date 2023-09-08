<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()

const data = JSON.parse(route.query.data);
console.log(data)

</script>
<template>
    <section id="dish-detail">
        <el-row justify="center">
            <el-col :span="10" style="border-radius: 8px;">
                <div class="image" :style="{ background: 'url(' + data.image + ')' }"></div>
                <div class="data-dish">
                    <div class="title-and-price">
                        <h3>{{ data.title }}</h3>
                        <div v-if="data.isSale" class="pricing">
                            <span>De: {{ data.price }}</span>
                            <span>Por: {{ data.sale_price }}</span>
                        </div>
                        <span v-else>{{ data.price }}</span>
                    </div>
                    <p>{{ data.description }}</p>

                    <form action="">
                        <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observações"></textarea>
                        <div style="display: flex; justify-content: space-between;">
                            <fieldset>
                                <legend>Quantidade</legend>
                                <input type="number"/>
                            </fieldset>
                            <fieldset>
                                <legend>Entrega</legend>
                                <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                                    <el-option label="retirada" value="retirada"/>
                                    <el-option label="entrega" value="entrega"/>
                                </el-select>
                            </fieldset>
                        </div>
                        <div style="display: flex; justify-content: space-around;">
                            <button>Pedir Sozinho</button>
                            <button>Pedir em Grupo</button>
                        </div>
                    </form>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<style>
.el-row,
.el-col {
    text-align: unset !important;
}

#dish-detail {
    padding: 20px 0;
    color: #000000;
}

#dish-detail .data-dish {
    background-color: #fff;
     border-radius: 0 0 8px 8px; 
    padding: 12px; 
}

#dish-detail .image {
    height: 250px;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 8px 8px 0 0;
}

#dish-detail .data-dish .title-and-price {
    display: flex;
    justify-content: space-between;
}

#dish-detail .data-dish .title-and-price .pricing {
    display: grid;
}

#dish-detail .data-dish img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: auto;
    border-radius: 20px;
}
#dish-detail .data-dish textarea{
    width: 100%;
    border-radius: 4px;

}
#dish-detail .data-dish fieldset{
    width:45%;
    border-radius: 4px;
}
#dish-detail .data-dish input{color:#000000}
#dish-detail .data-dish button {
    padding: 16px;
    background-color: #ffe500;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    color: #ffffff;
}
</style>