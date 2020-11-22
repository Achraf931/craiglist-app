<template>
  <main>
    <Nav/>
    <section class="container">
      <div class="headerSection">
        <div class="containerInput">
          <input type="text" placeholder="Recherche...">
          <div>
            <font-awesome-icon icon="search"/>
          </div>
        </div>
      </div>
      <div>
        <transition name="fade">
          <Nuxt/>
        </transition>
      </div>
    </section>
  </main>
</template>

<script>
  import Nav from "@/components/Nav";

  export default {
    data() {
      return {
        newArticle: ''
      }
    },
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
  .fade-enter-active {
    transition: opacity .4s ease;
  }

  .fade-leave-active {
    transition: opacity .05s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-family: Raleway, Helvetica, Arial, sans-serif;
    outline: none;
  }

  html, body {
    scrollbar-base-color: #4C6FFF;
  }

  #app {
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: white;
    color: #A9B3C2;
  }

  main {
    height: 100vh;
    display: flex;
  }

  *::-webkit-scrollbar {
    width: 5px!important;
    height: 5px!important;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    mso-background: #4C6FFF;
    background: #4C6FFF!important;
    width: 5px!important;
    height: 5px!important;
    border-radius: 10px;
  }

  ::selection {
    color: white;
    background: #4C6FFF;
  }

  .headerSection {
    width: 100%;
    max-height: 120px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    .containerInput, .containerAddArticle {
      max-width: 280px;
      width: 100%;
      position: relative;

      input {
        transition: all .2s ease;
        background-color: #F4F4FF;
        border-radius: 5px;
        padding: 8px 46px 8px 15px;
        width: 100%;
        height: 31px;
        font-weight: bold;
        border: .5px solid transparent;
      }

      input:focus {
        border: .5px solid #4C6FFF;
      }

      div {
        position: absolute;
        background-color: #4C6FFF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 31px;
        height: 31px;
        top: 0;
        right: 0;
        cursor: pointer;

        svg {
          color: white;
        }
      }
    }
  }

  .boxShadow {
    box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.05);
  }

  .boxShadow:hover {
    box-shadow: 0 1px 21px 1px rgba(69, 65, 78, 0.08);
  }

  .container {
    width: calc(100% - 300px);

    & > div:last-child {
      padding: 30px;
      border-radius: 20px 0 0 0;
      width: 100%;
      height: calc(100% - 120px);
      background-color: #F4F4FF;
    }
  }
</style>
