<template>
  <div id="app">
    <NavbarInThisScope />
    <h1>{{ title }}</h1>
    <BlogsComponentInThisScope />
    
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'

export default {
  name: 'App',
  components: {
    NavbarInThisScope: Navbar,
    BlogsComponentInThisScope: Blogs,
  },
  data(){
    return {
      title: "Hello Developer :)",
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
