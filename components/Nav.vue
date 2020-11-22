<template>
  <nav>
    <div class="containerLogo">
      <NuxtLink :to="{name: 'index'}">Logo</NuxtLink>
    </div>

    <ul>
      <li>
        <NuxtLink :to="{ name : 'index' }">
          <div class="navIcons">
            <font-awesome-icon icon="home"/>
          </div>
          <p>Accueil</p>
        </NuxtLink>
        <div class="circle"></div>
      </li>

      <!--UNLOGGED-->
      <template v-if="!$auth.loggedIn">
        <li>
          <NuxtLink :to="{ name : 'auth-signin' }">
            <div class="navIcons">
              <font-awesome-icon icon="sign-in-alt"/>
            </div>
            <p>Connexion</p>
          </NuxtLink>
          <div class="circle"></div>
        </li>
        <li>
          <NuxtLink :to="{ name : 'auth-register' }">
            <div class="navIcons">
              <font-awesome-icon icon="user-plus"/>
            </div>
            <p>Inscription</p>
          </NuxtLink>
          <div class="circle"></div>
        </li>
      </template>

      <template v-else>
        <li>
          <NuxtLink :to="{name: 'favorites'}">
            <div class="navIcons">
              <font-awesome-icon class="heartIcon" icon="heart"></font-awesome-icon>
            </div>
            <p>Favoris</p>
          </NuxtLink>
        </li>
      </template>
    </ul>

    <div v-if="$auth.loggedIn" class="containerBottomNav">
      <div @click.prevent="signOut">
        <div class="navIcons">
          <font-awesome-icon icon="sign-out-alt"/>
        </div>
      </div>

      <NuxtLink v-if="!$auth.user.is_admin" class="dashboard" :to="{ name : 'admin-dashboard' }">
        <div class="navIcons">
          <font-awesome-icon icon="user-alt"/>
        </div>
      </NuxtLink>
      <NuxtLink v-else class="dashboard" :to="{ name : 'user-dashboard' }">
        <div class="navIcons">
          <font-awesome-icon icon="user-alt"/>
        </div>
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      async signOut() {
        await this.$auth.logout()
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    font-weight: bolder;
    margin: auto;
    max-width: 300px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > .containerLogo {
      padding: 30px;
      width: 100%;
      max-height: 120px;
      height: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          max-width: 110px;
          width: 100%;
        }

        p {
          color: #A9B3C2;
        }
      }
    }

    ul {
      width: 100%;
      height: calc(100% - 232px);
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior-x: contain;
      scroll-snap-type: y mandatory;

      li {
        scroll-snap-align: start;
        display: flex;
        position: relative;
        padding: 0 30px;
        align-items: center;
        margin: 40px 0;

        * {
          transition: all .2s ease;
        }

        .navIcons {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #F4F4FF;
          width: 30px;
          height: 30px;
          border-radius: 5px;

          svg {
            transition: all .05s ease;
          }
        }

        .circle {
          position: absolute;
          right: 50px;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background-color: transparent;
        }

        a {
          transition: all .2s ease;
          display: flex;
          color: #6D8494;
          align-items: center;

          div {
            margin-right: 25px;
          }

          p {
            transition: all .2s ease;
          }

          &.exact-active-link p {
            color: #4C6FFF!important;
          }

          &.exact-active-link + .circle, &.exact-active-link > .navIcons {
            background-color: #4C6FFF !important;

            svg {
              color: white;
            }

            .heartIcon {
              color: hotpink!important;
            }
          }
        }


        a:hover > p {
          color: #4C6FFF;
        }

        a:hover > .navIcons {
          background-color: #4C6FFF !important;

          svg {
            color: white!important;
          }

          .heartIcon {
            color: hotpink!important;
          }
        }
      }

      li:last-child {
        margin-bottom: 0;
      }
    }

    .containerBottomNav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 30px;

      & > div, & > .dashboard {
        transition: all .2s ease;
        cursor: pointer;
        width: 45%;
        color: red;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        padding: 15px;
      }

      & > div:hover {
        color: white;
        background-color: red;
      }

      .dashboard {
        color: #4C6FFF;
        background-color: white;
        border: 1px solid #4C6FFF;
      }

      .dashboard:hover {
        color: white;
        background-color: #4C6FFF;;
      }
    }
  }
</style>
