import "./bootstrap";

import { createApp } from "vue";

import App from "./components/App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import colors from "vuetify/util/colors";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.red.darken1, // #E53935
                    secondary: colors.red.lighten4, // #FFCDD2
                },
            },
        },
    },
});

import router from "./router/index.js";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
