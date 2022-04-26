<script lang="ts">
import VehicleCard from "@/components/VehicleCard.vue";

export default {
  components: { VehicleCard },
  props: {
    msg: { type: String, default: "" },
  },
  data() {
    return {
      vehicles: [
        {
          title: "Mercedes-AMG EQS 53 4MATIC+",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-eq-eqs.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-eq-eqs.webp`,
          options: ["2022", "0 km", "Electric", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Sintra",
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
          title: "Mercedes-Maybach S Class",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-maybach.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-maybach.webp`,
          options: ["2022", "0 km", "Gasoline", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Lisboa",
          },
        }, {
          title: "Mercedes-AMG EQS 53 4MATIC+",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-eq-eqs.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-eq-eqs.webp`,
          options: ["2022", "0 km", "Electric", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Sintra",
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
          title: "Mercedes-Maybach S Class",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-maybach.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-maybach.webp`,
          options: ["2022", "0 km", "Gasoline", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Lisboa",
          },
        }, {
          title: "Mercedes-AMG EQS 53 4MATIC+",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-eq-eqs.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-eq-eqs.webp`,
          options: ["2022", "0 km", "Electric", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Sintra",
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
          title: "Mercedes-Maybach S Class",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-maybach.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-maybach.webp`,
          options: ["2022", "0 km", "Gasoline", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Lisboa",
          },
        },
        {
          title: "Mercedes-AMG EQS 53 4MATIC+",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-eq-eqs.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-eq-eqs.webp`,
          options: ["2022", "0 km", "Electric", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Sintra",
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
          title: "Mercedes-Maybach S Class",
          brand: "Mercedes-Benz",
          image:
            `${import.meta.env.VITE_ASSETS_IMAGE}thumb-mercedes-maybach.webp`,
          panoramicImage:
            `${import.meta.env.VITE_ASSETS_IMAGE}mercedes-maybach.webp`,
          options: ["2022", "0 km", "Gasoline", "Sedan"],
          location: {
            placeName: "Mercedes-Benz",
            address: "Lisboa",
          },
        },
      ],
    };
  },
};
</script>

<template>
  <section class="main">
    <div class="main__item" v-for="vehicle in vehicles" :key="vehicle.title">
      <VehicleCard :vehicle="vehicle" />
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/style/_mixins.scss";
.main {
  @include default-container;
}
</style>
