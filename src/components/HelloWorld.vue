<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="thread in threads" :key="thread">
      <h2>{{ thread.title }}</h2>
      <div v-for="postId in thread.posts" :key="postId">
        <p>{{ users[posts[postId].userId].name }}</p>
        <p>{{ posts[postId].text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'
console.log(sourceData)
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
