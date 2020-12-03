<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">Tambah Kafe</div>

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
            <q-file outlined v-model="detail.gambar" label="Gambar">
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
            <q-btn @click="create" class="float-right bg-green text-white">Tambah</q-btn>
          </div>
        </div>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageAdminTambahKafe',
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
    create () {
      const bodyFormData = new FormData()
      const { nama, alamat, deskripsi, gambar, lat, lng } = this.detail
      const data = {
        nama,
        alamat,
        deskripsi,
        gambar,
        lat,
        lng,
        jam_buka: this.detail.jam_buka
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
          Authorization: 'Bearer ' + this.$q.localStorage.getItem('token')
        }
      }).then(res => {
        this.$q.notify('Berhasil Dibuat')
        this.$router.push('/admin/kafe')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
    }
  }
}
</script>
