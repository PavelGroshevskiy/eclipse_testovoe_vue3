<template>
	<div class="mt-10 container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<pre>
				{{ con }}

			</pre
			>

			<div class="flex justify-around">
				<div>
					<select v-model="valutesWithBase.CharCode" name="">
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
				</div>

				<div>
					<select name="sel" id="">
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
import { computed } from "@vue/runtime-core";
import { useConvert } from "../hooks/useConvert";
import { useValutesWithBase } from "../hooks/useValutesWithBase";

export default {
	props: {
		dd: String,
	},

	setup(props) {
		// const { convert } = useConverting();
		const { valutesWithBase } = useValutesWithBase();
		const { filteredValutes } = useConvert();

		const con = useConvert({
			valuteFirst: {
				valuteOptions: ["sad", "fdgf"],
				ticker: { 1: "first" },
				nominal: "100",
			},
			valuteSecond: { valuteOptions: filteredValutes, ticker: {}, nominal: "" },
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
