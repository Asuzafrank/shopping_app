<template>
  <Header />

  <div class="title">
    <h1>Product Description</h1>
  </div>

  <div class="container mb-5">
    <hr />

    <div class="card">
      <div class="row">
        <aside class="col-sm-5 border-right">
          <article class="gallery-wrap">
            <div class="img-big-wrap">
              <img :src="product.image" />
            </div>
          </article>
        </aside>
        <aside class="col-sm-7">
          <article class="card-body p-5">
            <h3 class="title mb-3">{{ product.name }}</h3>

            <p class="price-detail-wrap">
              <span class="price h3 text-warning">
                <span class="currency">US $</span
                ><span class="num">{{ product.price }}</span>
              </span>
            </p>

            <dl class="item-property">
              <dt>Description</dt>
              <dd>
                <p>
                  {{ product.description }}
                </p>
              </dd>
            </dl>
            <dl class="param param-feature">
              <dt>Model#</dt>
              <dd>12345611</dd>
            </dl>

            <dl class="param param-feature">
              <dt>Color</dt>
              <dd>Black and white</dd>
            </dl>

            <dl class="param param-feature">
              <dt>Delivery</dt>
              <dd>Russia, USA, and Europe</dd>
            </dl>

            <hr />
            <div class="row">
              <div class="col-sm-5">
                <dl class="param param-inline">
                  <dt>Quantity:</dt>
                  <dd>
                    <select
                      class="form-control form-control-sm"
                      style="width: 70px"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </dd>
                </dl>
              </div>

              <div class="col-sm-7">
                <dl class="param param-inline">
                  <dt>Size:</dt>
                  <dd>
                    <label class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <span class="form-check-label">SM</span>
                    </label>
                    <label class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <span class="form-check-label">MD</span>
                    </label>
                    <label class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <span class="form-check-label">XXL</span>
                    </label>
                  </dd>
                </dl>
              </div>
            </div>

            <hr />

            <a
              href="#"
              class="btn btn-lg btn-outline-primary text-uppercase"
              @click="addToCart()"
            >
              <i class="fas fa-shopping-cart"></i> Add to cart
            </a>
          </article>
        </aside>
      </div>
    </div>
  </div>

  <Footer />
</template>
<script>
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
export default {
  name: "ProductDetail",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      product: {},
      cart: [],
    };
  },
  methods: {
    async addToCart() {
      // Get the selected product information
      const product = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        image: this.product.image,
        quantity: 1,
      };
      let response = await axios.get("http://localhost:3000/cart");
      this.cart = response.data;
      const existingProductIndex = this.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        this.cart[existingProductIndex].quantity++;
      } else {
        await axios.post("http://localhost:3000/cart", product);
      }

      // Add the product to the shopping cart
      // const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // localStorage.setItem("cart", JSON.stringify(cart));

      // Redirect the user to the shopping cart page
      this.$router.push({ name: "Cart" });
    },
  },

  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/products/" + this.$route.params.id
    );

    this.product = result.data;
  },
};
</script>

<style scoped>
/* Import Font Dancing Script */
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);
.title {
  font-family: "Dancing Script", cursive;
  padding-top: 15px;
  left: 45%;
}
body {
  font-family: Arial;
}
</style>