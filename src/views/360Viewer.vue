<template>
    <a-scene>
        <a-assets>
            <img id="background" :src="vehicle.panoramicImage" />
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
                raycaster="objects: .clickable">
            </a-cursor>
            <a-text :value="vehicle.brand" position="-2.32 3.9 -5"></a-text>
            <a-text :value="vehicle.title" position="-2.75 4.3 -6"></a-text>
        </a-camera>
        
        <a-sky src="#background" phi-start="90" radius="360" width="1000"></a-sky>
    </a-scene>
</template>

<script lang="ts">
    import StoreService from '../services/StoreService';
    export default {
        props: [],
        mounted () {
            
        },
        data () {
            return {
                vehicle: StoreService.getVehicle(),
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style scoped lang="scss">
    .viewer {

    }
</style>
