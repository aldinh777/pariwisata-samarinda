<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <!-- Banner -->
    <div>
      <img class="full-width" src="https://st4.depositphotos.com/6188090/19830/v/1600/depositphotos_198308926-stock-illustration-super-sale-discount-horizontal-banner.jpg" alt="">
    </div>

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Kuliner Kota Samarinda
      </div>
      <div class="row">
        <simple-card v-for="food in kuliner"
          :key="food.target"
          :img="food.img"
          :title="food.title"
          :subtitle="food.subtitle"
          :description="food.description"
          :target="food.target"
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
  name: 'PageKuliner',
  data () {
    return {
      kuliner: null
    }
  },
  mounted () {
    axios
      .get('http://' + location.hostname + ':8000/api/kuliner')
      .then(response => (this.kuliner = response.data.map(res => ({
        title: res.nama,
        description: res.deskripsi_singkat,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://' + location.hostname + ':8000' + res.gambar,
        target: '/kuliner/' + res.id
      }))))
  }
}
</script>
