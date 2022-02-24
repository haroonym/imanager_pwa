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
      <v-text-field clearable readonly class="mt-5" color="#F1333F" v-model="code" label="Barcode">{{
        code
      }}</v-text-field>
      <v-text-field
        class="mt-5"
        color="#F1333F"
        hint="z.B. Coca Cola"
        clearable
        label="Produkttitel"
      ></v-text-field>
      <v-text-field
        class="mt-5"
        color="#F1333F"
        hint="z.B. koffeinhaltiges Erfrischungsgetränk"
        clearable
        label="Produktbeschreibung"
      ></v-text-field>
      <v-text-field
        class="mt-5"
        color="#F1333F"
        type="date"
        hint="z.B 01.01.2023"
        clearable
        label="Ablaufdatum"
      ></v-text-field>
      <v-btn style="color: #f1333f" class="mt-5 mx-auto text-h5" outlined height="50px" width="250px"
        >Speichern</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Scan',
  data() {
    return {
      readerSize: {
        min: 640,
        max: 480,
      },

      detecteds: [],
      code: '',
      readerTypes: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader'],
    };
  },
  methods: {
    logIt(data) {
      this.code = data.codeResult.code;
      console.log('detected', data);
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
