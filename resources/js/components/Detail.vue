<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="2">

            </v-col>

            <v-col cols="12" md="8">
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
                        {{ blog.content }}
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="2">

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

import { ref, onMounted } from "vue";

const blog = ref({});

const getData = async () => {
    await fetch(`https://jsonplaceholder.org/posts/${route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
            blog.value = data;
        })
        .catch((error) => {
            console.log("Error fetching blog posts:", error);
        });
};

onMounted(() => {
    getData();
});

</script>
