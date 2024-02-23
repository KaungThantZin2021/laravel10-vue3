<template>
    <v-app id="inspire">

        <Nav/>

        <router-view></router-view>

    </v-app>
</template>

<script setup>
import Nav from "./Nav.vue";
</script>
