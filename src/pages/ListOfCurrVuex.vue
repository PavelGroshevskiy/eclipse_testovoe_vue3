<template>
	<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4 mt-5">
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
import MySelect from "../components/UI/MySelect.vue";
import ValuteList from "../components/ValuteList.vue";
import MyInput from "../components/UI/MyInput.vue";

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
	},

	computed: {
		...mapState({
			valutes: (state) => state.valute.valutes,
			valuteOptions: (state) => state.valute.valuteOptions,
			filter: (state) => state.valute.filter,
			selectedValute: (state) => state.valute.selectedValute,
			isValuteLoading: (state) => state.valute.isValuteLoading,
			convertedValutes: (state) => state.valute.convertedValutes,
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
