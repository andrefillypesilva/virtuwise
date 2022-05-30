<template>
    <section class="vehicle-card" @click="!isBigCard && call360Viewer(vehicle)">
        <figure class="vehicle-card__figure" :class="{ 'big-figure': isBigCard }">
            <img :src="vehicle.image" :alt="vehicle.title" v-if="!isBigCard" />
            <Scene :vehicle="vehicle" v-if="isBigCard" />
            <figcaption
                class="vehicle-card__figure--caption"
                :class="{ 'big-card': isBigCard }"
                 @click="isBigCard && call360Viewer(vehicle)"
            >
                <h5 class="big-card__tag" v-if="isBigCard">Preview 360° version</h5>
                <h4>{{ vehicle.title }}</h4>
                <ul>
                    <li v-for="option in vehicle.options" :key="option">{{ option }}</li>
                </ul>
                <h6>
                    <span class="material-symbols-outlined">my_location</span> {{ vehicle.location.placeName }}, {{ vehicle.location.address }}
                </h6>
            </figcaption>
            <Icon v-if="isBigCard" />
        </figure>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Vehicle from '../models/Vehicle';
    import StoreService from '../services/StoreService';
    import { CardType } from '../models/CardType';
    import Scene from './360Scene.vue';
    import Icon from './360Icon.vue';

    export default defineComponent({
        components: { Scene, Icon },
        props: {
            vehicle: {
                type: Object as () => Vehicle,
                default: {},
            },
            type: {
                type: Object as () => CardType,
                default: CardType.NORMAL,
            }
        },
        mounted () {

        },
        data () {
            return {

            }
        },
        methods: {
            call360Viewer(vehicle: Vehicle): void {
                StoreService.setVehicle(vehicle);
                this.$router.push('/360viewer');
            }
        },
        computed: {
            isBigCard(): boolean {
                return this.type === CardType.BIG;
            }
        }
    });
</script>

<style scoped lang="scss">
@import '../assets/style/_variables.scss';
@import '../assets/style/_mixins.scss';

.vehicle-card {
    width: 100%;
    overflow: hidden;
    background-color: $light-color;
    border-radius: .8rem;
    border-bottom: $shadow-border;

    &__figure {
        filter: grayscale(50%);
        transition: all .2s;
        
        img {
            width: 100%;
        }

        &--caption {
            font-size: 1.2rem;
            padding: 1.2rem 1.2rem 1.8rem 1.2rem;

            h4 {
                transition: all .2s;
            }

            h6 {
                display: flex;
                align-items: center;
                margin-top: 1rem;

                span {
                    font-size: 1.5rem;
                    padding-right: .25rem;
                    margin-top: -0.2rem;
                }
            }

            ul > li {
                display: inline-block;
                font-size: 1rem;
                padding: 5px 5px 5px 0;

                &:not(:last-child) {
                    &:after {
                        background-color: $dark-color;
                        border: 1px solid $dark-color;
                        border-radius: 50%;
                        content: "";
                        height: 3px;
                        width: 3px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 5px;
                    }
                }
            }

            &.big-card {
                padding: 1.2rem 2rem 1.8rem 2rem;
                position: relative;

                h4 {
                    font-size: 2rem;
                }

                h6 {
                    font-size: 1.2rem;
                }
            }

            .big-card {
                &__tag {
                    position: absolute;
                    top: -1.5rem;
                    background-color: $primary-color;
                    color: $light-color;
                    padding: .5rem 1rem;
                    border-radius: .5rem;

                    @include respond(tab-land) {
                        top: -2.2rem;
                    }

                    @include respond(tab-port) {
                        top: -2rem;
                        font-size: 1.4rem;
                    }

                    @include respond(tab-phone) {
                        top: -2.8rem;
                        font-size: 1.6rem;
                    }
                }
            }

            @include respond(tab-land) {
                font-size: 1.6rem;
                padding: 1.4rem;

                ul > li {
                    font-size: 1.4rem;
                }
            }

            @include respond(tab-port) {
                font-size: 2rem;
                padding: 1.8rem;

                ul > li {
                    font-size: 1.8rem;
                }
            }

            @include respond(phone) {
                font-size: 2.5rem;
                padding: 2rem;

                ul > li {
                    font-size: 2rem;
                }
            }
        }
    }

    .big-figure {
        filter: grayscale(0);
    }

    &:hover > &__figure {
        filter: grayscale(0);
        cursor: pointer;
        
        h4 {
            color: $secondary-color;
        }
    }

    @include respond(tab-land) {
        border-radius: 1.2rem;
    }

    @include respond(tab-port) {
        border-radius: 1.6rem;
    }

    @include respond(phone) {
        border-radius: 2rem;
    }
}
</style>
