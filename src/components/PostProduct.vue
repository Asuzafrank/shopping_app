<template>
  <div class="container mt-5">
    <h1>post a new product</h1>
    <div class="inputs">
      <div class="form-group">
        <label for="usr">Name:</label>
        <input
          type="text"
          v-model="product.name"
          class="form-control"
          id="usr"
        />
      </div>
      <div class="form-group">
        <label for="pwd">price:</label>
        <input
          type="number"
          v-model="product.price"
          class="form-control"
          id="pwd"
        />
      </div>
      <div class="form-group">
        <label for="usr">description:</label>
        <textarea
          class="form-control"
          v-model="product.description"
          rows="5"
          id="comment"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="pwd">image url:</label>
        <input
          type="url"
          v-model="product.image"
          class="form-control"
          id="pwd"
        />
      </div>
      <button @click="post" type="button" class="btn btn-primary mt-3">
        Post product
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostProduct",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    async post() {
      const result = await axios.post(" http://localhost:3000/products", {
        name: this.product.name,
        price: this.product.price,
        description: this.product.description,
        image: this.product.image,
      });
      if (result.status === 201) {
        alert("product posted successfully");
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);
h1 {
  font-family: "Dancing Script", cursive;
}
input,
textarea {
  padding: 10px;
  width: 300px;
  margin: 0 auto;
  border: 2px solid skyblue;
}
.btn {
  width: 300px;
}
</style>