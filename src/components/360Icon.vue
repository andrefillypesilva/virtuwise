<template>
    <img src="../assets/images/360.png" alt="360°" class="icon" />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        props: [],
        mounted () {},
        data () {},
        methods: {},
        computed: {},
    });
</script>

<style lang="scss">
    .icon {
        position: absolute;
        width: 5rem !important;
        top: .5rem;
        right: 2rem;
        filter: invert(100%) sepia(9%) saturate(7500%) hue-rotate(238deg) brightness(113%) contrast(108%);
    }
</style>
