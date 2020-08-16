<template>
  <div class="home main">
    <HelloWorld msg="Welcome to AgentSee"/>
    <button class="btn btn-primary">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
