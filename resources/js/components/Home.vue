<template>
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
                        <router-link to="/create">
                            <v-btn color="green-darken-1" variant="tonal"
                            ><v-icon>mdi-plus</v-icon> Create Post</v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>

                <v-card :class="blogLoader ? 'd-inline' : 'd-none'">
                    <v-skeleton-loader
                        class="mx-auto border mb-4"
                        type="image, article"
                        v-for="i in 3" :key="i"
                    ></v-skeleton-loader>
                </v-card>

                <div v-for="blog in blogs" :key="blog.id">
                    <v-card
                        class="mb-4"
                    >
                        <v-img
                            :src="blog.image"
                            height="200px"
                            cover
                        ></v-img>

                        <v-card-title>
                            {{ blog.title }}
                        </v-card-title>

                        <div class="d-flex flex-row">
                            <v-card-subtitle>{{ blog.publishedAt }}</v-card-subtitle>
                            <v-card-subtitle>{{ blog.status }}</v-card-subtitle>
                            <v-card-subtitle>{{ blog.category }}</v-card-subtitle>
                        </div>

                        <v-card-text>
                            {{ $limitString(blog.content) }}
                        </v-card-text>

                        <v-card-actions>
                            <router-link :to="`/detail/${blog.id}`">
                                <v-btn variant="tonal">Read more</v-btn>
                            </router-link>
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
</template>

<script setup>
import { ref, onMounted } from "vue";

const blogs = ref([]);
const blogLoader = ref(true);

const getData = async () => {
    blogLoader.value = true;
    await fetch("https://jsonplaceholder.org/posts")
        .then((response) => response.json())
        .then((data) => {
            blogs.value.push(...data);
            blogLoader.value = false;
        })
        .catch((error) => {
            console.log("Error fetching blog posts:", error);
            blogLoader.value = false;
        });
};

onMounted(() => {
    getData();
});
</script>
