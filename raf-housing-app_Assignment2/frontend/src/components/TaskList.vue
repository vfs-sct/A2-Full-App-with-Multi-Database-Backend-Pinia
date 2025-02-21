<script>
    export default {
        name: 'TaskList',
        data() {
            return {
                tasks: [],
                loading: true,
                errorMessage: ''
            }
        },
        mounted() {
            setTimeout(() => {
                const simulatedError = false
                if (simulatedError) {
                    this.errorMessage = "Failed to load task";
                } else {
                    this.tasks = ['Eat Ramen', 'Play Satisfactory', 'Not sleep'];
                }
                this.loading = false
            }, 1000)
        }
    }
</script>

<template>
    <div>
        <h3>Task list</h3>
        <p v-if="loading">Loading tasks...</p>
        <p v-else-if="tasks.length === 0">No Task found.</p>
        <ul v-else>
            <li v-for="(task, i) in tasks" :key="i">
                {{task}}
            </li>
        </ul>

        <p v-if="errorMessage" class="error">Error: {{errorMessage}}</p>
    </div>
</template>

<style>

</style>