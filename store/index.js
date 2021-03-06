const actions = {
	async onAuthStateChangedAction(state, { authUser, claims }) {
		if (!authUser) {
			state.commit('SET_USER', null)
			this.$router.push({
				path: '/signin'
			})
		} else {
			const {uid, email} = authUser
			const otherStuff = await this.$fire.firestore
        .collection("users")
        .doc("YUqBASz05OWiy3RNAUJFKf9dvX32")
        .get();
			const name = otherStuff.data().name
			state.commit('SET_USER', {
				uid,
				email,
				name
			})
		}
	}
}

const mutations = {
	SET_USER(state, user){
		state.user = user
	},
}

const state = () => ({
	user: {
		uid: '',
		email: '',
		name: ''
	}
})

const getters = {
	getUser(state) {
		return state.user
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}