<template>
  <q-page class="bg-grey-2">

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
import SimpleCard from 'src/components/SimpleCard.vue'

const sampleKafe = {
  img: 'http://localhost:8000/img/kafe/ruang-teduh.jpg',
  title: 'Ruang Teduh Coffee & Eatery Juanda',
  subtitle: 'Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda',
  description: 'Jam Buka : 09.00–00.00',
  target: '/kafe/1'
}
const kafe = [sampleKafe, sampleKafe, sampleKafe, sampleKafe, sampleKafe, sampleKafe, sampleKafe, sampleKafe]

export default {
  components: { SimpleCard },
  name: 'PageKafe',
  data () {
    return {
      kafe
    }
  }
}
</script>
