<template>
  <v-app>
    <v-app-bar color="white accent-4" dark app>
      <v-toolbar-title>
        <v-img src="./assets/imanager.png" width="50px" class="mr-3"></v-img>
      </v-toolbar-title>
      <h3 class="font-weight-light black--text">iManager</h3>
    </v-app-bar>

    <v-main style="position: relative">
      <v-container>
        <router-view :products="products" @deleteProduct="deleteProduct" @refreshProducts="getProducts"
      /></v-container>
    </v-main>

    <v-bottom-navigation class=".align-self-center" grow>
      <v-btn class="my-auto" :to="'/'">
        <span>Home</span>
      </v-btn>
      <v-btn class="my-auto" :to="'/scan'">
        <span>Scan</span>
      </v-btn>
      <v-btn class="my-auto" :to="'/inventory'">
        <span>Inventar</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    this.getProducts();
  },
  data() {
    return {
      products: [],
      serverAddress: process.env.VUE_APP_SERVER,
      once: false,
    };
  },
  methods: {
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten!');
    },
    async getProducts() {
      try {
        const { data } = await axios({
          url: this.serverAddress + '/products',
          method: 'GET',
        });
        this.products = data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(value) {
      try {
        console.log(value);
        await axios({
          url: `${this.serverAddress}/products/${value}`,
          method: 'DELETE',
        });
        // this.products = data;
        this.getProducts();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
