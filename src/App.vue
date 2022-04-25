<script lang="ts">
  import Header from '@/structure/Header.vue';
  import Footer from '@/structure/Footer.vue';
  import AFrameService from "./services/AFrameService";

  export default {
    components: {
      Header,
      Footer,
    },
    mounted() {
      AFrameService.registerComponents();
    }
  }
</script>

<template>
  <Header v-if="!$route.meta.hideOn360Mode" />
  <router-view></router-view>
  <Footer v-if="!$route.meta.hideOn360Mode" />
</template>

<style lang="scss">
@import './assets/style/_variables.scss';
@import './assets/style/_mixins.scss';

*, *::after, *::before {
    @include reset;
}

html {
    @include config-font-sizing;
}


body {
    @include config-initial-body;
}
</style>
