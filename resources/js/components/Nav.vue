<template>
    <div>
        <v-app-bar class="px-3" flat density="compact">
            <v-btn
                class="ma-2"
                density="comfortable"
                icon="mdi-arrow-left"
                variant="tonal"
                @click="$goBack"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-tabs v-if="true" centered color="grey-darken-2">

                <router-link v-for="link in links" :key="link" :to="link.path">
                    <v-tab :text="link.name"></v-tab>
                </router-link>

            </v-tabs>

            <v-spacer></v-spacer>

            <div>
                <router-link to="/login">
                    <v-btn
                        class="ma-2"
                        density="comfortable"
                        variant="tonal"
                    >Login</v-btn>
                </router-link>

                <router-link to="/register">
                    <v-btn
                        class="ma-2"
                        density="comfortable"
                        variant="tonal"
                    >Register</v-btn>
                </router-link>

                <v-avatar
                    class="hidden-sm-and-down"
                    color="grey-darken-1"
                    size="32"
                ></v-avatar>
            </div>
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
];
</script>
