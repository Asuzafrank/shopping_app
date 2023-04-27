<template>
  <h1>my cart</h1>
  <div class="container">
    <table
      v-for="item in cart"
      :key="item.id"
      id="cart"
      class="table table-hover table-condensed"
    >
      <thead>
        <tr>
          <th style="width: 50%">Product</th>
          <th style="width: 10%">Price</th>
          <th style="width: 8%">Quantity</th>
          <th style="width: 22%" class="text-center">Subtotal</th>
          <th style="width: 10%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-th="Product">
            <div class="row">
              <div class="col-sm-2 hidden-xs">
                <img :src="item.image" alt="..." width="150" />
              </div>
              <div class="col-sm-10">
                <h4 class="nomargin">{{ item.name }}</h4>
                <p>
                  Quis aute iure reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </td>
          <td data-th="Price">{{ item.price }}</td>
          <td data-th="Quantity">
            <input type="number" class="form-control text-center" value="1" />
          </td>
          <td data-th="Subtotal" class="text-center">1.99</td>
          <td class="actions" data-th="">
            <button class="btn btn-info btn-sm">
              <i class="fa fa-refresh"></i>
            </button>
            <button class="btn btn-danger btn-sm">
              <i class="fa fa-trash-o"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="visible-xs">
          <td class="text-center"><strong>Total 1.99</strong></td>
        </tr>
        <tr>
          <td>
            <router-link to="/" class="btn btn-warning"
              ><i class="fa fa-angle-left"></i> Continue Shopping</router-link
            >
          </td>
          <td colspan="2" class="hidden-xs"></td>
          <td class="hidden-xs text-center"><strong>Total $1.99</strong></td>
          <td>
            <a href="#" class="btn btn-success btn-block"
              >Checkout <i class="fa fa-angle-right"></i
            ></a>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:3000/cart");
    this.cart = response.data;
  },
};
</script>
<style scoped>
.table > tbody > tr > td,
.table > tfoot > tr > td {
  vertical-align: middle;
}
@media screen and (max-width: 600px) {
  table#cart tbody td .form-control {
    width: 20%;
    display: inline !important;
  }
  .actions .btn {
    width: 36%;
    margin: 1.5em 0;
  }

  .actions .btn-info {
    float: left;
  }
  .actions .btn-danger {
    float: right;
  }

  table#cart thead {
    display: none;
  }
  table#cart tbody td {
    display: block;
    padding: 0.6rem;
    min-width: 320px;
  }
  table#cart tbody tr td:first-child {
    background: #333;
    color: #fff;
  }
  table#cart tbody td:before {
    content: attr(data-th);
    font-weight: bold;
    display: inline-block;
    width: 8rem;
  }

  table#cart tfoot td {
    display: block;
  }
  table#cart tfoot td .btn {
    display: block;
  }
}
</style>