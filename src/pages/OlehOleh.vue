<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
       Oleh-Oleh Kota Samarinda
      </div>
      <div class="row">
        <simple-card v-for="food in oleholeh"
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

export default {
  components: { SimpleCard },
  name: 'PageOlehOleh',
  data () {
    return {
      oleholeh: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/oleholeh')
      .then(response => (this.oleholeh = response.data.map(res => ({
        title: res.nama,
        description: res.deskripsi_singkat,
        img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
        target: '/oleholeh/' + res.id
      }))))
  }
}
</script>
