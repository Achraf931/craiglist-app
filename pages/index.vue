<template>
  <div id="container">
    <h2 style="margin-bottom: 15px">Villes</h2>

    <div class="home">
      <NuxtLink v-for="(city, index) in cities" :key="index" :to="{name: 'city', params: {city: city.slug}}" class="city">{{ city.name }}</NuxtLink>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
    name: 'index',
  computed: {
    ...mapGetters({
      cities: 'cities/cities'
    })
  },
  beforeMount() {
    this.$store.dispatch('cities/getCities')
  }
}
</script>

<style lang="scss" scoped>
  #container {
    overflow: scroll;
    max-height: 100%;
  }

  .home {
    display: grid;
    grid-gap: 30px;
    width: 100%;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(40px, 200px));

    .city {
      color: #A9B3C2;
      transition: all .2s ease;
      text-align: center;
      border-radius: 10px;
      background-color: white;
      padding: 10px 15px;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
    }

    .city:hover {
      color: white;
      background-color: #4C6FFF;
    }
  }
</style>
