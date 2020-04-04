<template>
  <div id="all-friends">
    <h2>All Friends</h2>
    <div v-for="(friend, index) in passfriendasprop" v-bind:key="index">
      <span @click="unfriend(friend.name)">{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllFriends',
  // tell the component we are receiving props (properties)
  props: ['passfriendasprop'],
  data(){
    return{

    }
  },
  methods: {
    unfriend(name){
      //this refers to this particular component
      // emit takes 2 parameters:
      // 1) name of the event to emit
      // 2) any data (as obj {}) we wanto to send with this custom event
      // in this example we have call the custom event 'delete'
      // we pass the data as obj that as a key of name and value of name that is the one we receive
      // {{ name: name }} in ES6 becomes {{ name }}
      // Recap: we pass 'name' to the parent component ('App.vue')through this custom event
      // When this component emits this event the parent component is listening that event on the child component 
      this.$emit('delete', { name })
    }
  }
}
</script>

<style>

</style>