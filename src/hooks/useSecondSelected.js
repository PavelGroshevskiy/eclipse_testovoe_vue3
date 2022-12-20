import { ref, computed } from "vue";

export const useSelected = (valute) => {
	const selectQuery = ref("");
	const secondSelectedValute = ref([]);

	const selectedValute = computed(() => {
		return valute.value.filter((el) =>
			el.CharCode.toLowerCase().includes(selectQuery.value)
		);
	});

	return { selectQuery, selectedValute, secondSelectedValute };
};
