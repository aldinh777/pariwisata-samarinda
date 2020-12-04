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
            <q-btn @click="save" class="float-right bg-green text-white">Simpan</q-btn>
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
  methods: {
    save () {
      const bodyFormData = new FormData()
      const { nama, deskripsi, gambar } = this.detail
      const data = {
        _method: 'PUT',
        nama,
        deskripsi,
        gambar,
        deskripsi_singkat: this.detail.deskripsi_singkat,
        slug: this.$route.params.slug
      }
      for (const key in data) {
        const value = data[key]
        bodyFormData.append(key, value)
      }

      this.$axios({
        method: 'post',
        url: '/api/kuliner',
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + this.$q.cookies.get('token')
        }
      }).then(res => {
        this.$q.notify('Berhasil Diubah')
        this.$router.push('/admin/kuliner')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
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
