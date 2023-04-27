<template>
  <img src="../assets/sign.png" alt="" />
  <h1>sign up</h1>
  <div class="register">
    <label for="username"
      >Name:
      <input
        type="text"
        id="name-input"
        v-model="name"
        name="username"
        placeholder="Enter your name"
    /></label>
    <label for="email"
      >Email:
      <input
        type="email"
        id="email-input"
        v-model="email"
        name="email"
        placeholder="..@gmal.com"
    /></label>
    <label for="password"
      >Password:
      <input
        type="password"
        id="pass-input"
        v-model="password"
        name="password"
        placeholder="Enter password"
    /></label>

    <button @click="signup">sign-up</button>
    <p>already have an account? <router-link to="/login">login</router-link></p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      let result = await axios.post(" http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status === 201) {
        alert("sign-up successfull!");
        localStorage.setItem("signed-users", JSON.stringify(result));
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
