<template>
  <section class="header">
    <div class="header__logo">
      <Logo />
    </div>
    <ul class="header__menu">
      <li class="header__menu--item">
        <a href="#">Discover</a>
      </li>
      <li class="header__menu--item">
        <a href="#">How VirtuWise works?</a>
      </li>
      <li class="header__menu--item">
        <Button title="Publish my 360º project" />
      </li>
    </ul>
    <div class="header__slogan">
      <h4 class="header__slogan--message">
        Your 360º virtual stand to sell wisely on the internet
      </h4>
    </div>
  </section>
</template>

<script lang="ts">
import Logo from "@/assets/Logo.vue";
import Button from "@/components/Button.vue";

export default {
  props: [],
  components: {
    Logo,
    Button,
  },
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '../assets/style/_variables.scss';
@import '../assets/style/_mixins.scss';

.header {
  @include flex-container;

  &__logo {
    width: 20rem;
    padding: 1.4rem;

    @include respond(tab-land) {
        width: 24rem;
    }

    @include respond(phone) {
        width: 50%;
        margin: 0 auto;
    }
  }

  &__menu {
    padding: 1.4rem;
    font-size: 1.2rem;

    @include respond(tab-land) {
        font-size: 1.6rem;
    }

    @include respond(phone) {
        display: none
    }

    &--item {
      @include menu-item;
      
      a {
        @include default-anchor;
      }
    }
  }

  &__slogan {
    flex-basis: 100%;
    background-color: $primary-color;
    color: $light-color;
    text-align: center;
    border-bottom: $default-border;
    font-size: 1.2rem;

    &--message {
      margin: 1.4rem;
    }

    @include respond(tab-land) {
        font-size: 1.6rem;
    }

    @include respond(phone) {
        font-size: 2rem;
    }
  }
}
</style>
