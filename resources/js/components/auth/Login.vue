<template>
    <div>
        <v-card
            class="mx-auto my-6 pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
        >
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>

            <v-text-field
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
            ></v-text-field>

            <div
                class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
                Password

                <a
                    class="text-caption text-decoration-none text-blue"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Forgot login password?</a
                >
            </div>

            <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
            ></v-text-field>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
                Log In
            </v-btn>

            <v-card-text class="text-center">
                <router-link to="/register">
                    <a
                        class="text-blue text-decoration-none"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                    </a>
                </router-link>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        visible: false,
    }),
};
</script>
