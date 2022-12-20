import { ref, computed } from "vue";

export const useFilteredValutes = (valutes) => {
	const filter = ref("");

	const filteredValutes = computed(() => {
		return valutes.value.filter((valute) =>
			valute.Name.toLowerCase().includes(filter.value)
		);
	});

	return { filteredValutes, filter };
};
