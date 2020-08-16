<template>
  <div id="nav">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-info">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/agents">Agents</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Nav",
  props: {
      title: String
  }
};
</script>
