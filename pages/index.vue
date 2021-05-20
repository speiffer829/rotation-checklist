<template>
  <div class="container">
    <h1>Dashboard</h1>
    <button @click="signOut">Log Out</button>
  </div>
</template>

<script>
export default {
  methods: {
    signOut(){
      this.$fire.auth.signOut()
    }
  },
  mounted() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isInMemory = window.localStorage.getItem('color-theme')
    if(isInMemory){
      document.querySelector('body').classList.add(isInMemory)
      return
    }

    if(isDark){
      document.querySelector('body').classList.add('dark')
    }else{
      document.querySelector('body').classList.add('light')
    }
  },
}
</script>

