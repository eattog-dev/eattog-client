<template>
  <div class="cmp-banner">
    <el-carousel :autoplay="false" :indicator-position="'none'" :arrow="'hover'" :loop="true" class="cmp-banner-customcarousel">
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <div class="cmp-banner-wrapper">
          <img class="cmp-banner-format" :src="banner.image" alt="Banner" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Banner1 from '@/assets/img-banner/banner-1.jpg';
import Banner2 from '@/assets/img-banner/banner-2.jpg';
import Banner3 from '@/assets/img-banner/banner-3.jpg';

export default {
    data() {
        return {
            banners: [
                { image: Banner1 },
                { image: Banner2 },
                { image: Banner3 },
            ],
        };
    },
};
</script>

<style>
.cmp-banner-format {
    object-fit: cover;
    width: 100%;
    height: 12.5rem;
}
.cmp-banner-customcarousel {
    position:relative;
}
.cmp-banner-wrapper {
    position: relative;
}
.cmp-banner .el-carousel__container {
    height: 12.5rem;
}
.cmp-banner .el-carousel__arrow--left,
.cmp-banner .el-carousel__arrow--right {
    bottom: 1.25rem; 
    background-color: var(--rgba-yellow); 
}
.cmp-banner .el-carousel__arrow--left{
    right: auto;
    left: 46%;
}
.cmp-banner .el-carousel__arrow--right {
    left: auto;
    right: 46%;
}
@media (max-width: 768px) {
    .cmp-banner .el-carousel__arrow--left{
        right: auto;
        left: 38%;
    }
    .cmp-banner .el-carousel__arrow--right {
        left: auto;
        right: 38%;
    }
}
</style>

