<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-sm">
      <div class="row">
        <div class="col-12 col-sm-9 q-pa-sm">
          <img :src="img" alt="Gambar" class="full-width" />
          <q-card>
            <q-tabs v-model="tab">
              <q-tab name="deskripsi" label="Deskripsi" />
              <q-tab name="lokasi" label="Lokasi" />
              <q-tab name="review" label="Review" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab">
              <q-tab-panel name="deskripsi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">{{ title }}</div>
                <div class="text-bold q-mb-lg text-grey-8">{{ address }}</div>
                <div>
                  <div class="text-h6">Jam Buka :</div>
                  <ul>
                    <li>{{ open_time }}</li>
                  </ul>
                </div>
                <div>
                  <div class="text-h6">Makanan :</div>
                  <ul>
                    <li>Sate Betina</li>
                    <li>Ramen Asli Original</li>
                  </ul>
                </div>
                <div>
                  <div class="text-h6">Minuman :</div>
                  <ul>
                    <li>Air Dingin Manis</li>
                    <li>Es Teh Bersoda</li>
                  </ul>
                </div>
                <div class="q-mb-lg" style="white-space: pre-wrap">{{ description }}</div>
              </q-tab-panel>

              <q-tab-panel name="lokasi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Info Lokasi</div>
                <simple-maps :lat="position.lat" :lng="position.lng" />
                <div>
                  <ul>
                    <li>Alamat : {{ address }}</li>
                    <li>Latitude : {{ position.lat }}</li>
                    <li>Longitude : {{ position.lng }}</li>
                  </ul>
                </div>
                <div class="text-h6">Jarak dari bandara (Bandara Internasional Aji Pangeran Tumenggung Pranoto)</div>
                <p>±10 km</p>
                <div class="text-h6">Estimasi perjalanan (Menggunakan Kendaraan)</div>
                <p>±5 menit</p>
              </q-tab-panel>

              <q-tab-panel name="review" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Review</div>
                <q-card class="q-pa-lg bg-blue-1">
                  <div>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                  </div>
                  <div>
                    Oleh : Udin Santoso
                  </div>
                  <div class="q-mt-lg">
                    pengemasan cepat pengiriman nya pun cuma paket ku kaya nya paling bawah gitu yah soal nya bocor😥 terimakasih hadiah nyaa toko udah langganan ko
                  </div>
                  <div style="position: absolute; top: 20px; right: 40px" class="text-right">
                    12 Oktober 2020
                  </div>
                </q-card>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>

        <div class="col-12 col-sm-3 q-pa-sm">
          <q-card class="q-pa-md">
            <div class="text-h6 text-blue-8">Lihat Juga</div>
            <q-separator />
            <div v-for="rec in recomendation" :key="rec.id" @click="forward(rec.id)">
              <div class="q-mt-md q-mb-md">
                <img :src="rec.gambar" alt="Gambar" class="full-width">
                <div class="text-bold q-mt-md">{{ rec.nama }}</div>
                <div>{{ rec.jam_buka }}</div>
              </div>
              <q-separator />
            </div>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import axios from 'axios'
import SimpleMaps from 'src/components/SimpleMaps.vue'

export default {
  name: 'PageDetailKafe',
  components: { SimpleMaps },
  data () {
    return {
      tab: 'deskripsi',
      recomendation: [],
      title: '',
      address: '',
      description: '',
      open_time: '',
      img: '',
      position: {
        lat: 0,
        lng: 0
      }
    }
  },
  methods: {
    getData (id) {
      axios
        .get('http://' + location.hostname + ':8000/api/kafe?id=' + id)
        .then(response => {
          const { nama, alamat, deskripsi, gambar, lat, lng } = response.data
          this.title = nama
          this.address = alamat
          this.description = deskripsi
          this.open_time = response.data.jam_buka
          this.img = gambar.startsWith('http') ? gambar : 'http://' + location.hostname + ':8000' + gambar
          this.position = { lat, lng }
        })
    },
    getRecomendation (id) {
      axios
        .get('http://' + location.hostname + ':8000/api/kafe?limit=3&exceptId=' + id)
        .then(response => (this.recomendation = response.data.map(function (rec) {
          const { gambar } = rec
          rec.gambar = gambar.startsWith('http') ? gambar : 'http://' + location.hostname + ':8000' + gambar
          return rec
        })))
    },
    forward (id) {
      this.getData(id)
      this.getRecomendation(id)
      this.$router.push('/kafe/' + id)
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.getData(id)
    this.getRecomendation(id)
  }
}
</script>
