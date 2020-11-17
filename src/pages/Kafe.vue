<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Kafe Kota Samarinda
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

  </q-page>
</template>

<script>
import axios from 'axios'
import SimpleCard from 'src/components/SimpleCard.vue'
import SearchBar from 'src/components/SearchBar.vue'

export default {
  components: { SimpleCard, SearchBar },
  name: 'PageKafe',
  data () {
    return {
      kafe: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/kafe')
      .then(response => (this.kafe = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.jam_buka,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/kafe/' + res.id
      }))))
  }
}
</script>
