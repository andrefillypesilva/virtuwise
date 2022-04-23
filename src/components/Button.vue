<template>
    <a href="#" class="button">
        {{ title }}
    </a>
</template>

<script lang="ts">
export default {
    props: ['title'],
}
</script>

<style scoped lang="scss">
@import '../assets/style/_variables.scss';
.button {
    background-color: $secondary-color;
    color: $light-color;
    padding: .5rem 1rem;
    border-radius: 3rem;

    &:hover, &:active {
        transition: background-color .5s;
        color: $light-color;
        background-color: $primary-color;
    }
}
</style>
