<template>
  <div>
    <div class="containerBody">
      <h2 style="margin-bottom: 15px;">Offres</h2>
      <div class="containerOffers">
        <transition name="fade" v-for="(offer, index) in offers" :key="index">
          <Offer class="offer" :offer="offer" :nameRoute="'offer'"/>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Offer from "@/components/Offer";
  export default {
    components: {Offer},
    computed: {
      ...mapGetters({
        offers: 'offers/offersFavorites',
        infos: 'offers/infos'
      })
    },
    beforeMount() {
      this.$store.dispatch('offers/getFavorites')
    },
  }
</script>
<style lang="scss" scoped>
  .containerOffers {
    display: grid;
    grid-gap: 15px;
    justify-content: space-between;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(40px, 350px));
  }
</style>
