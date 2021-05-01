<template>
  <div class="container">
    <div class="my-5 px-5">
      <h2 class="font-weight-bold">Login</h2>
    </div>
    <form action="" class="px-5" @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="formData.email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="formData.password"
        />
      </div>
      <div class="mt-3">
        <b-button variant="outline-info" type="submit">Login</b-button>
      </div>
      <div class="note mt-4">
        <p>
          Don't have an account?
          <nuxt-link to="/register">Sign Up</nuxt-link> instead.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  layout: "auth",
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.formData.email, this.formData.password)
        .then(user => {
          console.log(user);
          alert(`hey ${user.user.email}`);
          this.$router.push("/students");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style></style>
