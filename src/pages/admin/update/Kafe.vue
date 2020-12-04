<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">Update Kafe</div>

        <div class="row">
          <div class="col-12 q-mt-md">
            <q-input dense outlined class="full-width" v-model="detail.nama" label="Judul *"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-input dense outlined class="full-width" v-model="detail.alamat" label="Alamat *"/>
          </div>

          <div class="col-12 q-mt-md">
            <q-input dense outlined class="full-width" v-model="detail.jam_buka" label="Jam Buka *"/>
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
  name: 'PageAdminUpdateKafe',
  data () {
    return {
      detail: {
        nama: '',
        alamat: '',
        jam_buka: '',
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
      const { nama, alamat, deskripsi, gambar, lat, lng } = this.detail
      const data = {
        _method: 'PUT',
        nama,
        alamat,
        deskripsi,
        gambar,
        lat,
        lng,
        jam_buka: this.detail.jam_buka,
        slug: this.$route.params.slug
      }
      for (const key in data) {
        const value = data[key]
        bodyFormData.append(key, value)
      }

      this.$axios({
        method: 'post',
        url: '/api/kafe',
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + this.$q.cookies.get('token')
        }
      }).then(res => {
        this.$q.notify('Berhasil Diubah')
        this.$router.push('/admin/kafe')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
    }
  },
  computed: {
    data () {
      return this.$store.state.kafe.data
    }
  },
  preFetch ({ currentRoute, store }) {
    const slug = currentRoute.params.slug
    return store.dispatch('kafe/getData', slug)
  },
  mounted () {
    const { title, address, description, position } = this.data
    this.detail.nama = title
    this.detail.alamat = address
    this.detail.deskripsi = description
    this.detail.jam_buka = this.data.open_time
    this.detail.lat = position.lat
    this.detail.lng = position.lng
  }
}
</script>
