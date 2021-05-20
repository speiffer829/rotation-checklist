<template>
	<div id="navbar">
		<div class="wrap">
			<div class="mobile-row">
				<button>
					Stats 
					<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2L9.5 9.74194L2 2" stroke="#5386E4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>

				<button>
					<svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="4.80435" cy="4.80435" r="4.80435" fill="#5386E4"/>
						<ellipse cx="17" cy="4.80435" rx="5.17391" ry="4.80435" fill="#5386E4"/>
						<circle cx="29.1957" cy="4.80435" r="4.80435" fill="#5386E4"/>
					</svg>
				</button>
			</div>

			<div class="menu-box">
				<button @click="$emit('modeChange')">Dark Mode</button>
				<button>Log Out</button>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	name:"Nav",
}
</script>


<style lang="scss" scoped>
	#navbar{
		width: 100%;
		box-shadow: var(--base-shadow);
		background: var(--baselighter);
	}

	.mobile-row{
		display: flex;
		justify-content: space-between;
		padding: .5rem 0 .2rem;

		@media screen and (min-width: 768px) {
			display: none;
		}

		button{
			display: flex;
			align-items: center;
			background: transparent;
			border: none;
			color: var(--text);
			font-size: 1.255em;
			padding: 0px;

			svg{
				margin-left: 5px;
			}
		}
	}
</style>