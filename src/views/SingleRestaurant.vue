<script setup>
import { ref, computed, onMounted } from 'vue'

import Banner from '../components/Banner.vue';
import Promocao from '../components/Sales.vue'
import Cardapio from '../components/Menu.vue'

import { useRouter, useRoute } from 'vue-router'

import { usePratosStore } from '../store/pratos'
import {useRestaurantesStore} from '../store/restaurantes'

const restaurantesStore = useRestaurantesStore();
const pratosStore = usePratosStore();

const pratos = computed(() => pratosStore.pratosRestaurante)
const banner = computed (()=> restaurantesStore.restaurante)

onMounted(()=> {
    pratosStore.listaPratosRestaurante(route.params.id);
    restaurantesStore.getRestaurante(route.params.id);
})


const route = useRoute()

const props = defineProps({
    dados: {
        title: String,
        image: String,
        logo: String,
        description: String,
        rating: Number,
        id: Number
    }
})

const dishes = [
    //restaurante tal
    [
        {
            image: 'https://i.ytimg.com/vi/niaLeqNVDZ0/maxresdefault.jpg',
            title: 'sorvete de menta',
            description: 'sorvete de 1,5L menta com chocolate',
            price: 25,
            isSale: false,
            sale_price: 22,
            rating: 5,
            id: 1
        },
        {
            image: 'https://static.itdg.com.br/images/240-240/9fd9f91344dc33fb96ed24b709713afe/354452-original.jpg',
            title: 'pavê',
            description: 'pave e pa cume',
            price: 30,
            isSale: true,
            sale_price: 25,
            rating: 4.5,
            id: 2
        },
        {
            image: 'https://static.itdg.com.br/images/1200-675/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg',
            title: 'Pudim',
            description: 'pudim de leite condensado do bom',
            price: 20,
            isSale: true,
            sale_price: 21,
            rating: 3,
            id: 3

        },
        {
            image: 'https://static.itdg.com.br/images/1200-630/e9442a411c6a1c99cc04efede6a1efaf/bolo-de-fuba-cremoso.jpg',
            title: 'bolo de fubá',
            description: 'bolo de fubá caseiro da vovó',
            price: 40,
            isSale: true,
            sale_price: 33,
            rating: 4,
            id: 4
        },
        {
            image: 'https://www.receiteria.com.br/wp-content/uploads/pizza-margherita-1.png',
            title: 'Pizza Margherita',
            description: 'Pizza clássica com tomate, queijo e manjericão',
            price: 30,
            isSale: true,
            sale_price: 25,
            rating: 3.5,
            id: 5
        },
        {
            image: 'https://www.minhareceita.com.br/app/uploads/2022/04/hamburguer-gourmet-destaque.jpg',
            title: 'Hambúrguer Gourmet',
            description: 'Hambúrguer suculento com queijo cheddar e cebola caramelizada',
            price: 18,
            isSale: true,
            sale_price: 15,
            rating: 5,
            id: 6
        },
        {
            image: 'https://www.minhareceita.com.br/app/uploads/2019/10/salada-caesar-com-frango-empanado.jpg',
            title: 'Salada Caesar',
            description: 'Salada fresca com alface, frango grelhado, croutons e molho Caesar',
            price: 12,
            isSale: false,
            sale_price: 0,
            rating: 5,
            id: 7
        },
        {
            image: 'https://i.pinimg.com/originals/38/11/6c/38116cb2cd4e42d3ce4668f22b00f5e9.jpg',
            title: 'Massa Carbonara',
            description: 'Massa italiana com molho à base de ovos, queijo parmesão e bacon',
            price: 22,
            isSale: false,
            sale_price: 0,
            rating: 3,
            id: 8
        },
        {
            image: 'https://www.emporiumpax.com.br/wp-content/uploads/2023/04/como-fazer-salmao-grelhado.webp   ',
            title: 'Salmão Grelhado',
            description: 'Salmão fresco grelhado com legumes sazonais',
            price: 28,
            isSale: true,
            sale_price: 24,
            rating: 5,
            id: 9
        },
        {
            image: 'https://anamariabraga.globo.com/wp-content/uploads/2019/05/taco-mexicano-1024x576.jpg',
            title: 'Tacos de Carne',
            description: 'Tacos recheados com carne temperada, guacamole e salsa',
            price: 15,
            isSale: false,
            sale_price: 0,
            rating: 5,
            id: 10
        },
        {
            image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/05/Wrap-vegano.jpg',
            title: 'Wrap Vegetariano',
            description: 'Wrap recheado com vegetais frescos e molho de iogurte',
            price: 10,
            isSale: false,
            sale_price: 0,
            rating: 5,
            id: 11
        },
        {
            image: 'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZTVi99TNTludQINPXMqXfj1TyD3EBDF5NEbjYUo2S+dG5QABWZ4z+9f7AlCXOzgexhajSPD7WFfOVJWh6EEdOj7caEoycVFP/CxrkG6Y0R25B84=',
            title: 'Risoto de Cogumelos',
            description: 'Risoto cremoso com uma variedade de cogumelos',
            price: 20,
            isSale: true,
            sale_price: 18,
            rating: 5,
            id: 12
        },
        {
            image: 'https://comidadachef.com.br/wp-content/uploads/2015/10/camarc3a3o-tailandc3aas-com-mac3a7c3a3-verde.jpg',
            title: 'Camarão à Tailandesa',
            description: 'Camarões grelhados com molho de coco e especiarias tailandesas',
            price: 32,
            isSale: false,
            sale_price: 0,
            rating: 5,
            id: 13
        },
        {
            image: 'https://media.istockphoto.com/id/1253845015/pt/foto/ribeye-steak-with-demi-glace-sauce-on-a-glossy-black-plate.jpg?s=1024x1024&w=is&k=20&c=i3qWVNp4iq9BVzFSnznyQREuFYZc_xBUugsgHty36c4=',
            title: 'Bife Ribeye',
            description: 'Bife suculento Ribeye com batatas assadas',
            price: 35,
            isSale: true,
            sale_price: 30,
            rating: 5,
            id: 14
        },
        {
            image: 'https://img.freepik.com/fotos-premium/frango-teriyaki-com-arte-generativa-de-arroz-por-ai_35887-6389.jpg?w=2000',
            title: 'Frango Teriyaki',
            description: 'Peito de frango grelhado com molho teriyaki e legumes salteados',
            price: 16,
            isSale: false,
            sale_price: 0,
            rating: 5,
            id: 15
        },
        {
            image: 'https://claudia.abril.com.br/wp-content/uploads/2020/03/club-sandwichcrc3a9dito-ricardo-dc2b4angelo.jpg',
            title: 'Sanduíche Club',
            description: 'Sanduíche clássico com frango, bacon, alface e tomate',
            price: 14,
            isSale: false,
            sale_price: 0,
            rating: 5,
            id: 16
        },
        {
            image: 'https://www.cozinhatecnica.com/wp-content/uploads/2019/10/receita-de-tiramisu-pexels-min-che-6880219.jpg',
            title: 'Tiramisu',
            description: 'Clássica sobremesa italiana à base de café e mascarpone',
            price: 10,
            isSale: true,
            sale_price: 8,
            rating: 5,
            id: 17
        },
        {
            image: 'https://st4.depositphotos.com/1791505/30296/i/450/depositphotos_302967268-stock-photo-chicken-caesar-wrap-sandwich.jpg',
            title: 'Wrap de Frango Caesar',
            description: 'Wrap recheado com frango grelhado, alface e molho Caesar',
            price: 12,
            isSale: false,
            sale_price: 0,
            rating: 5,
            id: 18
        }
    ],
    [
        {
            image: 'https://amopaocaseiro.com.br/wp-content/uploads/2021/05/video034-sonho_receita.jpg',
            title: 'BK Sonho',
            description: 'Sonho do melhor lanche',
            price: 7,
            isSale: false,
            sale_price: 5,
            rating: 5,
            id: 19
        }
    ],

    [
        {
            image: 'https://comidinhasdochef.com/wp-content/uploads/2014/06/Enroladinho-de-salsicha-00.png',
            title: 'enroladinho de salsicha',
            description: 'o melhor da cidade',
            price: 5,
            isSale: false,
            sale_price: 3.,
            rating: 55,
            id: 1
        },
        {
            image: 'https://media.istockphoto.com/id/538335769/pt/foto/dónute-com-confeito-colorido-para-bolos-isolados.jpg?s=612x612&w=0&k=20&c=hqnBADd5WlEl5Lh4kcnty3rINoRVWuaI53_TenffGWY=',
            title: 'donut',
            description: 'donut do homer simpson',
            price: 10,
            isSale: true,
            sale_price: 8
            ,
            rating: 5,
            id: 1
        },
        {
            image: 'https://images-americanas.b2w.io/produtos/6910388817/imagens/doce-de-amendoim-di-marco-pacoca-pacocao-90g-espeto-60un/6910388817_1_xlarge.jpg',
            title: 'paçoca',
            description: 'paçocão gigantesco de bom',
            price: 4,
            isSale: true,
            sale_price: 3.,
            rating: 55,
            id: 1
        },

    ]
]
</script>
<template>
    <Banner :banner="banner" />
    <!--<Promocao :dishes="pratos" />-->   
    <Cardapio :dishes="pratos" />
</template>

<style></style>