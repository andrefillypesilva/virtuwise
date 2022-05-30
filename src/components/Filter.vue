<template>
    <section class="filter">
      <form>
        <div class="filter__item">
          <span class="material-symbols-outlined select-icon">directions_car</span>
          <select name="sel__segment" id="sel__segment">
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
        <div class="filter__item">
          <span class="material-symbols-outlined select-icon">sell</span>
          <select name="sel__brand" id="sel__brand">
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
        <div class="filter__item">
          <span class="material-symbols-outlined select-icon">electrical_services</span>
          <select name="sel__fuel-type" id="sel__fuel-type">
            <option value="">Fuel Type</option>
            <option value="0">Hybrid</option>
            <option value="1">Electric</option>
            <option value="2">Gasoline</option>
            <option value="3">Gas</option>
          </select>
          <span class="material-symbols-outlined arrow-down">expand_more</span>
        </div>
      </form>
    </section>
</template>

<script lang="ts">
    export default {
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

select, option {
    -webkit-appearance: none;
}

.arrow-down {
    right: 8px;
    left: auto !important;
}

.filter {
    width: 93rem;
    margin: 0 auto;
    display: grid;
    padding: 1.5rem;
    grid-gap: 3.5rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
    margin-bottom: 1rem;
    background-color: $light-color;
    border-radius: 1rem;
    border-bottom: $shadow-border;

    form {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    &__item {
        position: relative;
        margin: 1rem;

        span {
            position: absolute;
            top: 8px;
            left: 10px;
            color: $secondary-color;
        }

        select {
            @include default-input;
        }
    }

    @include respond(tab-land) {
        width: calc(100% - 8rem);
        margin: 2.5rem 2.5rem 0 2.5rem;

        span {
            top: 6px;
        }

        select {
            padding: 1rem 4rem;
            width: calc(100% - 8rem);
        }
    }

    @include respond(tab-port) {
        &__item {
            .select-icon {
                display: none;
            }

            select {
                padding: 1rem;
                width: calc(100% - 2rem);
            }
        }
    }

    @include respond(phone) {
        span {
            top: 5px;
            right: 4px;
        }
    }
}
</style>
