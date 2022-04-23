const fs = require('fs');

const componentType = process.argv['2'];
const componentName = process.argv['3'];

if (componentType && componentName) {
const componentTemplate = `<template>
    <section class="${componentName}">
        <h1>${componentName} Component</h1>
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

<style scoped lang="scss">
    .${componentName} {

    }
</style>
`;

    const componentPath = componentType === 'component' || componentType === 'c' ? './src/components/' : componentType === 'view' || componentType === 'v' ? './src/views/' : '';

    if (!fs.existsSync(componentPath)) {
        fs.mkdirSync(componentPath, { recursive: true });
    }

    fs.appendFile(`${componentPath + componentName.charAt(0).toUpperCase() + componentName.slice(1)}.vue`, componentTemplate, () => {
        console.log(`The ${componentName} was created successifully in ${componentPath} folder!`);
    });
} else {
    console.log(`This component can not be created, maybe because you did not provide right arguments. Try again!`);
}
