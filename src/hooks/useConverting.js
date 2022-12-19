// const APP_ID = "05b34da61e09423ca2fd783cd2dea7bf";
// 	const f = await fetch("https://openexchangerates.org/api/latest.json");

var fx = require("money");

import { ref, computed, onMounted, reactive } from "vue";
import { useValutesWithBase } from "./useValutesWithBase";

export const useConverting = () => {
	const convertingValutes = ref([]);
	const formatedValutes = ref([]);

	const { valutesWithBase, isValuteLoading } = useValutesWithBase();

	// console.log(valutesWithBase);

	const convert = computed((base, rates, nominal) => {});

	return { convert };
};
