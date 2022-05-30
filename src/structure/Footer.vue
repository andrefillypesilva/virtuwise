<template>
  <section class="footer">
    <ul class="footer__links">
      <li class="footer__links--item">
        <router-link :to="{ path: '/' }">
          <span>Discover</span>
        </router-link>
      </li>
      <li class="footer__links--item">
        <router-link :to="{ path: '/how-it-works' }">
          How <span>VirtuWise</span> works?
        </router-link>
      </li>
      <li class="footer__links--item">
        <router-link :to="{ path: '/create-account' }">
          Publish my <span>360º project</span>
        </router-link>
      </li>
    </ul>
    <ul class="footer__social">
      <li class="footer__social--item">
        <a href="#">
          <figure class="footer__social--item-figure">
            <img
              src="../assets/images/instagram.png"
              alt="instagram icon"
              class="footer__social--item-icon"
            />
            <figcaption>Instagram</figcaption>
          </figure>
        </a>
      </li>
      <li class="footer__social--item">
        <a href="#">
          <figure class="footer__social--item-figure">
            <img
              src="../assets/images/linkedin.png"
              alt="linkedin icon"
              class="footer__social--item-icon"
            />
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
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
@import "../assets/style/_variables.scss";
@import "../assets/style/_mixins.scss";

.footer {
  @include flex-container;
  padding: 3rem;
  border-top: $default-border;
  font-size: 1.1rem;

  &__links,
  &__social {
    &--item {
      @include menu-item;

      &-figure {
        display: flex;
        align-items: center;
      }

      &-icon {
        width: 1.8rem;
        margin-right: .4rem;

        @include respond(phone) {
          width: 2.5rem;
          margin-right: .8rem;
        }
      }

      a {
        @include default-anchor;
      }
    }

    @include respond(phone) {
      flex-basis: 100%;

      display: flex;
      justify-content: center;
    }
  }

  &__social {
    &--item {
      a {
        &:hover {
          color: $dark-color;
        }

        @include respond(phone) {
          color: $light-color;

          img {
            filter: invert(100%) sepia(9%) saturate(7500%) hue-rotate(238deg) brightness(113%) contrast(108%);
          }

          &:hover {
            color: $light-color;
          }
        }
      }
    }

    @include respond(phone) {
      padding: 3rem 0;
      margin: 6rem 0 0 0;
      background-color: $primary-color;
    }
  }

  @include respond(tab-land) {
    font-size: 1.4rem;
  }

  @include respond(phone) {
    font-size: 2rem;
    padding: 6rem 0 0 0;
  }
}
</style>
