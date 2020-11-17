<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <!-- Banner -->
    <div>
      <img class="full-width" src="https://st3.depositphotos.com/2100659/33242/v/1600/depositphotos_332426834-stock-illustration-mega-sale-concept-horizontal-banner.jpg" alt="">
    </div>

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Working Space Kota Samarinda
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
import SearchBar from 'src/components/SearchBar.vue'

export default {
  components: {
    SimpleCard,
    SearchBar
  },
  name: 'PageWorkingSpace',
  data () {
    return {
      workingspace: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/workingspace')
      .then(response => (this.workingspace = response.data.map(res => ({
        title: res.nama,
        subtitle: res.alamat,
        description: res.jam_buka,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/workingspace/' + res.id
      }))))
  }
}
</script>
