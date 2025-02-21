<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useUserStore } from '../stores/UserStore';

    const userStore = useUserStore()

    const email = ref('')

    onMounted(() => {

    })

    async function handelLogin() {
        try {
            await userStore.login(email.value);
        } catch (err) {
            alert(err.message);
        }
    }

    function logout() {
        userStore.logout();
    }

</script>

<template>
    <div>
        <div v-if="!userStore.user">
            <h1>Login</h1>
            <input v-model="email"
                   type="email"
                   placeholder="Enter your email" />
            <button @click="handelLogin">Login</button>
        </div>
        <div v-else>
            <h1>Welcome, {{ userStore.user.username}}</h1>
            <p>Email: {{ userStore.user.email }}</p>
            <button @click="logout">Logout</button>
        </div>
    </div>


</template>

<style>
</style>