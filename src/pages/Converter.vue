<template>
	<div class="mt-10 container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<div class="flex justify-around">
				<div>
					<select name="">
						<option></option>
					</select>
					<div class="inline-block">
						<label class="m-6" for="firstValute">FirstCoinNominal</label>
						<input type="text" id="firstValute" />
					</div>
				</div>

				<div>
					<select name="" id="">
						<option value="2">2222</option>
					</select>
					<div class="inline-block">
						<label class="m-6" for="secondValute">SecondCoinNominal</label>
						<input type="text" id="secondValute" />
					</div>
				</div>
			</div>
			<!-- <valute-list :tickers="valutesWithBase" /> -->
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	setup() {
		return {};
	},

	methods: {
		...mapActions({
			fetchValutes: "valute/fetchValutes",
		}),
	},

	computed: {
		...mapState({
			valutes: (state) => state.valute.valutes,
		}),
	},
	mounted() {
		this.fetchValutes();
	},
};
</script>

<style lang="scss" scoped></style>
