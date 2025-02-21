<template>
    <div id="app">
        <header>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/leaderboard">Leaderboard</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </header>

        <main>
            <router-view />
        </main>

        <!--WE can put footer here-->
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 200px;
        background-color: #f1f1f1;
        position: fixed;
        top: 0;
        left: 0; 
    }

    li a {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: green;
        color: white;
    }
</style>