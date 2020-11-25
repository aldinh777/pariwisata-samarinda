<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">Update Wisata</div>

        <div class="row">
          <div class="col-12 q-mt-md">
            <q-input dense outlined class="full-width" v-model="detail.nama" label="Judul *"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-input dense outlined class="full-width" v-model="detail.lokasi" label="Alamat *"/>
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
            <q-input type="number" dense outlined class="full-width" v-model="detail.lat" label="Latitude"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-input type="number" dense outlined class="full-width" v-model="detail.lng" label="Longitude"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-btn @click="save" class="float-right bg-green text-white">Simpan</q-btn>
          </div>
        </div>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageAdminUpdateWisata',
  data () {
    return {
      detail: {
        nama: '',
        lokasi: '',
        deskripsi_singkat: '',
        deskripsi: '',
        gambar: null,
        lat: 0,
        lng: 0
      }
    }
  },
  methods: {
    save () {
      const bodyFormData = new FormData()
      const { nama, lokasi, deskripsi, gambar, lat, lng } = this.detail
      const data = {
        _method: 'PUT',
        nama,
        lokasi,
        deskripsi,
        gambar,
        lat,
        lng,
        deskripsi_singkat: this.detail.deskripsi_singkat,
        slug: this.$route.params.slug
      }
      for (const key in data) {
        const value = data[key]
        bodyFormData.append(key, value)
      }

      this.$axios({
        method: 'post',
        url: '/api/wisata',
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        this.$q.notify('Berhasil')
        this.$router.push('/admin/wisata')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
    }
  },
  computed: {
    data () {
      return this.$store.state.wisata.data
    }
  },
  preFetch ({ currentRoute, store }) {
    const slug = currentRoute.params.slug
    return store.dispatch('wisata/getData', slug)
  },
  mounted () {
    const { title, address, description, position } = this.data
    this.detail.nama = title
    this.detail.lokasi = address
    this.detail.deskripsi_singkat = this.data.short_description
    this.detail.deskripsi = description
    this.detail.lat = position.lat
    this.detail.lng = position.lng
  }
}
</script>
