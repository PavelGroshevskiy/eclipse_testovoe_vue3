<template>
	<div class="mt-10 container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<pre></pre>

			<div class="flex justify-around">
				<div>
					<select name="">
						<option
							v-for="valute in valutesWithBase"
							:key="valute.CharCode"
							:value="valute.Value"
						>
							{{ valute.CharCode }}
						</option>
					</select>
					<div class="inline-block">
						<label class="m-6" for="firstValute">FirstCoinNominal</label>
						<input type="text" id="firstValute" />
					</div>
					<valute-item
						v-for="ticker in valutesWithBase"
						:key="ticker.CharCode"
						:ticker="ticker"
					/>
				</div>

				<div>
					<select name="" id="">
						<option
							v-for="valute in valutesWithBase"
							:key="valute.CharCode"
							:value="valute.Value"
						>
							{{ valute.CharCode }}
						</option>
						<span>{{}}</span>
					</select>
					<div class="inline-block">
						<label class="m-6" for="secondValute">SecondCoinNominal</label>
						<input type="text" id="secondValute" />
					</div>
					<valute-item
						v-for="ticker in valutesWithBase"
						:key="ticker.CharCode"
						:ticker="ticker"
					/>
				</div>
			</div>
			<!-- <valute-list :tickers="valutesWithBase" /> -->
		</div>
	</div>
</template>

<script>
import ValuteItem from "../components/valuteItem.vue";
import { useConvert } from "../hooks/useConvert";
import { useValutesWithBase } from "../hooks/useValutesWithBase";

export default {
	components: { ValuteItem },
	setup() {
		// const { convert } = useConverting();
		const { valutesWithBase } = useValutesWithBase();
		const { filteredValutes } = useConvert();

		const con = useConvert({
			valuteFirst: {
				valuteOptions: ["sad", "fdgf"],
				option: "",
				ticker: { 1: "first" },
			},
			valuteSecond: { valuteOptions: [], ticker: {} },
		});

		// console.log(convert);
		// console.log(fx(100).from("USD").to("RUB"));

		return {
			con,
			valutesWithBase,
		};
	},
};
</script>
