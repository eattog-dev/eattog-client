<template>
    <div class="cmp-banner">
      <el-carousel
        :autoplay="false"
        :indicator-position="'none'"
        :arrow="'hover'"
        :loop="true"
        class="cmp-banner-customcarousel">
        <el-carousel-item v-for="(banner, index) in currentBanners" :key="index">
          <div class="cmp-banner-wrapper">
            <img class="cmp-banner-format" :src="banner.image" :alt="banner.alt" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
<script>
  import Banner1 from '@/assets/img-banner/banner-1.jpg';
  import Banner2 from '@/assets/img-banner/banner-2.png';
  import Banner3 from '@/assets/img-banner/banner-3.jpg';
  import mobileBanner1 from '@/assets/img-banner/mobileBanner1.png';
  import mobileBanner2 from '@/assets/img-banner/mobileBanner2.png';
  
  export default {
    data() {
      return {
        banners: [
          { image: Banner1, alt: 'Banner 1' },
          { image: Banner2, alt: 'Banner 2' },
          { image: Banner3, alt: 'Banner 3' },
        ],
        mobileBanners: [
          { image: mobileBanner1, alt: 'Mobile Banner 1' },
          { image: mobileBanner2, alt: 'Mobile Banner 2' },
        ],
        currentBanners: [],
      };
    },
    created() {
      this.updateBanners(window.innerWidth);
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.updateBanners(window.innerWidth);
      },
      updateBanners(windowWidth) {
        if (windowWidth <= 768) {
          this.currentBanners = this.mobileBanners;
        } else {
          this.currentBanners = this.banners;
        }
      },
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
        color: var(--gray800);
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
        .cmp-banner .el-carousel__arrow--left {
            right: auto;
            left: 38%;
            top: 30%;
        }
        .cmp-banner .el-carousel__arrow--right {
            left: auto;
            right: 38%;
            top: 30%;
        }
        .cmp-banner-format {
            object-fit: contain;
            height: 100%;
        }
        .cmp-banner .el-carousel__arrow--left,
        .cmp-banner .el-carousel__arrow--right {
            bottom: 2.25rem; 
        }
        .cmp-banner-customcarousel{
            height: 8rem;
        }
    }
</style>

