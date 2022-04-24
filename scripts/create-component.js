const fs = require('fs');

// provided arguments
const componentType = process.argv['2'];
let componentName = process.argv['3'];

if (componentName) {
    // it converts snake-case to camelCase
    componentName = componentName.toLowerCase().replace(/([-_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());
}

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
