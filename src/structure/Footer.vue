<template>
  <section class="footer">
    <ul class="footer__links">
      <li class="footer__links--item">
        <a href="#">
          <span>Discover</span>
        </a>
      </li>
      <li class="footer__links--item">
        <a href="#">
          How <span>VirtuWise</span> works?
        </a>
      </li>
      <li class="footer__links--item">
        <a href="#">
          Publish my <span>360º project</span>
        </a>
      </li>
    </ul>
    <ul class="footer__social">
      <li class="footer__social--item">
        <a href="#">
          <figure class="footer__social--item-figure">
            <img src="../assets/images/instagram.png" alt="instagram icon" class="footer__social--item-icon">
            <figcaption>Instagram</figcaption>
          </figure>
        </a>
      </li>
      <li class="footer__social--item">
        <a href="#">
          <figure class="footer__social--item-figure">
            <img src="../assets/images/linkedin.png" alt="linkedin icon" class="footer__social--item-icon">
            <figcaption>Linkedin</figcaption>
          </figure>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
export default {
  props: [],
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

<style scoped lang="scss">
@import '../assets/style/_variables.scss';
@import '../assets/style/_mixins.scss';

.footer {
  @include flex-container;
  padding: 3rem;
  border-top: $default-border;

  &__links, &__social {
    &--item {
      @include menu-item;

      &-figure {
        display: flex;
        align-items: center;
      }

      &-icon {
        width: 1.5rem;
        margin-right: .25rem;
      }

      a {
        @include default-anchor;
      }
    }
  }

  &__social {
    &--item {
      a {
        &:hover, &:active {
          color: $dark-color;
        }
      }
    }
  }
}
</style>
