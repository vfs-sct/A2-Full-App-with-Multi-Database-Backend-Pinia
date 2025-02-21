import { defineStore } from 'pinia'

export const useLeaderboardStore = defineStore('leaderboard', {
    state: () => ({
        leaderboardData: [],
        selectedCount: 10
    }),

    actions: {
        async fetchLeaderboard(count = 10) {
            try {
                const response = await fetch(`http://localhost:3000/api/leaderboard?count=${count}`);
                const result = await response.json();
                if (result.success) {
                    this.leaderboardData = result.data
                } else {
                    console.error('server return an error:', result.error)
                }
            } catch (error) {
                console.error('Failed to fetch:', error)
            }
        }
    }
})