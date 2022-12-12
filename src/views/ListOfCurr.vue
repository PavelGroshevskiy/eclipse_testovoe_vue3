<template>
	<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			{{ base }}
			<div class="w-full my-4"></div>

			<!-- <template v-if="tickers.length"> -->
			<!-- PAGINATION AND FILTER -->
			<div>
				<button
					class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
				>
					Назад
				</button>
				<button
					@click="con"
					class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
				>
					Вперед
				</button>
				<div>Фильтр: <input /></div>
			</div>
			<hr class="w-full border-t border-gray-600 my-4" />

			<!-- TICKER CARD -->
			<valute-card :tickers="tickers" />

			<hr class="w-full border-t border-gray-600 my-4" />
			<!-- </template> -->
		</div>
	</div>
</template>

<script>
const fx = require("money");
import ValuteCard from "../components/valuteCard.vue";
export default {
	components: { ValuteCard },

	data() {
		return {
			tickers: {},
			base: String,
		};
	},
	created() {},

	computed: {},

	methods: {
		fetchingValutes() {
			setInterval(async () => {
				const f = await fetch("https://www.cbr-xml-daily.ru/");
				const data = await f.json();
				this.tickers = data.rates;
				this.base = data.base;
				console.log(data);

				// const convertValutesOnArray = Object.entries(data.Valute).map((el) => el[1]);
				// this.tickers = convertValutesOnArray;

				// const growFailFetch = convertValutesOnArray.map((arr) =>
				// 	arr.Value > arr.Previous ? true : false
				// );
				// this.growFail = growFailFetch;
			}, 5000);
		},
		con() {
			// fx.base = "RUB";
			// fx.rates = {
			// 	EUR: 0.745101, // eg. 1 USD === 0.745101 EUR
			// 	GBP: 0.64771, // etc...
			// 	HKD: 7.781919,
			// 	RUB: 1, // always include the base rate (1:1)
			// 	/* etc */
			// };
			// fx.convert(200).from("USD");

			// Check money.js has finished loading:
			if (typeof fx !== "undefined" && fx.rates) {
				fx.rates = data.rates;
				fx.base = data.base;
			} else {
				// If not, apply to fxSetup global:
				var fxSetup = {
					rates: data.rates,
					base: data.base,
				};
			}
		},
	},

	watch: {},
	mounted() {
		this.fetchingValutes();
	},
};
</script>
