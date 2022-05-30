<template>
    <section class="create-account">
        <h1 class="create-account__title">Create your account</h1>
        <h3 class="create-account__description">To publish your 360º project, you need to create an account first. But don't worry, it's easy! ;)</h3>
        <form class="create-account__form">
            <input type="text" name="name" id="name"
                class="create-account__form--item" placeholder="Name" />
            <input type="email" name="email" id="email"
                class="create-account__form--item" placeholder="Email" />
            <Button
                title="Create my account"
                class="create-account__form--item create-account__form--button"
                to="/publish"
            />
        </form>
    </section>
</template>

<script lang="ts">
    import Button from '../components/Button.vue';

    export default {
        components: {
            Button,
        },
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

<style lang="scss">
    @import "../assets/style/_variables.scss";
    @import "../assets/style/_mixins.scss";

    .create-account {
        @include form-container;
    }
</style>
