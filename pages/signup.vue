<template>
	<div id="signup-page">
		<div class="form-box">
			<form @submit.prevent="signup">

				<label for="name">Name</label>
				<input type="text" name="name" v-model="name" placeholder="Jenny" id="name">

				<label for="email">Email</label>
				<input type="email" name="email" v-model="email" placeholder="jenny@site.com" id="email">

				<label for="password">Password</label>
				<input type="password" name="password" v-model="password" id="password">

				<label for="password">Confirm Password</label>
				<input type="password" name="passowrdConfirm" v-model="passwordConfirm" id="passwordConfirm">
				
				<button class="submit-btn" type="submit">Sign Up</button>

				<nuxt-link to="/signin" class="switch-page">Sign In</nuxt-link>
			</form>

			<p v-if="msg">{{ msg }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
			msg: ''
		}
	},
	layout: 'signupin',
	methods: {
		async signup(){
			const self = this;

			if(this.password === this.passwordConfirm){
				this.$fire.auth.createUserWithEmailAndPassword(
						self.email,
						self.password
					).catch ((e) => {
					self.msg = e
				})
				.then(result => {
					console.log( result )
				})
			}else{
				this.setMsg('Confirm password does\'t match')
			}
		},
		setMsg(msg){
			this.msg = msg

			setTimeout(() => {
				this.msg = ''
			}, 3000);
		}
	},
}
</script>
