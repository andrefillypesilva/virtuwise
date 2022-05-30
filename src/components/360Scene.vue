<template>
  <section class="scene">
    <a-scene embedded>
      <a-assets>
        <img id="background" crossorigin="anonymous" v-if="vehicle" :src="vehicle.panoramicImage" />
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
      </a-camera>

      <a-sky src="#background" phi-start="90" radius="360" width="1000"></a-sky>
    </a-scene>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../components/Button.vue';
import Vehicle from '../models/Vehicle';

export default defineComponent({
  components: { Button },
  props: {
    vehicle: {
      type: Object as () => Vehicle,
    }
  },
  mounted() {},
  data() {},
  methods: {},
  computed: {},
});
</script>

<style lang="scss">
@import "../assets/style/_mixins.scss";
.scene {
  a-scene {
    height: 37rem;

    @include respond(tab-land) {
      height: 59rem;
    }

    @include respond(tab-port) {
      height: 40rem;
    }

    @include respond(tab-phone) {
      height: 30rem;
    }
  }
}
</style>
