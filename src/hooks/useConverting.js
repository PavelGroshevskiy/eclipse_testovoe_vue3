// const APP_ID = "05b34da61e09423ca2fd783cd2dea7bf";
// 	const f = await fetch("https://openexchangerates.org/api/latest.json");

var fx = require("money");
import { ref, computed, onMounted } from "vue";

export const useConverting = (valutes) => {
	const convertingValutes = ref([]);
	const formatedValutes = ref([]);

	const fetching = async () => {
		formatedValutes.value = await fetch("https://www.cbr-xml-daily.ru/latest.js").then(
			(data) => data.json().then(console.log())
		);
		console.log(formatedValutes.value);
	};

	const convert = computed((base, rates, nominal) => {
		fx.base = "USD";
		fx.rates = {
			EUR: 0.745101, // eg. 1 USD === 0.745101 EUR
			GBP: 0.64771, // etc...
			HKD: 7.781919,
			USD: 1, // always include the base rate (1:1)
		};

		// Check money.js has finished loading:
		if (typeof fx !== "undefined" && fx.rates) {
			fx.rates;
			fx.base;
		} else {
			// If not, apply to fxSetup global:
			const fxSetup = {
				rates: fx.rates,
				base: fx.base,
				nominal: nominal,
			};
		}
		// console.log(fx(100).from("USD").to("GBP"));
		// console.log(valutes.value);
		console.log(formatedValutes);

		// return (convertValute = fx(nominal).from("USD").to("GBP"));
	});

	onMounted(fetching);

	return { convertingValutes, convert, formatedValutes };
};
