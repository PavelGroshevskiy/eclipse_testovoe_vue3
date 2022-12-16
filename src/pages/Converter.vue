<template>
	<div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
		<div class="container">
			<div class="flex justify-between">
				<div>
					<my-input :model-value="filter" @update:model-value="setFilter" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>
