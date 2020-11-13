<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          Pariwisata
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Beranda" />
        <q-route-tab to="/about" label="Visi Misi" />
        <q-route-tab to="/wisata" label="Wisata" />
        <q-route-tab to="/kafe" label="Kafe" />
        <q-route-tab to="/kuliner" label="Kuliner" />
        <q-route-tab to="/oleholeh" label="Oleh-Oleh" />
        <q-route-tab to="/workingspace" label="Working Space" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="bg-grey-8 text-white q-pa-lg">
      <div>
        <h6>Kontak</h6>
        <ul>
          <li>Alamat : Jl. Bhayangkara rt. 5 no. 422 75279</li>
          <li>Telepon : 0822-3980-8869</li>
          <li>E-Mail : info@mail.com</li>
        </ul>
      </div>
      <q-separator />
      <div class="q-pa-sm">
        &copy; 2020 All Right Reserved
      </div>
    </div>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
