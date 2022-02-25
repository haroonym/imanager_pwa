<template>
  <div>
    <v-container>
      <v-quagga
        class="mx-auto"
        style="padding-top: 500px"
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="['ean_reader']"
      ></v-quagga>
      <form ref="form">
        <v-text-field
          clearable
          readonly
          class="mt-5"
          color="#F1333F"
          v-model="code"
          label="Barcode"
          hint="wird automatisch ausgefüllt"
          required
          >{{ code }}</v-text-field
        >
        <v-text-field
          class="mt-5"
          color="#F1333F"
          hint="z.B. Coca Cola"
          clearable
          label="Marke"
          v-model="marke"
          required
        ></v-text-field>
        <v-text-field
          class="mt-5"
          color="#F1333F"
          hint="z.B. Coca Cola Zero Zucker"
          clearable
          label="Produkttitel"
          v-model="produkttitel"
          required
        ></v-text-field>
        <v-text-field
          class="mt-5"
          color="#F1333F"
          hint="z.B. koffeinhaltiges Erfrischungsgetränk"
          clearable
          label="Produktbeschreibung"
          v-model="produktbeschreibung"
          required
        ></v-text-field>
        <v-text-field
          class="mt-5"
          color="#F1333F"
          type="date"
          hint="z.B 01.01.2023"
          clearable
          label="Ablaufdatum"
          v-model="ablaufdatum"
          required
        ></v-text-field>
      </form>

      <v-btn
        @click="postProduct()"
        style="color: #f1333f"
        class="mt-5 mx-auto text-h5"
        outlined
        height="50px"
        width="250px"
        >Speichern</v-btn
      >
    </v-container>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Scan',
  data() {
    return {
      readerSize: {
        min: 640,
        max: 480,
      },
      code: '',
      marke: 'S Budget',
      produkttitel: 'Schokobutterkekse Zartbitterschokolade',
      produktbeschreibung: 'Kekse mit Zartbitterschokolade',
      ablaufdatum: '2022-11-01',
      detecteds: [],
      readerTypes: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader'],
    };
  },
  methods: {
    logIt(data) {
      this.code = data.codeResult.code;
      console.log('detected', data);
    },
    async postProduct() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/products',
        method: 'POST',
        contentType: 'application/json',
        data: {
          barcode: this.code,
          marke: this.marke,
          produktname: this.produkttitel,
          beschreibung: this.produktbeschreibung,
          ablaufdatum: this.ablaufdatum,
        },
      });
      this.$emit('refreshProducts');
      this.$refs.form.reset();
      console.log(data[0]);
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-label-color .v-label {
  color: red;
  opacity: 1;
}
</style>
