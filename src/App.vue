<!-- <script setup>
//import axios from "axios";

import { usePerfilStore } from './store/perfil'

const perfilStore =  usePerfilStore();

perfilStore.loggedUser();



export default {
  name: "App",
  components: {
    HelloWorld
  },

  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },

  data() {
    return {
      prompt: false
    };
  },

  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
    }
  }
};
</script> -->

<script setup>
import { usePerfilStore } from './store/perfil'

const perfilStore = usePerfilStore();

perfilStore.loggedUser();
</script>

<script>

export default {
  name: "App",


  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },

  data() {
    return {
      prompt: false
    };
  },

  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
    }
  }
};
</script>
<template>
    <router-view></router-view>
</template>

<style scoped></style>