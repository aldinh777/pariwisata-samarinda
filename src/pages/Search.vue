<template>
  <q-page class="bg-grey-2">

    <!-- Search Bar -->
    <search-bar />

    <div class="q-pa-md" v-if="wisata.length + kuliner.length + kafe.length + oleholeh.length + workingspace.length == 0">
      <div class="text-center text-h4 q-pa-lg">
        Pencarian Tidak Ditemukan
      </div>
    </div>

    <!-- Hasil Pencarian Wisata -->
    <div class="q-pa-md" v-if="wisata.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Wisata
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
      <q-separator />
    </div>

    <!-- Hasil Pencarian Kuliner -->
    <div class="q-pa-md" v-if="kuliner.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Kuliner
      </div>
      <div class="row">
        <image-card v-for="food in kuliner"
          :key="food.target"
          :img="food.img"
          :title="food.title"
        />
      </div>
      <q-separator />
    </div>

    <!-- Hasil Pencarian Kafe -->
    <div class="q-pa-md" v-if="kafe.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Kafe
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
      <q-separator />
    </div>

    <!-- Hasil Pencarian Oleh-Oleh -->
    <div class="q-pa-md" v-if="oleholeh.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Oleh-Oleh
      </div>
      <div class="row">
        <image-card v-for="food in oleholeh"
          :key="food.target"
          :img="food.img"
          :title="food.title"
        />
      </div>
      <q-separator />
    </div>

    <!-- Hasil Pencarian Working Space -->
    <div class="q-pa-md" v-if="workingspace.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Working Space
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
import SearchBar from 'src/components/SearchBar.vue'

export default {
  components: {
    SimpleCard,
    ImageCard,
    SearchBar
  },
  name: 'PageIndex',
  data () {
    return {
      wisata: [],
      kafe: [],
      workingspace: [],
      kuliner: [],
      oleholeh: [],
      notfound: true
    }
  },
  mounted () {
    const key = this.$route.query.key

    axios
      .get('http://localhost:8000/api/wisata/search?key=' + key)
      .then(response => (this.wisata = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.deskripsi_singkat,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/wisata/' + res.id
      }))))
    axios
      .get('http://localhost:8000/api/kafe/search?key=' + key)
      .then(response => (this.kafe = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.jam_buka,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/kafe/' + res.id
      }))))
    axios
      .get('http://localhost:8000/api/workingspace/search?key=' + key)
      .then(response => (this.workingspace = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.jam_buka,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/workingspace/' + res.id
      }))))
    axios
      .get('http://localhost:8000/api/kuliner/search?key=' + key)
      .then(response => (this.kuliner = response.data.map(res => ({
        title: res.nama,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar
      }))))
    axios
      .get('http://localhost:8000/api/oleholeh/search?key=' + key)
      .then(response => (this.oleholeh = response.data.map(res => ({
        title: res.nama,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar
      }))))
  }
}
</script>
