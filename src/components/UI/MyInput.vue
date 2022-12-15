<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
	name: "my-input",
	props: {
		modelValue: { type: String },
	},
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
