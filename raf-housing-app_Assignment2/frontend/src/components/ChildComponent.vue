<script>
    export default {
        name: 'ChildComponent',
        props: {
            someProp: {
                type: String,
                required: true
            }
        },
        methods: {
            sendToParent() {
                this.$emit('customEvent', 'Hello, Parent, im your child!')
            }
        }
    }
</script>

<template>
    <div>
        <p>Child Recived: {{someProp}}</p>
        <button @click="sendToParent">Send Event to Parent</button>
    </div>
</template>

<style>

</style>