import { createRouter, createWebHistory } from "vue-router";
import ListOfCurrVuex from "../pages/ListOfCurrVuex.vue";
import ListOfCurrComposition from "../pages/ListOfCurrComposition.vue";
import Converter from "../pages/Converter.vue";

const routes = [
	{
		path: "/",
		component: ListOfCurrVuex,
	},
	{
		path: "/composition",
		component: ListOfCurrComposition,
	},
	{
		path: "/converter",
		component: Converter,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
