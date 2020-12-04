<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <!-- <img src="../statics/profile.svg"> -->
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="email"
                label="E-mail"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div>
                <q-btn @click="login" label="Login" type="button" color="black" class="full-width"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        const res = await this.$axios.post('/api/login', {
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('auth/login', res.data.token)
        this.$q.cookies.set('token', res.data.token)
        this.$q.notify('Berhasil Login')
        this.$router.push('/admin')
      } catch (err) {
        this.$q.notify('E-mail atau Password Salah')
      }
    }
  }
}
</script>

<style>
  .bg-image {
    background-image: linear-gradient(135deg, grey 0%, lightblue 100%);
  }
</style>
