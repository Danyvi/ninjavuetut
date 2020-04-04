<template>
  <div id="app">
    <NavbarInThisScope />
    <h1>{{ title }}</h1>
    <AllFriends />
    <OnlineFriends />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AllFriends from './components/AllFriends'
import OnlineFriends from './components/OnlineFriends'

export default {
  name: 'App',
  components: {
    NavbarInThisScope: Navbar,
    AllFriends: AllFriends,
    OnlineFriends
  },
  data(){
    return {
      title: "Hello Developer :)"
    }
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
