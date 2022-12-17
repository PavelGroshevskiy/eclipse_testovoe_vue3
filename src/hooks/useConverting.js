// const APP_ID = "05b34da61e09423ca2fd783cd2dea7bf";
// 	const f = await fetch("https://openexchangerates.org/api/latest.json");

var fx = require("money");
import { ref, computed, onMounted, reactive } from "vue";

export const useConverting = (valutes) => {
	const convertingValutes = ref([]);
	const formatedValutes = ref([]);
	const f = reactive({});

	console.log(f);
	const fetching = async () => {
		const dataFormatValues = await fetch("https://www.cbr-xml-daily.ru/latest.js").then(
			(data) => data.json()
		);

		fx.base = dataFormatValues.base;
		fx.rates = dataFormatValues.rates;

		//
	};

	const convert = computed((base, rates, nominal) => {
		debugger;

		// Check money.js has finished loading:
		console.log(fx(100).from("USD").to("GBP"));
		// console.log(fx.base);
	});

	onMounted(fetching);

	return { convertingValutes, convert, formatedValutes };
};
