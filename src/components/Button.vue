<template>
  <router-link :to="to" class="button" v-if="to">
    <span class="material-symbols-outlined button__icon"
      v-if="icon">
      {{ icon }}
    </span>
    {{ title }}
  </router-link>
</template>

<script lang="ts">
export default {
  props:{
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    to: {
      type: String,
      default: '/',
    }
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/_variables.scss";
@import "../assets/style/_mixins.scss";

.button {
  display: flex;
  align-items: center;
  max-width: max-content;
  background-color: $primary-color;
  color: $light-color;
  padding: 1.2rem 1.8rem;
  border-radius: 3rem;
  text-decoration: none;
  transition: background-color 0.5s;
  font-size: 1.2rem;

  &__icon {
    margin-right: 0.5rem;
    color: $light-color;
    position: initial;
  }

  &:hover,
  &:active {
    color: $light-color;
    background-color: $secondary-color;
  }

  @include respond(tab-land) {
    font-size: 1.6rem;
  }

  @include respond(tab-port) {
    font-size: 1.8rem;
  }

  @include respond(phone) {
    font-size: 2rem;
  }
}
</style>
