<template>
    <section class="stand">
        <h1 class="stand__title">StarSul, Portimão</h1>
        <h3 class="stand__description">Concessionário e oficina autorizada Mercedes-Benz</h3>
        <Filter />
        <section class="stand__vehicles">
            <div class="stand__vehicles--item" v-for="(vehicle, index) in vehicles" :key="vehicle.title">
                <VehicleCard
                    :vehicle="vehicle"
                    :type="index === 0 ? 'big' : 'normal'"
                />
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import VehicleCard from "@/components/VehicleCard.vue";
import Filter from "@/components/Filter.vue";

    export default {
        components: { VehicleCard, Filter },
        props: [],
        mounted () {

        },
        data() {
            return {
                vehicles: [
                    {
                        title: "Mercedes-Benz S Class Limousine",
                        brand: "Mercedes-Benz",
                        image:
                            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-benz-s-class.webp`,
                        panoramicImage:
                            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-benz-s-class.webp`,
                        options: ["2019", "13 785 km", "Gasoline", "Sedan"],
                        location: {
                            placeName: "StarSul",
                            address: "Portimão",
                        },
                    },
                    {
                        title: "Mercedes-Benz S Class Limousine",
                        brand: "Mercedes-Benz",
                        image:
                            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-benz-s-class.webp`,
                        panoramicImage:
                            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-benz-s-class.webp`,
                        options: ["2019", "13 785 km", "Gasoline", "Sedan"],
                        location: {
                            placeName: "StarSul",
                            address: "Portimão",
                        },
                    },
                    {
                        title: "Mercedes-Benz S Class Limousine",
                        brand: "Mercedes-Benz",
                        image:
                            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-benz-s-class.webp`,
                        panoramicImage:
                            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-benz-s-class.webp`,
                        options: ["2019", "13 785 km", "Gasoline", "Sedan"],
                        location: {
                            placeName: "StarSul",
                            address: "Portimão",
                        },
                    },
                    {
                        title: "Mercedes-Benz S Class Limousine",
                        brand: "Mercedes-Benz",
                        image:
                            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-benz-s-class.webp`,
                        panoramicImage:
                            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-benz-s-class.webp`,
                        options: ["2019", "13 785 km", "Gasoline", "Sedan"],
                        location: {
                            placeName: "StarSul",
                            address: "Portimão",
                        },
                    },
                    {
                        title: "Mercedes-Benz S Class Limousine",
                        brand: "Mercedes-Benz",
                        image:
                            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-benz-s-class.webp`,
                        panoramicImage:
                            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-benz-s-class.webp`,
                        options: ["2019", "13 785 km", "Gasoline", "Sedan"],
                        location: {
                            placeName: "StarSul",
                            address: "Portimão",
                        },
                    },
                ],
            };
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../assets/style/_mixins.scss";
    .stand {
        padding: 4rem 3rem;
        position: relative;

        &__title {
            @include typography-title;
            text-align: center;
        }

        &__description {
            @include typography-description;
            text-align: center;
        }

        &__vehicles {
            @include default-container;
        }

        &::before {
            background-image: url("https://auto7.imgs.sapo.pt/0650/00162650/c/0001/000000001/Original/StarSul-Evora--Portimao--Faro-11174.jpg");
            background-repeat: no-repeat;
            background-size: 100%;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: .2;
        }
    }
</style>
