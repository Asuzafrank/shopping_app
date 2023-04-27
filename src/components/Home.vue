<template>
  <Header />
  <div class="d-flex flex-row gap-5 flex-wrap m-3">
    <div v-for="product in paginatedProducts" :key="product.id" class="">
      <div class="card" style="width: 18rem">
        <img :src="product.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">${{ product.price }}</p>
          <router-link
            :to="'/product-detail/' + product.id"
            class="btn btn-primary"
            >view product</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="prevPage()"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages"
        :key="page"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === pages.length }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="nextPage()"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  <Footer />
</template>

<script>
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
export default {
  name: "Home",
  components: { Header, Footer },
  data() {
    return {
      products: [],
      currentPage: 1,
      perPage: 4,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.products.slice(start, end);
    },
    pages() {
      const pagesArray = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    },
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/products");
    console.log(result);
    this.products = result.data;
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>
