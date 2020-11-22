<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-sm">
      <div class="row">
        <div class="col-12 col-sm-9 q-pa-sm">
          <img :src="data.img" alt="Gambar" class="full-width" />
          <q-card>
            <q-tabs v-model="tab">
              <q-tab name="deskripsi" label="Deskripsi" />
              <q-tab name="lokasi" label="Lokasi" />
              <q-tab name="review" label="Review" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab">
              <q-tab-panel name="deskripsi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">{{ data.title }}</div>
                <div class="text-bold q-mb-lg text-grey-8">{{ data.address }}</div>
                <div>
                  <div class="text-h6">Jam Buka :</div>
                  <ul>
                    <li>{{ data.open_time }}</li>
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
                <div class="q-mb-lg" style="white-space: pre-wrap">{{ data.description }}</div>
              </q-tab-panel>

              <q-tab-panel name="lokasi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Info Lokasi</div>
                <simple-maps :lat="data.position.lat" :lng="data.position.lng" />
                <div>
                  <ul>
                    <li>Alamat : {{ data.address }}</li>
                    <li>Latitude : {{ data.position.lat }}</li>
                    <li>Longitude : {{ data.position.lng }}</li>
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
            <div v-for="rec in recomendations" :key="rec.slug" @click="forward(rec.slug)">
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
import SimpleMaps from 'src/components/SimpleMaps.vue'

export default {
  name: 'PageDetailKafe',
  components: { SimpleMaps },
  data () {
    return {
      tab: 'deskripsi'
    }
  },
  computed: {
    recomendations () {
      return this.$store.state.kafe.recomendations
    },
    data () {
      return this.$store.state.kafe.data
    }
  },
  methods: {
    forward (slug) {
      this.$router.push('/kafe/' + slug)
    }
  },
  preFetch ({ currentRoute, store }) {
    const slug = currentRoute.params.slug
    return Promise.all([
      store.dispatch('kafe/getData', slug),
      store.dispatch('kafe/getRecomendations', slug)
    ])
  }
}
</script>
