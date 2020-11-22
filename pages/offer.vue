<template>
  <div v-if="offer" class="offer">
    <h2>{{ offer.title }}</h2>

    <div class="containerIcons">
      <font-awesome-icon class="heartFull" icon="heart"></font-awesome-icon>
      <font-awesome-icon class="heartNotFull" :icon="['far', 'heart']"></font-awesome-icon>
    </div>

    <p style="margin: 15px 0">{{ offer.description }}</p>

    <div>
      <img style="max-width: 200px; object-fit: cover; margin-top: 15px; margin-right: 15px" v-for="(image, index) in offer.images" :key="index" :src="image.url_path" alt="images">
    </div>

    <canvas style="margin-top: 15px" id="qr"></canvas>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import QRious from 'qrious'

  export default {
    computed: {
      ...mapGetters({
        offer: 'offers/offer'
      }),
    },
    mounted() {
      this.$store.dispatch('offers/getOffer', this.$route.params.offer)
      if(process.client) {
        new QRious({
          element: document.getElementById('qr'),
          value: window.location.href
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .containerIcons {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-content: center;
    justify-content: flex-end;
    margin-top: 20px;

    .heartFull, .heartNotFull {
      color: #EA4C89;
    }
  }
</style>
