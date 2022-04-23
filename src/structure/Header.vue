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
        Your 360º virtual stand to shop wisely on the internet
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

.header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: $light-color;

  &__logo {
    width: 16rem;
    padding: 1rem;
  }

  &__menu {
    padding: 1rem;

    &--item {
      list-style: none;
      display: inline;
      padding: 0 1rem;
      
      a {
        color: $dark-color;
        text-decoration: none;
        transition: color .2s;

        &:hover, &:active {
          color: $secondary-color;
        }
      }
    }
  }

  &__slogan {
    flex-basis: 100%;
    background-color: $primary-color;
    color: $light-color;
    text-align: center;

    &--message {
      margin: 1rem;
    }
  }
}
</style>
