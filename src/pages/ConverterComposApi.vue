<template>
	<div class="mt-10 container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<pre>
				{{ selectQuery }}
				
			</pre
			>
			<div class="flex justify-around">
				<div>
					<select v-model="selectQuery">
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
						class="m-3"
						v-for="ticker in selectedValute"
						:key="ticker.CharCode"
						:ticker="ticker"
					/>
				</div>

				<pre>{{}}</pre>

				<div>
					<select>
						<option
							v-for="valute in valutesWithBase"
							:key="valute.CharCode"
							:value="valute.Value"
						>
							{{ valute.CharCode }}
						</option>
					</select>
					<div class="inline-block">
						<label class="m-6" for="secondValute">SecondCoinNominal</label>
						<input type="text" id="secondValute" />
					</div>

					<valute-item
						class="m-3"
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

import { useValutesWithBase } from "../hooks/useValutesWithBase";
import { useSelected } from "../hooks/useSelected";

export default {
	components: { ValuteItem },

	data() {
		return {};
	},

	setup() {
		const { valutesWithBase } = useValutesWithBase();
		const { selectQuery, selectedValute } = useSelected(valutesWithBase);
		const { secondSelectQuery, secondSelectedValute } = useSelected(valutesWithBase);

		return {
			valutesWithBase,
			selectQuery,
			selectedValute,
		};
	},
};
</script>
