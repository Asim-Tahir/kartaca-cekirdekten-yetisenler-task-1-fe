<template>
	<div id="wrapper">
		<h1>Login</h1>
		<form action="" method="post">
		
			<label for="username">Kullanıcı Adı:</label>
			<input 
				type="text"
				autocomplete="username"
				name="username"
				id="username"
			>

			<label for="pass">Şifre:</label>
			<input 
				type="password"
				autocomplete="current-password"
				name="pass"
				id="pass"
			>

			<button type="submit">Giriş Yap</button>
		
		</form>
	</div>
</template>

<style lang="scss">
	@import '@/scss/variables.scss';
	@import '@/scss/colors.scss';

	#wrapper{
		margin-left: auto;
		margin-right: auto;
		margin-top: 100px;
		width: 500px;
		height: auto;
		border-radius: $radii-half;
		background-color: $white;
		padding: 50px;

		h1 {
			text-align: center;
			margin-left: auto;
			margin-right: auto;
		}
		
		form {
			width: 100%;

			label {
				font-weight: bold	;
				display: block;
				padding-top: 10px;
				padding-bottom: 10px;
			}

			input {
				width: 90%;
				padding: 10px 20px;
				border: 3px solid $border;
				font-size: 20pt;
				border-radius: $radii-half;
			}

			button{
				width: 100%;
				padding: 10px 20px;
				border: 3px solid $border;
				border-radius: $radii-full;
				font-size: 20px;
				font-family: inherit;
				font-weight: bold;
				background-color: $red;
				border-color: $border;
				box-shadow: 0 5px 10px $border;
				transition: .3s all;
				color: $white;

				&:hover{
					transition: .3s all;
					background-color: $border;
					cursor: pointer;
					box-shadow: 0 10px 20px $border;
					transform: translateY(-5px);
					color: $black;
				}
			}
		}
	}

	@media screen and (max-width: 768px){
		#wrapper{
			width: 400px;
		}
	}

	@media screen and (max-width: 600px) {
		#wrapper{
			width: 300px;
		}
	}

	@media screen and (max-width: 480px) {
		#wrapper{
			width: 200px;
		}
	}
</style>