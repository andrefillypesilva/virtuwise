<script lang="ts">
  import Header from '@/structure/Header.vue';
  import Footer from '@/structure/Footer.vue';

  export default {
    components: {
      Header,
      Footer,
    },
    props: {
      msg: { type: String, default: '' },
    },
  }
</script>

<template>
  <Header />
  <h1>{{ msg }}</h1>
  <Footer />
</template>

<style scoped>
</style>
