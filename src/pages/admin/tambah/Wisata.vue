<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">Tambah Wisata</div>

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
    create () {
      const { nama, lokasi, deskripsi, lat, lng } = this.detail
      this.$axios.post('/api/wisata', {
        nama,
        lokasi,
        deskripsi,
        lat,
        lng,
        deskripsi_singkat: this.detail.deskripsi_singkat
      }).then(res => {
        this.$q.notify('Berhasil')
        this.$router.push('/admin/wisata')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
    }
  }
}
</script>
