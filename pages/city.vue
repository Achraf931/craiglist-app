<template>
  <div class="city">
    <h2 style="margin-bottom: 15px">Catégories</h2>
    <div class="containerCategories">
      <NuxtLink v-for="(category, index) in categories" :key="index" :to="{name: 'category', params: {city: cityParam, category: category.slug}}" class="category">{{ category.name }}</NuxtLink>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Offer from "../components/Offer";

  export default {
    data() {
      return {
        cityParam: this.$route.params.city
      }
    },
    components: {Offer},
    computed: {
      ...mapGetters({
        categories: 'categories/categories'
      })
    },
    beforeMount() {
      this.$store.dispatch('categories/getCategories')
    }
  }
</script>

<style lang="scss" scoped>
  .city {
    width: 100%;
    overflow: scroll;
    max-height: 100%;

    .glide > div:last-child {
      button {
        cursor: pointer;
        border: none;
      }
    }

    .containerCategories {
      display: grid;
      grid-gap: 30px;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(40px, 200px));

      .category {
        color: #A9B3C2;
        transition: all .2s ease;
        display: block;
        text-align: center;
        border-radius: 10px;
        background-color: white;
        padding: 10px 15px;
      }

      .category:hover {
        color: white;
        background-color: #4C6FFF;
      }
    }
  }
</style>
