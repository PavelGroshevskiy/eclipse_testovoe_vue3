<template>
	<select :value="modelValue" @change="changeOption">
		<option selected value="">Российский рубль</option>
		<option v-for="option in options" :key="option" :value="option.valute.CharCode">
			{{ option.valute.Name }}
		</option>
	</select>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		options: {
			type: Array,
			default: () => [],
		},
		modelValue: { type: String },
	},
	methods: {
		changeOption(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
