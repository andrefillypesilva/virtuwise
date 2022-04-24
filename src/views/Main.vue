<script lang="ts">
  import Header from '@/structure/Header.vue';
  import Footer from '@/structure/Footer.vue';
  import VehicleCard from '@/components/VehicleCard.vue';

  export default {
    components: {
      Header,
      Footer,
      VehicleCard,
    },
    props: {
      msg: { type: String, default: '' },
    },
    data() {
      return {
        vehicles: [{
          title: 'Renault Captur 0.9 TCE Exclusive',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNnbjhuODhkbXF3YTMtU1REVlRMUFQiLCJ3IjpbeyJmbiI6IjZtZ2p3bHA3a2dkYjItU1REVlRMUFQiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.GD9jldFIKpapKi7wYEaAKQOcHRzgkIYkUdGiiF3dap0/image;s=1080x720',
          options: ['2014', '72 819 km', 'Gasolina', 'SUV / TT']
        }, {
          title: 'Nissan Micra 1.0 G Acenta',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImQyeHJwam1zNm95eS1TVERWVExQVCIsInciOlt7ImZuIjoiNm1nandscDdrZ2RiMi1TVERWVExQVCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.LZoqrQSISq_AhrrPXbN0owCp_ASV7pKgIZnIduqHm1k/image;s=1080x720',
          options: ['2018', '75 125 km', 'Gasolina', 'Citadino']
        }, {
          title: 'Renault Captur 0.9 TCE Exclusive',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNnbjhuODhkbXF3YTMtU1REVlRMUFQiLCJ3IjpbeyJmbiI6IjZtZ2p3bHA3a2dkYjItU1REVlRMUFQiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.GD9jldFIKpapKi7wYEaAKQOcHRzgkIYkUdGiiF3dap0/image;s=1080x720',
          options: ['2014', '72 819 km', 'Gasolina', 'SUV / TT']
        }, {
          title: 'Nissan Micra 1.0 G Acenta',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImQyeHJwam1zNm95eS1TVERWVExQVCIsInciOlt7ImZuIjoiNm1nandscDdrZ2RiMi1TVERWVExQVCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.LZoqrQSISq_AhrrPXbN0owCp_ASV7pKgIZnIduqHm1k/image;s=1080x720',
          options: ['2018', '75 125 km', 'Gasolina', 'Citadino']
        },{
          title: 'Renault Captur 0.9 TCE Exclusive',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNnbjhuODhkbXF3YTMtU1REVlRMUFQiLCJ3IjpbeyJmbiI6IjZtZ2p3bHA3a2dkYjItU1REVlRMUFQiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.GD9jldFIKpapKi7wYEaAKQOcHRzgkIYkUdGiiF3dap0/image;s=1080x720',
          options: ['2014', '72 819 km', 'Gasolina', 'SUV / TT']
        }, {
          title: 'Nissan Micra 1.0 G Acenta',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImQyeHJwam1zNm95eS1TVERWVExQVCIsInciOlt7ImZuIjoiNm1nandscDdrZ2RiMi1TVERWVExQVCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.LZoqrQSISq_AhrrPXbN0owCp_ASV7pKgIZnIduqHm1k/image;s=1080x720',
          options: ['2018', '75 125 km', 'Gasolina', 'Citadino']
        }, {
          title: 'Renault Captur 0.9 TCE Exclusive',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNnbjhuODhkbXF3YTMtU1REVlRMUFQiLCJ3IjpbeyJmbiI6IjZtZ2p3bHA3a2dkYjItU1REVlRMUFQiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.GD9jldFIKpapKi7wYEaAKQOcHRzgkIYkUdGiiF3dap0/image;s=1080x720',
          options: ['2014', '72 819 km', 'Gasolina', 'SUV / TT']
        }, {
          title: 'Nissan Micra 1.0 G Acenta',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImQyeHJwam1zNm95eS1TVERWVExQVCIsInciOlt7ImZuIjoiNm1nandscDdrZ2RiMi1TVERWVExQVCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.LZoqrQSISq_AhrrPXbN0owCp_ASV7pKgIZnIduqHm1k/image;s=1080x720',
          options: ['2018', '75 125 km', 'Gasolina', 'Citadino']
        }]
      }
    }
  }
</script>

<template>
  <Header />
    <section class="main">
      <div class="main__item" v-for="vehicle in vehicles" :key="vehicle.title">
        <VehicleCard
          :title="vehicle.title"
          :image="vehicle.image"
          :options="vehicle.options"
        />
      </div>
    </section>
  <Footer />
</template>

<style lang="scss">
@import '../assets/style/_mixins.scss';
.main {
  @include default-container;
}
</style>
