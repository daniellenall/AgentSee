<template>
  <div class="login main text-center">
    <form class="form-signup">
      <h1 class="h3 mb-3 font-weight-normal">Enter your signup detail</h1>

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
      <button class="btn btn-lg btn-primary btn-block" @click="signup" type="submit">Sign up</button>
      <p>
        Have an account?
        <router-link class="nav-link" to="/login">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { fb } from "../firebase.js";

export default {
  name: "Signup",
  data() {
    return {
      email: " ",
      password: " "
    };
  },
  methods: {
    signup() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // Redirect on success
          this.$router.replace("/");
        })
        .catch(error => {
          //catch error messages
          if (error.code == "auth/weak-password") {
            console.log("too weak");
          } else {
            console.log(error.message);
          }
          console.log(error);
        });
      console.log("Account created");
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

.form-signup {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signup .checkbox {
  font-weight: 400;
}
.form-signup .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signup .form-control:focus {
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