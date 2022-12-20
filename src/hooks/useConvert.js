import { useValutesWithBase } from "./useValutesWithBase";
import { computed, ref } from "vue";

export const useConvert = (init = {}) => {
	const sorted = ref("");
	const { valutesWithBase } = useValutesWithBase();

	const selectedValute = computed(() => {
		return valutesWithBase.value.filter((el) =>
			el.CharCode.toLowerCase().includes(sorted.value)
		);
	});

	return selectedValute;
};
