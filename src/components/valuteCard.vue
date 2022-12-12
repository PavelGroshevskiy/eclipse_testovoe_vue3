<template>
	<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
		<div
			v-for="(value, name) in tickers"
			:key="name"
			:class="{}"
			class="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
		>
			<div class="px-4 py-5 sm:p-6 text-center">
				<dt class="text-2xl font-medium truncate">
					{{ name }}
				</dt>
				<dd class="mt-1 text-xl font-semibold text-gray-400">
					{{ value.toFixed(2) }}
				</dd>

				<!-- v-for="(bool, idx) in growFailArray" :key="idx" -->
				<span class="inline-block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-red-300"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
						/>
					</svg>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-green-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
						/>
					</svg>
				</span>
			</div>
		</div>
	</dl>
</template>

<script>
export default {
	data() {},
	props: {
		tickers: {
			type: Object,
			required: true,
		},
	},
	methods: {
		differenceValute(val) {
			const dif = val.Value - val.Previous;
			return dif.toFixed(2);
		},
	},

	computed: {},
};
</script>
