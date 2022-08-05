const { isTypescript } = require("../utils/helper")

exports.vueStubs = function(name){

    if(isTypescript()){
        return {
            stub:tsStub(name),
            extension:'vue'
        }
    }

    return {
        stub:jsStub(name),
        extension:'vue'
    }
}


/**
 * VUE COMPONENT TS STUB
 * @param {*} name
 * @returns
 */
function tsStub(name){
    return `
<template>
</template>

<script>
    import {defineComponent} from 'vue'

    export default definedComponent({
        name:'${name}',
        setup(){

        }
    })

</script>

<style lang="scss">
</style>`
}

/**
 * VUE COMPONENT JS STUB
 * @param {*} name
 * @returns
 */
function jsStub(name){
    return `
<template>
</template>

<script>
    export default {
        name:'${name}',
        setup(){

        }
    }
</script>

<style lang="scss">
</style>`
}
