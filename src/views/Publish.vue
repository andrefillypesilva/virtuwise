<template>
    <section class="publish">
        <h1 class="publish__title">Publish your 360º project</h1>
        <h3 class="publish__description">Fill the following informations and launch your project!</h3>
        <form class="publish__form">
            <input type="text" name="vehicleName" id="vehicleName"
                class="publish__form--item" placeholder="Vehicle Name" />
            <div class="publish__form--year-mileage-box">
                <input type="text" name="vehicleYear" id="vehicleYear"
                    class="publish__form--item" placeholder="Vehicle Year" />
                <input type="text" name="mileage" id="mileage"
                    class="publish__form--item" placeholder="Mileage" />
            </div>
            <div class="publish__form--item">
                <span class="material-symbols-outlined select-icon">electrical_services</span>
                <select name="fuelType" id="fuelType">
                    <option value="">Fuel Type</option>
                    <option value="0">Hybrid</option>
                    <option value="1">Electric</option>
                    <option value="2">Gasoline</option>
                    <option value="3">Gas</option>
                </select>
                <span class="material-symbols-outlined arrow-down">expand_more</span>
            </div>
            <div class="publish__form--item">
                <span class="material-symbols-outlined select-icon">directions_car</span>
                <select name="segment" id="segment">
                    <option value="">
                        Segment
                    </option>
                    <option value="0">Cabrio</option>
                    <option value="1">Citadino</option>
                    <option value="2">Coupé</option>
                    <option value="3">SUV / TT</option>
                    <option value="4">Sedan</option>
                </select>
                <span class="material-symbols-outlined arrow-down">expand_more</span>
            </div>
            <div class="publish__form--item">
                <span class="material-symbols-outlined select-icon">sell</span>
                <select name="brand" id="brand">
                    <option value="">Brand</option>
                    <option value="0">Audi</option>
                    <option value="1">BMW</option>
                    <option value="2">Citroën</option>
                    <option value="3">Dacia</option>
                    <option value="4">Fiat</option>
                    <option value="5">Honda</option>
                    <option value="6">Hyunday</option>
                    <option value="7">Mercedes-Benz</option>
                    <option value="8">Toyota</option>
                    <option value="9">Volvo</option>
                    <option value="10">VW</option>
                </select>
                <span class="material-symbols-outlined arrow-down">expand_more</span>
            </div>
            <input type="text" name="location" id="location"
                class="publish__form--item" placeholder="Location" />
            <div class="publish__form--download-box">
                <div class="publish__form--item publish__form--item-download">
                    <span class="material-symbols-outlined">image</span>
                    <h5>Upload here a <span>cover</span> image for the vehicle card.</h5>
                </div>
                <div class="publish__form--item publish__form--item-download">
                    <span class="material-symbols-outlined">360</span>
                    <h5>Upload here a <span>panoramic</span> image for the vehicle card.</h5>
                </div>
            </div>
            <Button
                title="Launch my project"
                class="publish__form--item publish__form--button"
                icon="rocket_launch"
                to="/success"
            />
        </form>
    </section>
</template>

<script lang="ts">
    import Button from '../components/Button.vue';
    export default {
        components: {
            Button,
        },
        props: [],
        mounted () {

        },
        data () {
            return {

            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../assets/style/_variables.scss";
    @import "../assets/style/_mixins.scss";
    .publish {
        @include form-container;

        &__form {
            &--item {
                &-download {
                    @include download-box;

                    h5 {
                        font-size: 1.6rem;
                        font-weight: 400;
                    }

                    span {
                        position: initial;
                        font-weight: 700;
                    }

                    &:not(:last-child) {
                        margin-bottom: 0;
                    }

                    @include respond(phone) {
                        h5 {
                            font-size: 2rem;
                        }
                    }
                }

                @include respond(phone) {
                    span {
                        top: 2rem;
                        left: 3rem;
                    }
                }
            }

            &--download-box, &--year-mileage-box {
                display: flex;
                gap: 2rem;
                margin-bottom: 2rem;
                width: 100%;

                .publish__form--item {
                    margin-bottom: 0;
                }

                @include respond(phone) {
                    flex-wrap: wrap;
                    padding: 0;
                }
            }
        }
    }
</style>
