<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-space/>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="white">
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary text-white"
    >
      <q-list>
        <q-item to="/admin/wisata" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="today"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Wisata</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/admin/kafe" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="local_cafe"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Kafe</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/admin/workingspace" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="work"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Working Space</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/admin/kuliner" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fastfood"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Kuliner</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/admin/oleholeh" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="wine_bar"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Oleh-Oleh</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="logout" to="/admin/login" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="exit_to_app"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AdminLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.cookies.remove('token')
      this.$router.push('/admin/login')
    }
  }
}
</script>
