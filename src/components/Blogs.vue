<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data(){
    return {
      blogTitle: 'Blogs'
    }
  },
  methods: {
    changeTitle () {
      this.blogTitle = 'Changed'
    }
  },
  beforeCreate(){
    alert('beforeCreate Hook');
  },
  created(){
    alert('created Hook'); 
  },
  beforeUpdate(){
    alert('beforeUpdate Hook')
  },
}
</script>