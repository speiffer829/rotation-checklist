<template>
  <main>
    <Nav @modeChange="toggleMode" />
    <Nuxt />
  </main>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components:{
    Nav
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
  methods: {
    toggleMode(){
      const bod = document.querySelector('body')
      const newMode = bod.classList.contains('dark') ? 'light' : 'dark'
      bod.classList.remove('light', 'dark')
      bod.classList.add(newMode)
      window.localStorage.setItem('color-theme', newMode)
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

