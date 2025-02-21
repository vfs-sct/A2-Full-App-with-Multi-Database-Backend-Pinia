import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null
    }),
    actions: {
        async login(email) {
            try {
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                })

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || 'Login failed');
                }

                this.user = await response.json();
            } catch (err) {
                console.error('Login error:', err.message);
                throw err;
            }
        },

        logout() {
            this.user = null;
        }
    }
});