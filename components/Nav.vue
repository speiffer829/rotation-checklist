<template>
	<div id="navbar">
		<div class="wrap flex">
				<button class="nav-btns mobile-only">
					Stats 
					<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2L9.5 9.74194L2 2" stroke="#5386E4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>

				<p class="welcome">Hello, {{getUser.name || ''}}</p>

				<button class="nav-btns dots" @click="showMenu = !showMenu">
					<svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="4.80435" cy="4.80435" r="4.80435" fill="#5386E4"/>
						<ellipse cx="17" cy="4.80435" rx="5.17391" ry="4.80435" fill="#5386E4"/>
						<circle cx="29.1957" cy="4.80435" r="4.80435" fill="#5386E4"/>
					</svg>
				</button>

			
			<transition name="menu-trans">
				<div class="menu-box" v-if="showMenu" @blur="showMenu = false">
					<button @click="$emit('modeChange')">{{mode}} Mode</button>
					<button @click="$emit('logout')">Log Out</button>
				</div>
			</transition>
			
		</div>
	</div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
	name:"Nav",
	props:{
		mode: String
	},
	data() {
		return {
			showMenu: false
		}
	},
	watch:{
		showMenu: function () {
			if(this.showMenu === true){
				document.querySelector('body').addEventListener('click', this.closeThing)
			}else{
				console.log( 'foobar' )
				document.querySelector('body').removeEventListener('click', this.closeThing)
			}
		}
	},
	methods: {
		closeThing(e){
			if(!e.target.closest('.dots') && !e.target.closest('.menu-box')){
				this.showMenu = false
			}
		}
	},
	computed: {
		...mapGetters([
			'getUser',
		])
	},
}
</script>


<style lang="scss" scoped>
	#navbar{
		width: 100%;
		box-shadow: var(--base-shadow);
		background: var(--baselighter);
		padding-top: 1rem;
		padding-bottom: 0.3rem;
	}

	.flex{
		display: grid; 
		align-items: center;
		grid-template-columns: 76px 1fr 76px;
		position: relative;

		@media screen and (min-width: 767px) {
			grid-template-columns: 1fr 76px;
		}
	}

	.welcome{
		flex: 0 0 auto;
		text-align: center;
		font-size: 1.5em;

		@media screen and (min-width: 767px) {
			text-align: left;
		}
	}

	

	.nav-btns{
		display: flex;
		align-items: center;
		background: transparent;
		border: none;
		color: var(--text);
		font-size: 1.255em;
		padding: 0px;
		height: 100%;

		@media screen and (min-width: 767px) {
			&.mobile-only{
				display: none;
			}
		}

		&.dots{
			display: flex;
			justify-content: flex-end;
		}

		svg{
			margin-left: 5px;
		}
	}

	.menu-box{
		position: absolute;
		right: 10px;
		top: calc(100% + 5px);
		background: var(--baselighter);
		width: 200px;
		border-radius: 5px;
		filter: drop-shadow(var(--base-shadow));

		
		@media screen and (min-width: 1440px) {
			right: 0px;
		}

		
		&:after{
			content:'';
			border-bottom: 15px solid var(--baselighter);
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			width: 0;
			height: 0;
			position: absolute;
			right: 7px;
			top: -15px;
		}

		button{
			display: block;
			width: 100%;
			font-size: 1.25em;
			background: var(--baselighter);
			color: var(--text);
			padding: 0.5rem;
			border-bottom: solid 1px var(--base);
			text-transform: capitalize;

			&:first-of-type{
				border-radius: 5px 5px 0 0;
			}
			&:last-of-type{
				border-radius: 0 0 5px 5px;
				border-bottom: none;
			}

			&:hover{
				background: var(--blue);
				color: var(--light)
			}

			@media screen and (min-width: 767px) {
				font-size: 1em;
			}

		}
	}



.menu-trans-enter-active, .menu-trans-leave-active {
	transition: transform 500ms var(--cb), opacity 300ms;
}
.menu-trans-enter, .menu-trans-leave-to {
	opacity: 0;
	transform:  scale(.9) translateY(-40px);
}
</style>