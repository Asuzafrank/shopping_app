<template>
  <h1>Login</h1>
  <div class="login">
    <label for="email"
      >Email:
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="..@gmal.com"
    /></label>
    <label for="password"
      >Password:
      <input
        type="password"
        v-model="password"
        name="password"
        placeholder="Enter password"
    /></label>
    <button @click="login">login</button>
    <p>
      Don't have an account? <router-link to="/sign-up">Sign-up</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let res = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.log(res);
      if (res.status === 200 && res.data.length > 0) {
        localStorage.setItem("signed-users", JSON.stringify(res.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>