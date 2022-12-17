<template>
	<div class="mt-10 container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<div class="flex justify-between">
				<my-select />
				<my-input />
			</div>
		</div>
	</div>
</template>

<script>
import MySelect from "../components/UI/MySelect.vue";
export default {
	components: { MySelect },
};
</script>
