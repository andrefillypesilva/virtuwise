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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/explore/design-highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210806155321.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt//content/dam/hq/passengercars/cars/eqs/saloon-v297/explore/design-teaser/04-2021/images/mercedes-eq-eqs-v297-highlights-hotspot-start-interior-5600x2800-04-2021.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/comfort/driving-comfort/_jcr_content/par/videoimageslider/slides/videoimageslide/image.MQ6.12.2x.20200909155349.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/saloon-wv223/comfort/highlights/08-2020/images/mercedes-benz-s-class-wv223-comfort-mbux-hotspot-start-5600x2800-08-2020.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_828561571/image.MQ6.6.2x.20210518114535.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-z223/comfort/highlights-mbux/10-2020/images/mercedes-maybach-s-class-z223-comfort-mbux-hotspot-360-5600x2800-10-2020.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/explore/design-highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210806155321.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt//content/dam/hq/passengercars/cars/eqs/saloon-v297/explore/design-teaser/04-2021/images/mercedes-eq-eqs-v297-highlights-hotspot-start-interior-5600x2800-04-2021.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/comfort/driving-comfort/_jcr_content/par/videoimageslider/slides/videoimageslide/image.MQ6.12.2x.20200909155349.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/saloon-wv223/comfort/highlights/08-2020/images/mercedes-benz-s-class-wv223-comfort-mbux-hotspot-start-5600x2800-08-2020.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_828561571/image.MQ6.6.2x.20210518114535.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-z223/comfort/highlights-mbux/10-2020/images/mercedes-maybach-s-class-z223-comfort-mbux-hotspot-360-5600x2800-10-2020.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/explore/design-highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210806155321.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt//content/dam/hq/passengercars/cars/eqs/saloon-v297/explore/design-teaser/04-2021/images/mercedes-eq-eqs-v297-highlights-hotspot-start-interior-5600x2800-04-2021.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/comfort/driving-comfort/_jcr_content/par/videoimageslider/slides/videoimageslide/image.MQ6.12.2x.20200909155349.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/saloon-wv223/comfort/highlights/08-2020/images/mercedes-benz-s-class-wv223-comfort-mbux-hotspot-start-5600x2800-08-2020.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_828561571/image.MQ6.6.2x.20210518114535.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-z223/comfort/highlights-mbux/10-2020/images/mercedes-maybach-s-class-z223-comfort-mbux-hotspot-360-5600x2800-10-2020.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/explore/design-highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210806155321.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt//content/dam/hq/passengercars/cars/eqs/saloon-v297/explore/design-teaser/04-2021/images/mercedes-eq-eqs-v297-highlights-hotspot-start-interior-5600x2800-04-2021.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/comfort/driving-comfort/_jcr_content/par/videoimageslider/slides/videoimageslide/image.MQ6.12.2x.20200909155349.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/saloon-wv223/comfort/highlights/08-2020/images/mercedes-benz-s-class-wv223-comfort-mbux-hotspot-start-5600x2800-08-2020.jpg",
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
            "https://www.mercedes-benz.pt/passengercars/mercedes-benz-cars/models/s-class/mercedes-maybach-z223/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_828561571/image.MQ6.6.2x.20210518114535.jpeg",
          panoramicImage:
            "https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-z223/comfort/highlights-mbux/10-2020/images/mercedes-maybach-s-class-z223-comfort-mbux-hotspot-360-5600x2800-10-2020.jpg",
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
