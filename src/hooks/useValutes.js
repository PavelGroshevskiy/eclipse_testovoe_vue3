import { ref, onMounted } from "vue";
import { loadValutesData } from "../utils/api";
import { ELEMENT_OF_VALUTE_ARRAY } from "../utils/constants";

export function useValutes() {
	const isValuteLoading = ref(true);
	const valutes = ref([]);
	const valuteOptions = ref([]);

	const fetching = async () => {
		try {
			const dataValutes = await loadValutesData();
			const convertValutesOnArray = Object.entries(dataValutes.Valute).map(
				(el) => el[ELEMENT_OF_VALUTE_ARRAY]
			);
			valutes.value = convertValutesOnArray;
			valuteOptions.value = convertValutesOnArray.map((valute) => ({ valute }));
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
