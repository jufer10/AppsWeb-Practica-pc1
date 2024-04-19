<script>

import axios from "axios";
import ProductCard from "./news/components/product-card.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";

export default {
  name: "App",
  components: {
    ProductCard,
    FooterContent
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const response = await axios.get("https://fakestoreapi.com/products");
    this.products = response.data;
  },
};

</script>

<template>
  <div class="w-full">
    <pv-menubar class="sticky bg-primary" >
      <template #start>Fake Store API ShowCase</template>
    </pv-menubar>
  </div>

  <div>
    <product-card v-for="Product in products" :key="Product.id" :Product="Product" />
  </div>

  <footer-content/>
</template>
