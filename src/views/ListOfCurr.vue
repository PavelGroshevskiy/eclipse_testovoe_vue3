<template>
	<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<button
				@click="fetchingValutes"
				class="my-4 mb-8 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
			>
				Обновить списки валют
			</button>
			<!-- PAGINATION AND FILTER -->
			<div class="flex justify-between">
				<div>Фильтр: <input v-model="filter" /></div>

				<my-select
					:options="selectValuteOptions"
					v-model:model-value="selectedValute"
					@change="changeCourse"
				/>
			</div>
			<hr class="w-full border-t border-gray-600 my-4" />

			<!-- TICKER CARD -->
			<valute-list v-if="!isTickersLoading" :tickers="filteredList" />
			<div v-else>Loading...</div>
			<hr class="w-full border-t border-gray-600 my-4" />
		</div>
	</div>
</template>

<script>
import MySelect from "../components/MySelect.vue";
import ValuteList from "../components/valuteList.vue";
export default {
	components: { ValuteList, MySelect },

	data() {
		return {
			tickers: [],
			filter: "",
			selectedValute: "",
			selectValuteOptions: [],
			isTickersLoading: false,
		};
	},
	created() {},

	computed: {},

	methods: {
		fetchingValutes() {
			try {
				this.isTickersLoading = true;
				setTimeout(async () => {
					const f = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
					const data = await f.json();
					const convertValutesOnArray = Object.entries(data.Valute).map((el) => el[1]);
					this.tickers = convertValutesOnArray;
					this.selectValuteOptions = convertValutesOnArray.map((valute) => ({ valute }));
					// console.log(convertValutesOnArray);
					this.isTickersLoading = false;
				}, 1000);
			} catch (e) {
				console.log(e);
			}
		},

		changeCourse() {
			try {
				const findTickerOnSelect = this.tickers.find(
					(item) => item.CharCode === this.selectedValute
				);
				const findTickerOnSelectValue = findTickerOnSelect.Value;

				// CHANGE VALUTERATES ON SELECT
				const changedRate = this.tickers.map((el) => {
					const curse = el.Value / el.Nominal;
					const Value =
						el.Nominal > 1
							? findTickerOnSelectValue / curse
							: findTickerOnSelectValue / el.Value;
					const CharCode = el.CharCode;
					const Name = el.Name;

					return { Name: Name, CharCode: CharCode, Value: Value, Nominal: el.Nominal };
				});
				this.tickers = changedRate;
			} catch (e) {
				console.log(e);
			}
		},
	},

	watch: {},
	mounted() {
		this.fetchingValutes();
	},
	computed: {
		filteredList() {
			return this.tickers.filter((ticker) =>
				ticker.Name.toLowerCase().includes(this.filter)
			);
		},
	},
};
</script>
