<template>
	<div class="navbar">
		<div class="navbar__btns">
			<my-button @click="$router.push('/')">Список Валют (Store)</my-button>
			<my-button @click="$router.push('/composition')"
				>Список Валют (Composition)</my-button
			>
			<my-button @click="$router.push('/converter')">Конвертер </my-button>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
	height: 70px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	padding: 0 15px;
}
</style>
