<script setup>

    import { ref, onMounted } from 'vue'
    import { useUserStore } from '../stores/userStore'
    import { useLeaderboardStore } from '../stores/leaderboardStore'

    const userStore = useUserStore()
    const leaderboardStore = useLeaderboardStore()

    onMounted(async () => {
        try {
            leaderboardStore.fetchLeaderboard(leaderboardStore.selectedCount)
        } catch (err) {
            console.log(err)
        }
    })
</script>


<template>
    <div>
        <p v-if="userStore.user">
            Logged in as: {{ userStore.user.username }} <br>
            Email: {{ userStore.user.email }}
        </p>
        <p v-else>
            You are not logged in.
        </p>
    </div>

    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in leaderboardStore.leaderboardData" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.score }}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>


<style scoped>

    .leaderboard-summary {
        margin-top: 10px;
        position: fixed;
        left: 0;
    }

    table{
        margin: 0 auto;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #ccc;
        padding: 1px;
    }
</style>