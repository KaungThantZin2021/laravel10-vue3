<template>
    <v-app id="inspire">

        <Nav/>

        <v-main class="bg-grey-lighten-3">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup>
import Nav from "./Nav.vue";
</script>
