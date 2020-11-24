<template>
  <q-page class="q-pa-sm">
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="text-h6">Tambah Oleh-Oleh</div>

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
            <q-file outlined v-model="detail.gambar" label="Gambar">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
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
  name: 'PageAdminTambahOlehOleh',
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
  methods: {
    create () {
      const { nama, deskripsi } = this.detail
      this.$axios.post('/api/oleholeh', {
        nama,
        deskripsi,
        deskripsi_singkat: this.detail.deskripsi_singkat
      }).then(res => {
        this.$q.notify('Berhasil')
        this.$router.push('/admin/oleholeh')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
    }
  }
}
</script>
