<template>
  <main>
    <Nav @modeChange="toggleMode" @logout="signOut" :mode="mode" />
    <Nuxt />
  </main>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components:{
    Nav
  },
  data() {
    return {
      mode: ''
    }
  },
  mounted() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isInMemory = window.localStorage.getItem('color-theme')
    if(isInMemory){
      document.querySelector('body').classList.add(isInMemory)
      this.mode = isInMemory
      return
    }

    if(isDark){
      document.querySelector('body').classList.add('dark')
      this.mode = 'dark'
    }else{
      document.querySelector('body').classList.add('light')
      this.mode = 'light'
    }
  },
  methods: {
    toggleMode(){
      const bod = document.querySelector('body')
      const newMode = bod.classList.contains('dark') ? 'light' : 'dark'
      bod.classList.remove('light', 'dark')
      bod.classList.add(newMode)
      this.mode = newMode
      window.localStorage.setItem('color-theme', newMode)
    },
    signOut(){
      this.$fire.auth.signOut()
      this.$router.push('/signin')
    }
  },
}
</script>

<style lang="scss">
main{
  width: 100%;
  min-height: 100vh;
  background: var(--base);
}
  
</style>

