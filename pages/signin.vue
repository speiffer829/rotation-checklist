<template>
	<div id="signin-page">
		<div class="form-box">
			<form @submit.prevent="login">
				<label for="email">Email</label>
				<input type="email" name="email" v-model="auth.email" placeholder="email" id="email">

				<label for="password">Password</label>
				<input type="password" name="email" v-model="auth.password" placeholder="password" id="password">
				
				<button class="submit-btn" type="submit">Log In</button>

				<nuxt-link to="/signup" class="switch-page">Sign Up</nuxt-link>
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
	layout: 'signupin',
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




