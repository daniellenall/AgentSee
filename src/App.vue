<template>
  <div id="app">
    <Nav title="AgentSee"/> 
    <router-view/>
    <Footer />  
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer';

export default {
  components: {
    Nav, 
    Footer
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #0d6b7a;
}
</style>
