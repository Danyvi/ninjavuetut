<template>
  <div id="online-friends">
    <h2>Online Friends</h2>
    <div v-for="(friend, index) in passfriendasprop" v-bind:key="index">
      <span v-if="friend.online">{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineFriends',
  // tell the component we are receiving props (properties)
  props: ['passfriendasprop'],
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>