<template>
	<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<button
				@click="fetchValutes"
				class="my-4 mb-8 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
			>
				Обновить списки валют
			</button>

			<!-- PAGINATION AND FILTER -->
			<div class="flex justify-between">
				<div>
					Фильтр:
					<my-input :model-value="filter" @update:model-value="setFilter" />
				</div>

				<my-select
					:options="valuteOptions"
					:model-value="selectedValute"
					@update:model-value="setSelect"
					@change="convertValute"
				/>
			</div>
			<hr class="w-full border-t border-gray-600 my-4" />

			<!-- TICKER CARD -->
			<valute-list v-if="!isValuteLoading" :tickers="filteredValuteList" />
			<div v-else>Loading...</div>
			<hr class="w-full border-t border-gray-600 my-4" />
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import MySelect from "../components/MySelect.vue";
import ValuteList from "../components/valuteList.vue";
import MyInput from "../components/UI/MyInput.vue";
import { convert } from "../utils/convert.js";

export default {
	components: { ValuteList, MySelect, MyInput },

	data() {
		return {};
	},
	created() {},

	methods: {
		...mapActions({
			fetchValutes: "valute/fetchValutes",
			convertValute: "valute/convertValute",
		}),
		...mapMutations({
			setFilter: "valute/setFilter",
			setSelect: "valute/setSelect",
		}),

		// changeCourse() {
		// 	try {
		// 		const findTickerOnSelect = this.valutes.find(
		// 			(item) => item.CharCode === this.selectedValute
		// 		);
		// 		const findTickerOnSelectValue = findTickerOnSelect.Value;
		// 		console.log(findTickerOnSelectValue);

		// 		// CHANGE VALUTERATES ON SELECT
		// 		const changedRate = this.valutes.map((el) => {
		// 			const curse = el.Value / el.Nominal;
		// 			const Value =
		// 				el.Nominal > 1
		// 					? findTickerOnSelectValue / curse
		// 					: findTickerOnSelectValue / el.Value;
		// 			const CharCode = el.CharCode;
		// 			const Name = el.Name;

		// 			return { Name: Name, CharCode: CharCode, Value: Value, Nominal: el.Nominal };
		// 		});
		// 		this.valutes = changedRate;
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// },
	},

	computed: {
		...mapState({
			valutes: (state) => state.valute.valutes,
			valuteOptions: (state) => state.valute.valuteOptions,
			filter: (state) => state.valute.filter,
			selectedValute: (state) => state.valute.selectedValute,
			isValuteLoading: (state) => state.valute.isValuteLoading,
		}),

		...mapGetters({
			filteredValuteList: "valute/filteredValuteList",
		}),
	},

	watch: {},
	mounted() {
		this.fetchValutes();
	},
};
</script>
