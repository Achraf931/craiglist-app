<template>
  <div class="city">
    <div class="containerBody">
      <div class="containerCategories">
        <h2 style="margin-bottom: 15px">Sous-catégories</h2>
        <p v-if="subcategories.length <= 0">Aucune offre pour cette catégorie</p>
        <template v-else>
          <client-only>
            <vue-glide :rewind="true" v-if="subcategories.length">
              <vue-glide-slide v-for="(subcategory, index) in subcategories" :key="index">
                <NuxtLink :to="{name: 'subcategory', params: {city: cityParam, category: categoryParam, subcategory: subcategory.slug}}" class="category">{{ subcategory.name }}</NuxtLink>
              </vue-glide-slide>
              <div class="glide__arrows" data-glide-el="controls" v-if="subcategories.length > 3" slot="control">
                <button data-glide-dir="<" class="glide__arrow glide__arrow--left"><font-awesome-icon icon="chevron-left"/></button>
                <button data-glide-dir=">" class="glide__arrow glide__arrow--right"><font-awesome-icon icon="chevron-right"/></button>
              </div>
            </vue-glide>
          </client-only>
        </template>
      </div>

      <h2 style="margin-bottom: 15px; margin-top: 30px;">Offres</h2>
      <p v-if="offers.length <= 0">Aucune offre pour cette catégorie</p>
      <div v-else class="containerOffers">
        <Offer class="offer" v-for="(offer, index) in offers" :key="index" :offer="offer" :nameRoute="'offerWithoutSub'"/>
      </div>
    </div>

    <div class="containerButtonsPage" v-if="infos.last_page > 1">
      <button :class="{disabled: infos.current_page === 1 || infos.last_page === 1}" class="arrowPagination" :disabled="infos.current_page === 1 || infos.last_page === 1" @click="getOffers(1)"><font-awesome-icon icon="chevron-left"></font-awesome-icon><font-awesome-icon icon="chevron-left"></font-awesome-icon></button>
      <button :class="{disabled: infos.current_page === 1 || infos.last_page === 1}" class="arrowPagination" :disabled="infos.current_page === 1 || infos.last_page === 1" @click="getOffers(infos.current_page-1)"><font-awesome-icon icon="chevron-left"></font-awesome-icon></button>
      <div :class="{isActive: infos.current_page === page}" class="buttonPage" v-for="page in infos.last_page" @click="getOffers(page)">{{page}}</div>
      <button :class="{disabled: infos.current_page === infos.last_page || infos.current_page === infos.last_page}" class="arrowPagination" :disabled="infos.current_page === infos.last_page || infos.current_page === infos.last_page" @click="getOffers(infos.current_page+1)"><font-awesome-icon icon="chevron-right"></font-awesome-icon></button>
      <button :class="{disabled: infos.current_page === infos.last_page || infos.current_page === infos.last_page}" class="arrowPagination" :disabled="infos.current_page === infos.last_page || infos.current_page === infos.last_page" @click="getOffers(infos.last_page)"><font-awesome-icon icon="chevron-right"></font-awesome-icon><font-awesome-icon icon="chevron-right"></font-awesome-icon></button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Offer from "../components/Offer";

  export default {
    components: {Offer},
    data() {
      return {
        cityParam: this.$route.params.city,
        categoryParam: this.$route.params.category
      }
    },
    computed: {
      ...mapGetters({
        subcategories: 'subcategories/subcategories',
        offers: 'offers/offers',
        infos: 'offers/infos'
      })
    },
    beforeMount() {
      this.$store.dispatch('subcategories/getSubCategories', {category: this.categoryParam})
      this.$store.dispatch('offers/getOffers', {page: 1, city: this.cityParam, category: this.categoryParam, subcategory: null})
    },
    methods: {
      getOffers(page) {
        this.$store.dispatch('offers/getOffers', {page: page, city: this.cityParam, category: this.categoryParam, subcategory: null})
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Required Core Stylesheet
  @import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

  // Optional Theme Stylesheet
  @import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

  .glide__arrow {
    color: black;
    background-color: white;
  }

  .disabled {
    background-color: white!important;
    border-color: white!important;
    color: #F4F4FF!important;
  }

  .disabled:hover {
    border-color: white!important;
  }

  .isActive {
    background-color: #4C6FFF!important;
    border-color: #4C6FFF!important;
    color: white!important;
  }

  .city {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .glide > div:last-child {
      button {
        cursor: pointer;
        border: none;
      }
    }

    .containerBody {
      overflow: scroll;
    }

    .containerOffers {
      display: grid;
      grid-gap: 15px;
      justify-content: space-between;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(40px, 350px));
    }

    .containerCategories {
      /*display: grid;*/
      /*grid-gap: 30px;*/
      width: 100%;
      /*grid-template-columns: repeat(auto-fit, minmax(40px, 200px));*/

      .category {
        color: #A9B3C2;
        transition: all .2s ease;
        display: block;
        text-align: center;
        border-radius: 10px;
        background-color: white;
        padding: 10px 15px;
        margin: auto;
      }

      .category:hover {
        color: white;
        background-color: #4C6FFF;
      }
    }
  }

  .containerButtonsPage {
    max-width: 290px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    margin: 0 auto;
    padding: 20px 0 0 0;
    border-radius: 5px;

    .buttonPage, .arrowPagination {
      cursor: pointer;
      color: #A9B3C2;
      width: 30px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      border: 2px solid white;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin: 0 8px;
      padding: 10px 15px;
      background-color: white;
      transition: all .2s ease;
    }

    .buttonPage:hover, .arrowPagination:hover {
      border-color: #4C6FFF;
      color: #4C6FFF;
    }
  }
</style>
