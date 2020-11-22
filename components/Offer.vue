<template>
  <NuxtLink :to="{ name: this.$route.params.subcategory ? 'offer' : 'offerWithoutSub', params: {paramsRoute, offer: offer.slug}}" class="offer">
    <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/s960x960/22179964_1622593171125741_5655514313399585104_o.jpg?_nc_cat=109&ccb=2&_nc_sid=85a577&_nc_ohc=sJXwBG2S4vsAX9UwDzf&_nc_ht=scontent-cdt1-1.xx&tp=7&oh=47ed1c21e95e36ff2eb768754107e3bf&oe=5FD40E8A" alt="Image de l'article">
    <div>
      <small>{{ offer.created_at }}</small>
        <h3>{{ offer.title }}</h3>
    </div>
  </NuxtLink>
</template>

<script>
  export default {
    props: ['offer', 'nameRoute'],
    data() {
      return {
        cityParam: this.$route.params.city,
        categoryParam: this.$route.params.category,
        subcategoryParam: this.$route.params.subcategory,
        paramsRoute: this.$route.params.subcategory ? {city: this.cityParam, category: this.categoryParam} : {city: this.cityParam, category: this.categoryParam, subcategory: this.subcategoryParam}
      }
    }
  }
</script>

<style lang="scss" scoped>
    .offer {
      color: #A9B3C2;
      transition: all .2s ease;
      text-align: center;
      border-radius: 10px;
      background-color: white;
      display: flex;
      justify-content: space-between;

      img {
        object-fit: cover;
        height: 100px;
        width: 100px;
        border-radius: 10px;
      }

      div {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px 0;

        small {
          margin-bottom: 20px;
        }

        h3 {
          color: black;
        }
      }

      &:hover {
        box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.08);
      }
    }
</style>
