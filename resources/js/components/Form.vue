<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="2">
                <v-sheet rounded="lg" min-height="268">
                    <!--  -->
                </v-sheet>
            </v-col>

            <v-col cols="12" md="8">
                <v-card class="pa-10">
                    <form @submit.prevent="submit">
                        <v-text-field
                            v-model="title.value.value"
                            :counter="10"
                            :error-messages="title.errorMessage.value"
                            label="Title"
                        ></v-text-field>

                        <v-textarea
                          v-model="description.value.value"
                          :error-messages="description.errorMessage.value"
                          label="Description"
                        ></v-textarea>

                        <v-btn class="me-4" type="submit" color="green-darken-1" variant="tonal"> submit </v-btn>

                        <v-btn @click="handleReset" color="red-darken-1" variant="tonal"> clear </v-btn>
                    </form>
                </v-card>
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
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        title(value) {
            if (value?.length >= 2) return true;

            return "Title needs to be at least 2 characters.";
        },
        description(value) {
            if (value?.length) return true;

            return "The description field is required.";
        },
    },
});
const title = useField("title");
const description = useField("description");

const submit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
});
</script>
