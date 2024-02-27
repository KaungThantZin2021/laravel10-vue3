import "./bootstrap";

import { createApp } from "vue";

import App from "./components/App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// import colors from "vuetify/util/colors";

import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false
            },
        },
    },
    icons: {
        defaultSet: "mdi",
    },
});

import router from "./router/index.js";

const app = createApp(App);
app.config.globalProperties.$goBack = () => {
    router.back();
}
app.config.globalProperties.$limitString = (str, maxLength = 100) => {
    if (str.length > maxLength) {
        return str.substr(0, maxLength) + '...';
    } else {
        return str;
    }
}
app.use(vuetify);
app.use(router);
app.mount("#app");
