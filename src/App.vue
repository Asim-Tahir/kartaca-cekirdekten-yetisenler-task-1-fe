<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">
	@import '@/scss/normalize.min.scss';
	@import '@/scss/colors.scss';
	@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap&subset=latin-ext');

	body{
		font-family: 'Quicksand', sans-serif;
		font-size: 18pt;
		background-color: $primary;

		input{
			font-family: inherit;
			margin-bottom: 25px;

			&:focus{
				outline: none;
			}
		}
	}
</style>
