<template>
    <div class="leaderboard-page">
        <h1>This is a leaderboard-Page</h1>
        <p>This is the lead2erboard page :).</p>

        <leaderboard-summary />
    </div>
</template>

<script>
    import LeaderboardSummary from '../components/LeaderboardSummary.vue'

    export default {
        name: 'LeaderboardPage',
        components: {
            LeaderboardSummary,
        },
    }
</script>

<style>
</style>