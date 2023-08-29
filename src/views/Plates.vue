<template>
    <script src="//unpkg.com/vue@2/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.14/lib/index.js"></script>
</template>

<script setup>

  import { useRouter } from 'vue-router';  
  const router = useRouter();
  const pratoId = router.currentRoute.value.query.id;  
  // Agora você pode usar pratoId para carregar os detalhes do prato
</script>
<script setup>
import { ref } from 'vue'
import Title from '../components/Title.vue';
import Plate from '../components/Plate.vue'

</script>



