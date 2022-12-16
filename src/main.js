import { createApp } from "vue";
import App from "./App.vue";
import route from "./route";
import store from "./store";
import components from "./components/UI";

import "./assets/tailwind.css";

const app = createApp(App);

components.forEach((component) => {
	app.component(component.name, component);
});

app.use(store).use(route).mount("#app");
