<template>
    <div class="contact-page">
        <h1>Contact Page</h1>
    </div>
    <div>
        <UserInfo />
    </div>

</template>

<script>
    import UserInfo from '../components/UserInfo.vue'

    export default {
        name: 'ContactPage',
        components: {
            UserInfo
        }
    }
</script>

<style scoped>
    .contact-page {
        text-align: center;
        margin-top: 20px;
    }
</style>