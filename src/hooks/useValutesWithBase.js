import { ref, onMounted, reactive } from "vue";
var fx = require("money");

export function useValutesWithBase() {
	const isValuteLoading = ref(true);
	const valutesWithBase = ref([]);

	const fetching = async () => {
		try {
			const dataFormatValues = await fetch("https://www.cbr-xml-daily.ru/latest.js").then(
				(data) => data.json()
			);

			dataFormatValues.rates.RUB = 1; // ADD RUB FOR MONEY.JS

			let valute = [];
			for (let key in dataFormatValues.rates) {
				valute.push({ CharCode: key, Value: dataFormatValues.rates[key] });
			}

			valutesWithBase.value = valute;

			isValuteLoading.value = false;
		} catch (e) {
			console.log(e);
		} finally {
			isValuteLoading.value = false;
		}
	};

	onMounted(fetching);

	return { valutesWithBase, isValuteLoading };
}
