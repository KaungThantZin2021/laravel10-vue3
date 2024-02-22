<template>
    <v-app id="inspire">
        <v-app-bar class="px-3" flat density="compact">
            <v-avatar
                color="grey-darken-1"
                class="hidden-md-and-up"
                size="32"
            ></v-avatar>

            <v-spacer></v-spacer>

            <v-tabs centered color="grey-darken-2">
                <v-tab v-for="link in links" :key="link" :text="link"></v-tab>
            </v-tabs>
            <v-spacer></v-spacer>

            <v-avatar
                class="hidden-sm-and-down"
                color="grey-darken-1"
                size="32"
            ></v-avatar>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="12" md="2">
                        <v-sheet rounded="lg" min-height="268">
                            <!--  -->
                        </v-sheet>
                    </v-col>

                    <v-col cols="12" md="8">
                        <v-card class="mb-4">
                            <v-card-actions>
                                <v-btn color="primary" variant="tonal"
                                    >Create Post</v-btn
                                >
                            </v-card-actions>
                        </v-card>

                        <div v-for="blog in blogs" :key="blog.id">
                            <v-card
                                :title="blog.title"
                                subtitle="Subtitle"
                                :text="blog.body"
                                class="mb-4"
                            >
                                <v-card-actions>
                                    <v-btn variant="tonal">Click me</v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </v-col>

                    <v-col cols="12" md="2">
                        <v-sheet rounded="lg" min-height="268">
                            <!--  -->
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";

const links = ["Dashboard", "Messages", "Profile", "Updates"];

const blogs = ref([]);

const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            blogs.value.push(...data);
        })
        .catch((error) => {
            console.log("Error fetching blog posts:", error);
        });
};

onMounted(() => {
    getData();
});
</script>
