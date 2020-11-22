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
                <div class="q-mb-lg" style="white-space: pre-wrap">{{ data.description }}</div>
              </q-tab-panel>

              <q-tab-panel name="lokasi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Lokasi Ditemukan</div>
                <div class="row q-mb-md">
                  <div class="col-4 q-pa-xs">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-f/11/d9/9d/c5/ayam-gepuk.jpg" alt="Gambar" class="full-width" style="height: 160px">
                    <div class="q-pl-md">
                      <div class="text-bold">RM. Ayam Gepuk Asli</div>
                      <div>Asia, Indonesia</div>
                      <q-btn class="text-blue">Info Lebih Lanjut</q-btn>
                    </div>
                  </div>
                  <div class="col-4 q-pa-xs">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-f/11/d9/9d/c5/ayam-gepuk.jpg" alt="Gambar" class="full-width" style="height: 160px">
                    <div class="q-pl-md">
                      <div class="text-bold">RM. Ayam Gepuk Asli</div>
                      <div>Asia, Indonesia</div>
                      <q-btn class="text-blue">Info Lebih Lanjut</q-btn>
                    </div>
                  </div>
                  <div class="col-4 q-pa-xs">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-f/11/d9/9d/c5/ayam-gepuk.jpg" alt="Gambar" class="full-width" style="height: 160px">
                    <div class="q-pl-md">
                      <div class="text-bold">RM. Ayam Gepuk Asli</div>
                      <div>Asia, Indonesia</div>
                      <q-btn class="text-blue">Info Lebih Lanjut</q-btn>
                    </div>
                  </div>
                </div>
                <simple-maps :lat="-0.502999" :lng="117.1498923" :markers="[
                  {lat: -0.5026361, lng: 117.1526781},
                  {lat: -0.4994576, lng: 117.1467443}
                ]" />
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
  name: 'PageDetailOlehOleh',
  components: { SimpleMaps },
  data () {
    return {
      tab: 'deskripsi'
    }
  },
  computed: {
    data () {
      return this.$store.state.oleholeh.data
    },
    recomendations () {
      return this.$store.state.oleholeh.recomendations
    }
  },
  methods: {
    forward (slug) {
      this.$router.push('/oleholeh/' + slug)
    }
  },
  preFetch ({ store, currentRoute }) {
    const slug = currentRoute.params.slug
    return Promise.all([
      store.dispatch('oleholeh/getData', slug),
      store.dispatch('oleholeh/getRecomendations', slug)
    ])
  }
}
</script>
