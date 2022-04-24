<script setup lang="ts">
  import Main from './views/Main.vue'
</script>

<template>
  <Main msg="VirtuWise" />
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
