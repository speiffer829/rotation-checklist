<template>
  <div class="container">
    <h1>Dashboard</h1>
    <button @click="signOut()">Log Out</button>
  </div>
</template>

<script>
export default {
  methods: {
    signOut(){
      this.$fire.auth.signOut()
    }
  },
}
</script>

