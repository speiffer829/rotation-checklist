<template>
	<div id="signupin-page">
		
		<div>
			<svg width="120" height="107.059" viewBox="0 0 102 91" fill="none" id="check-logo" xmlns="http://www.w3.org/2000/svg">
				<circle cx="42.7547" cy="47.4151" r="37.7547" stroke="#69DC9E" stroke-width="10"/>
				<path d="M24 37L44.6981 57.1321L96.3302 5.5" stroke="var(--text)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			<Nuxt />
		</div>
		
	</div>
</template>


<style lang="scss">
	#signupin-page{
		min-height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.form-box{
			max-width: 355px;
			width: 95%;
			margin: 0 auto;
			border-radius: 10px;

			input{
				width: 100%;
				display: block;
				font-size: 1.2em;
				box-shadow: var(--base-shadow);
				padding: .5rem 1rem;
				margin-bottom: 1rem;
				border-radius: 5px;
				border: solid 2px var(--light);
				color: var(--dark);
				background: var(--light);

				&:focus{

				}
			}

			.submit-btn{
				width: 100%;
				background: var(--blue);
				color: var(--light);
				border-radius: 5px;
				font-size: 1.5em;
				padding: .7rem 1rem;
				box-shadow: var(--base-shadow);
				margin: 1.3rem 0;

				&:hover{
					background: var(--text);
					color: var(--blue);
				}
			}

			.switch-page{
				text-align: center;
				width: 100%;
				color: var(--blue);
				font-size: 1.5em;
				display: block;
				margin-top: 1.5rem;

				&:hover{
					color: var(--text);
				}
			}
		}
	}

	#check-logo{
		margin: 0 auto 2rem;
		display: block;
		
	}
</style>