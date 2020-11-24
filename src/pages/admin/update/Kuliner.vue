<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">Update Kuliner</div>

        <div class="row">
          <div class="col-12 q-mt-md">
            <q-input dense outlined class="full-width" v-model="detail.nama" label="Judul *"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-input type="textarea" dense outlined class="full-width" v-model="detail.deskripsi_singkat" label="Deskripsi Singkat *"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-input type="textarea" dense outlined class="full-width" v-model="detail.deskripsi" label="Deskripsi *"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-file outlined v-model="detail.gambar" label="Gambar Baru">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>

          <div class="col-12 q-mt-md">
            <q-btn class="float-right bg-green text-white">Simpan</q-btn>
          </div>
        </div>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageAdminUpdateKuliner',
  data () {
    return {
      detail: {
        nama: '',
        deskripsi_singkat: '',
        deskripsi: '',
        gambar: null
      }
    }
  },
  computed: {
    data () {
      return this.$store.state.kuliner.data
    }
  },
  preFetch ({ currentRoute, store }) {
    const slug = currentRoute.params.slug
    return store.dispatch('kuliner/getData', slug)
  },
  mounted () {
    const { title, description } = this.data
    this.detail.nama = title
    this.detail.deskripsi_singkat = this.data.short_description
    this.detail.deskripsi = description
  }
}
</script>
