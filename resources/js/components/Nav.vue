<template>
    <div>
        <v-app-bar class="px-3" flat density="compact">
            <v-avatar
                color="grey-darken-1"
                class="hidden-md-and-up"
                size="32"
            ></v-avatar>

            <v-spacer></v-spacer>

            <v-tabs centered color="grey-darken-2">

                <router-link v-for="link in links" :key="link" :to="link.path">
                    <v-tab :text="link.name"></v-tab>
                </router-link>

            </v-tabs>
            <v-spacer></v-spacer>

            <v-avatar
                class="hidden-sm-and-down"
                color="grey-darken-1"
                size="32"
            ></v-avatar>
        </v-app-bar>
    </div>
</template>

<script setup>
const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Profile',
        path: '/profile'
    }
]
</script>
