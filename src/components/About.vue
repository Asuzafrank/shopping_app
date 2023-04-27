<template>
  <Header />
  <div class="container" mb-5>
    <h1 class="title">about us</h1>
    <Maps />
  </div>

  <Footer />
</template>
<script>
import Header from "./Header";
import Maps from "./Maps";
import Footer from "./Footer";
export default {
  name: "About",
  components: {
    Header,
    Footer,
    Maps,
  },
};
</script>
<style scoped>
.title {
  font-family: "Dancing Script", cursive;
  padding-top: 15px;
  left: 45%;
}
</style>