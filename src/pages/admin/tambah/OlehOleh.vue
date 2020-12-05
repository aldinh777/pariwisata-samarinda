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
      const bodyFormData = new FormData()
      const { nama, deskripsi, gambar } = this.detail
      const data = {
        nama,
        deskripsi,
        gambar,
        deskripsi_singkat: this.detail.deskripsi_singkat
      }
      for (const key in data) {
        const value = data[key]
        bodyFormData.append(key, value)
      }
      this.$axios({
        method: 'post',
        url: '/api/oleholeh',
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + this.$q.cookies.get('token'),
          'Csrf-Token': this.$store.state.auth.csrf
        }
      }).then(res => {
        this.$q.notify('Berhasil Dibuat')
        this.$router.push('/admin/oleholeh')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
    }
  }
}
</script>
