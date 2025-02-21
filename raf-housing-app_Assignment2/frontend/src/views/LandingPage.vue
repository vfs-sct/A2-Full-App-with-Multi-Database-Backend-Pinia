<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, where we house them rafs</h1>
        <p>This is the landing page :).</p>

    </div>
</template>

<script>
    import TaskList from '../components/TaskList.vue'
    import ParentComponent from '../components/ParentComponent.vue'

    export default {
        name: 'LandingPage',
        name: 'LeaderboardPage',
        components: {
            TaskList,
            ParentComponent
        },
    }
</script>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 20px;
    }
</style>