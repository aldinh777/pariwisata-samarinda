<template>
  <q-page class="bg-grey-2">

    <!-- Rekomendasi Wisata -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Wisata
      </div>
      <div class="row">
        <simple-card v-for="place in wisata"
          :key="place.target"
          :img="place.img"
          :title="place.title"
          :subtitle="place.subtitle"
          :description="place.description"
          :target="place.target"
        />
      </div>
    </div>
    <q-separator />

    <!-- Rekomendasi Kuliner -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Kuliner
      </div>
      <div class="row">
        <image-card v-for="food in kuliner"
          :key="food.target"
          :img="food.img"
          :title="food.title"
        />
      </div>
    </div>
    <q-separator />

    <!-- Rekomendasi Kafe -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Kafe
      </div>
      <div class="row">
        <simple-card v-for="place in kafe"
          :key="place.target"
          :img="place.img"
          :title="place.title"
          :subtitle="place.subtitle"
          :description="place.description"
          :target="place.target"
        />
      </div>
    </div>
    <q-separator />

    <!-- Rekomendasi Oleh-Oleh -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Oleh-Oleh
      </div>
      <div class="row">
        <image-card v-for="food in oleholeh"
          :key="food.target"
          :img="food.img"
          :title="food.title"
        />
      </div>
    </div>
    <q-separator />

    <!-- Rekomendasi Working Space -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Working Space
      </div>
      <div class="row">
        <simple-card v-for="place in workingspace"
          :key="place.target"
          :img="place.img"
          :title="place.title"
          :subtitle="place.subtitle"
          :description="place.description"
          :target="place.target"
        />
      </div>
    </div>

  </q-page>
</template>

<script>
import axios from 'axios'
import SimpleCard from 'src/components/SimpleCard.vue'
import ImageCard from 'src/components/ImageCard.vue'

export default {
  components: {
    SimpleCard,
    ImageCard
  },
  name: 'PageIndex',
  data () {
    return {
      wisata: null,
      kafe: null,
      workingspace: null,
      kuliner: null,
      oleholeh: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/wisata?limit=8')
      .then(response => (this.wisata = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.deskripsi_singkat,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/wisata/' + res.id
      }))))
    axios
      .get('http://localhost:8000/api/kafe?limit=8')
      .then(response => (this.kafe = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.jam_buka,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/kafe/' + res.id
      }))))
    axios
      .get('http://localhost:8000/api/workingspace?limit=8')
      .then(response => (this.workingspace = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.jam_buka,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/workingspace/' + res.id
      }))))
    axios
      .get('http://localhost:8000/api/kuliner?limit=8')
      .then(response => (this.kuliner = response.data.map(res => ({
        title: res.nama,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar
      }))))
    axios
      .get('http://localhost:8000/api/oleholeh?limit=8')
      .then(response => (this.oleholeh = response.data.map(res => ({
        title: res.nama,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar
      }))))
  }
}
</script>
