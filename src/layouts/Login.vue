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
                v-model="username"
                label="Username"
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
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$q.notify('Login Berhasil')
        this.$q.cookies.set('authenticated', true)
        this.$router.push('/admin')
      } else {
        this.$q.notify('Username atau Password Salah')
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
