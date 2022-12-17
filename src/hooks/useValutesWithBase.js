import { ref, onMounted } from "vue";
var fx = require("money");

export function useValutes() {
	const isValuteLoading = ref(true);
	const valutesWithBase = ref([]);

	const fetching = async () => {
		try {
			const dataFormatValues = await fetch("https://www.cbr-xml-daily.ru/latest.js").then(
				(data) => data.json()
			);
			fx.base = dataFormatValues.base;
			fx.rates = dataFormatValues.rates;

			valutes.value = convertValutesOnArray;

			isValuteLoading.value = false;
		} catch (e) {
			console.log(e);
		} finally {
			isValuteLoading.value = false;
		}
	};

	onMounted(fetching);

	return {
		valutes,
		isValuteLoading,
		valuteOptions,
	};
}
