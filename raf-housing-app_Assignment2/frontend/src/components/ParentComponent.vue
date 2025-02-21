<script>
    import ChildComponent from '../components/ChildComponent.vue'

    export default {
        name: 'ParentComponent',
        components: {
            ChildComponent
        },
        data() {
            return {
                parentMessage: "Hello, from Parent"
            }
        },
        methods: {
            handleCustomEvent(dataFromChild) {
                this.parentMessage = dataFromChild;
            }
        }
    }

</script>

<template>
    <div>
        <h2>Parent Data: {{ parentMessage }}</h2>
        <child-component :someProp="parentMessage" @customEvent="handleCustomEvent"/>
    </div>
</template>

<style>

</style>