<script setup>
const props = defineProps({
    restaurant: {
        id: Number,
        image: String,
        logo: String,
        title: String,
        rating: Number,
        type: String,
        distance: String,
        retiring: String,
        description: String
    },
});

const bannerData = {
    title: props.restaurant.title,
    image: props.restaurant.image,
    logo: props.restaurant.logo,
    description: props.restaurant.description,
    rating: props.restaurant.rating
}

</script>
<template>
    <el-col :xs="24" :sm="12" :md="8" :lg="8" :span="8">
        <router-link :to="{
            name: 'SingleRestaurant',
            params: {
                id: restaurant.id,
            },
            query: {
                banner: JSON.stringify(bannerData)
            }
        }">
            <div class="grid-content">
                <div class="image" :style="{ background: 'url(' + restaurant.image + ')' }">
                    <div class="restaurant-data">
                        <img :src='restaurant.logo' alt="">
                        <div>
                            <h6>{{ restaurant.title }}</h6>
                            <el-rate disabled v-model="restaurant.rating" />
                        </div>
                    </div>
                </div>
                <div class="details">
                    <div>
                        <span>{{ restaurant.type }}</span>
                        <span>{{ restaurant.distance }}</span>
                        <span>{{ restaurant.retiring }}</span>
                    </div>
                    <p class="description">
                        {{ restaurant.description }}
                    </p>
                </div>
            </div>
        </router-link>
    </el-col>
</template>
<style>
#restaurants .el-col {
    margin: 12px 0;
}

#restaurants a {
    text-decoration: none;
}

#restaurants .grid-content {
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    color: #303133;
    text-decoration: none !important;
    ;
}

#restaurants .image {
    height: 180px !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    display: grid;
    align-content: end;
}

#restaurants .image .restaurant-data {}

#restaurants .image .restaurant-data {
    text-align: left;
    display: flex;
    color: #ffffff;
    padding-left: 20px;
    padding-bottom: 12px;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

#restaurants .image .restaurant-data h6 {
    font-size: 16px;
    font-weight: 700;
    text-shadow: 1px 1px #606060;
}

#restaurants .image .restaurant-data img {
    width: 50px;
    height: 50px;
    padding-right: 8px;
    object-fit: contain;
}

#restaurants .details {
    padding: 4px 20px 32px 20px;
}

#restaurants .details div {
    display: flex;
    justify-content: space-between;
}

#restaurants .details span {
    font-size: 13px;
}

#restaurants .description {
    text-align: left;
    font-size: 14px;
}
</style>