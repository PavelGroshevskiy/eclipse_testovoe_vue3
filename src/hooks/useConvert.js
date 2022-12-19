import { useValutesWithBase } from "./useValutesWithBase";
import { computed } from "vue";

export const useConvert = (init = {}) => {
	const { valutesWithBase } = useValutesWithBase();
	// console.log(valutesWithBase.value);
	// valutesWithBase.map((el) => console.log(el));

	const filteredValutes = computed(() => {
		return valutesWithBase.value.filter((valute) => valute.CharCode.includes("AMD"));
	});

	console.log(init);

	for (let [key, value] of Object.entries(init)) {
		// init[key] = valutesWithBase.value;
		// console.log(init);
	}

	return filteredValutes;
};
