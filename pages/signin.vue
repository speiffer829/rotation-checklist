<template>
	<div id="signin-page">
		<div class="signin-box">
			<form @submit.prevent="login">
				<input type="email" name="email" v-model="auth.email" placeholder="email">
				<input type="password" name="email" v-model="auth.password" placeholder="password">
				
				<button type="submit">Submit</button>
			</form>

			<p v-if="msg">{{ msg }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			auth:{
				email: '',
				passowrd: '',
			},
			msg: ''
		}
	},
	methods: {
		login(){
			const self = this;
			this.$fire.auth.signInWithEmailAndPassword(self.auth.email, self.auth.password)
				.catch((e) => {
					self.msg = e
					setTimeout(() => {
						self.msg = ''
					}, 5000)
				})
				.then((user) => {
					self.$router.push('/')
				})
		}
	},
}
</script>

<style lang="scss">
	#signin-page{
		min-height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.signin-box{
			max-width: 480px;
			box-shadow: 3px 0 10px rgba(0,0,0,0.5);
			border-radius: 10px;
			padding: 1rem;

			input{
				width: 80%;
				display: block;
				font-size: 1.1em;
			}
		}
	}
</style>


