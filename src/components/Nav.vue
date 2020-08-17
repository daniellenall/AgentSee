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
          <li class="nav-item" v-if="!auth">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="auth">
            {{user.email}}<a class="nav-link" href="#" @click="logout()">Logout</a>
          </li>

 
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
import { fb } from "../firebase";

export default {
  name: "Nav",
  props: {
    title: String,
    
  },
  data() {
    return {
      user: '',
      auth: false
    }
  },
  created() {
    // Check if user is logged in and set auth variable
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.auth = true;
      } else {
        this.user = null;
        this.auth = false;
      }
    });
  },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          //route to home on logout then reload component
          this.$router.replace("/");
          location.reload();
          this.auth = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
