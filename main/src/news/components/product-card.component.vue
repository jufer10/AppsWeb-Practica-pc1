<script>
import {Product} from "../model/product.entity.js";

export default {
  name: "ProductCard",
  props: {
    Product: {type: Product, required: true},
  }
}
</script>

<template>
  <div class="card">
    <img :src="Product.image" alt="product image" />

    <h2>{{ Product.title }}</h2>

    <p>Price: {{ Product.price }}</p>
    <p>Description: {{ Product.description }}</p>
    <p>Category: {{ Product.category }}</p>
  </div>
</template>

<style scoped>
  .card {
    border: 1px solid #ccc;
    margin: 100px;
    padding: 50px;
    width: 600px;
  }

  .card img {
    width: 50%;
  }
</style>