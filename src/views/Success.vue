<template>
    <section class="success">
        <h1 class="success__title">Congratulations!</h1>
        <h1 class="success__description">Your project was launched successfully!</h1>
        <img src="../assets/images/success-icon.png" alt="success-icon">
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
    @import "../assets/style/_variables.scss";
    @import "../assets/style/_mixins.scss";

    .success {
        @include form-container;
        
        &__title {
                color: #258b58;
                background-color: #eaf3ed;
                border: 1px solid #d7e9de;
                border-radius: 3rem;
                width: max-content;
                padding: 1rem 3rem;
                margin: 1rem auto;
        }

        img {
            width: 20%;
        }
    }
</style>
