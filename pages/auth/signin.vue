<template>
  <div>
    <div>
      <h1>Hello</h1>

      <form action="#" @submit.prevent="submit">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" inputmode="email" name="email" v-model="form.email">
          <p v-if="validation.email">
            {{ validation.email[0] }}
          </p>
        </div>

        <div class="mb-6">
          <label for="password">Password</label>
          <input type="password" id="password" inputmode="password" name="password" v-model="form.password">
          <p v-if="validation.password">
            {{ validation.password[0] }}
          </p>
        </div>

        <button type="submit">Sign in</button>
      </form>
      <div>
        No account ?
        <NuxtLink :to="{name: 'index'}">Create one here</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        validation: {}
      }
    },
    head() {
      return {
        title: 'Sign in'
      }
    },
    methods: {
      async submit() {
        try {
          await this.$auth.loginWith('local', {
            data: this.form
          })
        } catch (e) {
          console.log(e);
          if (e.response.status === 422) {
            this.validation = e.response.data.errors
          }
        }
      }
    }
  }
</script>
