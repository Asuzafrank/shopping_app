<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.register input,
.login input {
  display: block;
  padding: 20px;
  width: 300px;
  border: 1px solid skyblue;
  margin: 20px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
.register button,
.login button {
  width: 350px;
  background-color: skyblue;
  padding: 20px;
  border-radius: 3px;
}
</style>
