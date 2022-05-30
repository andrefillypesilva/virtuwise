<template>
    <section class="how-it-works">
        <div class="how-it-works__logo">
            <router-link :to="{ path: '/' }">
                <Logo />
            </router-link>
        </div>
        <div class="how-it-works__main">
            <img src="https://static.vecteezy.com/system/resources/previews/004/977/141/original/virtual-reality-worlds-women-in-virtual-reality-glasses-and-blockchain-technology-background-cryptography-hash-and-transaction-data-a-virtual-world-concept-illustration-vector.jpg" alt="bg-image">
            <h1 class="how-it-works__main--title">
                Utilize uma experiência 360º para vender melhor, e com praticidade, o seu produto
            </h1>
            <p class="how-it-works__main--description">
                A VirtuWise proporciona para o seu cliente uma experiência que simula a realidade sem que ele saia de casa! Agora será possível levar seu veículo diretamente para a casa do seu cliente.
            </p>
        </div>
    </section>
</template>

<script lang="ts">
    import Logo from "@/assets/Logo.vue";

    export default {
        props: [],
        components: {
            Logo,
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
    @import "../assets/style/_variables.scss";
    @import "../assets/style/_mixins.scss";

    .how-it-works {
        @include flex-container;
        background-color: transparent;
        position: relative;

        &__logo {
            width: 20rem;
            padding: 2rem 3rem;
        }

        &__main {
            flex-basis: 100%;
            padding: 8rem;

            &--title, &--description {
                width: 70%;
            }

            &--title {
                font-size: 5rem;
                line-height: 6rem;
                margin-bottom: 3rem;
            }

            &--description {
                font-size: 1.6rem;
            }
        }

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            opacity: 0.4;
            z-index: -1;
        }
    }
</style>
