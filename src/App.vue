<template>
  <div id="app">
    <NavbarInThisScope />
    <h1>{{ title }}</h1>
    <!-- pass friend property as property of the component -->
    <AllFriends v-bind:passfriendasprop="friends" @delete="deleteFriend"/>
    <OnlineFriends :passfriendasprop="friends"/>
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
      title: "Hello Developer :)",
      friends: [
        {name: 'Mario', online: true},
        {name: 'Luigi', online: false},
        {name: 'Toad', online: true},
        {name: 'Bowser', online: false},
      ]
    }
  },
  methods: {
    deleteFriend(payload){
       console.log(payload);
       this.friends = this.friends.filter(friend => {
         return friend.name !== payload.name
       })
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
