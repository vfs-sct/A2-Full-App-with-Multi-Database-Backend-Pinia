<script>
    export default {
        name: 'UserPage',
        data() {
            return {
                username: 'loading...'
            }
        },
        computed: {
            userId() {
                return this.$route.params.id;
            }
        },
        mounted() {
            this.username = 'Player' + this.userId;
        }
    }
</script>

<template>
    <div>
        <h1>User Details</h1>
        <p>User ID: {{ userId}}</p>
        <p>Name: {{username}}</p>
    </div>
</template>

<style>

</style>