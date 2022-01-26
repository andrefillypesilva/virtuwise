<script lang="ts">
  import Header from '@/structure/Header.vue';

  export default {
    components: {
      Header,
    },
    props: {
      msg: { type: String, default: '' },
    },
  }
</script>

<template>
  <Header />
  <h1>{{ msg }}</h1>
</template>

<style scoped>
</style>
