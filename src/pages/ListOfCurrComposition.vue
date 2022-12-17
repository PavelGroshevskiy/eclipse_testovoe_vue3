<template>
	<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4 mt-5">
		<div class="container">
			<!-- {{ convert }} -->

			<!-- <button
				class="my-4 mb-8 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
			>
				Обновить списки валют
			</button> -->

			<div class="flex justify-between">
				<div>
					Фильтр:
					<my-input v-model="filter" />
				</div>
			</div>
			<hr class="w-full border-t border-gray-600 my-4" />

			<valute-list v-if="!isValuteLoading" :tickers="filteredValutes" />
			<div v-else>Loading...</div>
			<hr class="w-full border-t border-gray-600 my-4" />
		</div>
	</div>
</template>

<script>
import MySelect from "../components/UI/MySelect.vue";
import ValuteList from "../components/valuteList.vue";
import MyInput from "../components/UI/MyInput.vue";
import { useValutes } from "../hooks/useValutes.js";
import { useFilteredValutes } from "../hooks/useFilteredValutes.js";
import { useConverting } from "../hooks/useConverting.js";

export default {
	components: { ValuteList, MySelect, MyInput },

	data() {
		return {};
	},
	setup() {
		const { isValuteLoading, valutes, valuteOptions } = useValutes();
		const { filteredValutes, filter } = useFilteredValutes(valutes);
		const { convertValute, convert, formatedValutes } = useConverting(valutes);

		return {
			isValuteLoading,
			valutes,
			valuteOptions,
			filteredValutes,
			filter,
			convertValute,
			convert,
			formatedValutes,
		};
	},
};
</script>
