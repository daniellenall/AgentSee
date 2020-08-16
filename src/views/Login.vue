<template>
  <div class="login main text-center">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        v-model="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        v-model="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" @click="login" type="submit">Sign in</button>

      {{user.email}}

    </form>
  </div>
</template>

<script>
import {fb} from '../firebase.js';

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      user: ''
    }
  },
  created() {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    login: function() {
      fb.auth().signInWithEmailAndPassword(this.email, this.password);
    }
  }
  
};
</script>

<style scoped>
body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>