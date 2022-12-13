<template>
	<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<div class="w-full my-4"></div>

			<template v-if="tickers.length">
				<!-- PAGINATION AND FILTER -->
				<div class="flex justify-between">
					<div>Фильтр: <input v-model="filter" /></div>

					<my-select
						:options="selectValuteOptions"
						v-model:model-value="selectedValute"
					/>
				</div>
				<hr class="w-full border-t border-gray-600 my-4" />

				<!-- TICKER CARD -->
				<valute-card :tickers="filteredList()" :base="base" />
				<hr class="w-full border-t border-gray-600 my-4" />
			</template>
		</div>
	</div>
</template>

<script>
import MySelect from "../components/MySelect.vue";
import ValuteCard from "../components/valuteCard.vue";
export default {
	components: { ValuteCard, MySelect },

	data() {
		return {
			tickers: [],
			base: "",
			filter: "",
			page: 1,
			selectedValute: "",
			selectValuteOptions: [],
		};
	},
	created() {},

	computed: {},

	methods: {
		fetchingValutes() {
			setInterval(async () => {
				const f = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
				const data = await f.json();
				const convertValutesOnArray = Object.entries(data.Valute).map((el) => el[1]);
				this.tickers = convertValutesOnArray;
				this.selectValuteOptions = convertValutesOnArray.map((valute) => ({ valute }));
				console.log(convertValutesOnArray);
			}, 5000);
		},
		filteredList() {
			return this.tickers.filter((ticker) =>
				ticker.Name.toLowerCase().includes(this.filter)
			);
		},
	},

	watch: {},
	mounted() {
		this.fetchingValutes();
	},
};
</script>
