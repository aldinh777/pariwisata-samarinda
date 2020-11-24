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
            <q-btn class="float-right bg-green text-white">Tambah</q-btn>
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
  }
}
</script>
