<template>
	<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
		<valute-item v-for="ticker in tickers" :key="ticker.ID" :ticker="ticker" />
	</dl>
</template>

<script>
import valuteItem from "./ValuteItem.vue";
import MyButton from "./UI/MyButton.vue";

export default {
	components: { valuteItem, MyButton },
	data() {
		return {};
	},
	props: {
		tickers: {
			type: Array,
			required: true,
		},
	},

	computed: {},
};
</script>
