<template>
  <section class="viewer">
    <Button title="Go back to the catalog view" :isBackButton="true" />
    <a-scene embedded>
      <a-assets>
        <img id="background" crossorigin="anonymous" :src="vehicle.panoramicImage" />
      </a-assets>

      <a-camera id="camera" position="0 1.6 0">
        <a-cursor
          id="cursor"
          animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 50; from: 0.1 0.1 0.1; to: 1 1 1"
          animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 500; from: 1 1 1; to: 0.6 0.6 0.6"
          animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
          cursor="fuse: true;"
          material="color: #fff; shader: flat"
          position="0 0 -2"
          geometry="primitive: ring"
          color="#fff"
          raycaster="objects: .link"
        >
        </a-cursor>
        <a-text :value="vehicle.brand" position="-2.32 3.9 -5"></a-text>
        <a-text :value="vehicle.title" position="-2.75 4.3 -6"></a-text>
      </a-camera>

      <a-sky src="#background" phi-start="90" radius="360" width="1000"></a-sky>

      <!-- ACTION BUTTONS -->
      <!-- DETAILS -->
      <a-entity mb-btn-group="position: -2.5 2.2 -6">
        <a-sphere mb-btn="name: details; position: .5 -.12 0"></a-sphere>
        <a-sphere
          mb-btn="name: details; position: 0 0 -1.5; opacity: .4; radius: .4; color: #00adef; animation: none"
        ></a-sphere>
      </a-entity>

      <!-- CABIN -->
      <a-entity mb-btn-group="position: 3 1 -6">
        <a-sphere mb-btn="name: cabin; position: -.75 .15 0"></a-sphere>
        <a-sphere
          mb-btn="name: cabin; position: 0 0 -2; opacity: .6; radius: .4; color: #00adef; animation: none"
        ></a-sphere>
      </a-entity>

      <!-- DESCRIPTION LABELS -->
      <!-- CAR DETAILS -->
      <a-entity
        mb-label-group="name: details; visible: false; position: 0 .5 -6;"
      >
        <a-text mb-label="value: Car details; position: -2.75 3.1 0"></a-text>
        <a-text
          v-for="detail in carDetails"
          :key="detail"
          :mb-label="detail"
        ></a-text>
      </a-entity>

      <!-- CABIN -->
      <a-entity
        mb-label-group="name: cabin; visible: false; position: 1.5 .5 -8"
      >
        <a-text
          mb-label="value: Cabin information:; position: 2.1 2.5 0; align: right"
        ></a-text>
        <a-text
          v-for="detail in cabinDetails"
          :key="detail"
          :mb-label="detail"
        ></a-text>
      </a-entity>
    </a-scene>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StoreService from "../services/StoreService";
import AFrameService from "../services/AFrameService";
import Button from '../components/Button.vue';

export default defineComponent({
  components: { Button },
  props: [],
  mounted() {
    AFrameService.registerComponents();
  },
  unmounted() {
    AFrameService.destroyComponents();
  },
  data() {
    return {
      vehicle: StoreService.getVehicle(),
    };
  },
  methods: {},
  computed: {
    carDetails(): string[] {
      return [
        `value: Year and usage: ${this.vehicle.options[0]} / ${this.vehicle.options[1]}; position: -3.65 3.2 -2`,
        `value: Fuel type: ${this.vehicle.options[2]}; position: -3.65 2.9 -2`,
        `value: Category: ${this.vehicle.options[3]}; position: -3.65 2.6 -2`,
      ];
    },
    cabinDetails(): string[] {
      return [
        `value: Year and usage: ${this.vehicle.options[0]} / ${this.vehicle.options[1]}; position: 3 2.3 -2; align: right`,
        `value: Fuel type: ${this.vehicle.options[2]}; position: 3 2 -2; align: right`,
        `value: Category: ${this.vehicle.options[3]}; position: 3 1.7 -2; align: right`,
      ];
    },
  },
});
</script>

<style lang="scss">
@import "../assets/style/_variables.scss";
@import "../assets/style/_mixins.scss";
.viewer {
  @include default-container;
  grid-gap: 2rem;

  a-scene {
    grid-column: 1 / -1;
    height: 80vh;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid $neutral-primary-color;
  }
}
</style>
