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
import SimpleCard from 'src/components/SimpleCard.vue'

const sampleOlehOleh = {
  img: 'http://localhost:8000/img/oleholeh/sarung-samarinda.jpg',
  title: 'Sarung Samarinda',
  description: 'Sarung Samarinda merupakan salah satu produk unggulan yang diproduksi oleh masyarakat lokal Samarinda.',
  target: '/oleholeh/1'
}
const oleholeh = [sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh]

export default {
  components: { SimpleCard },
  name: 'PageOlehOleh',
  data () {
    return {
      oleholeh
    }
  }
}
</script>
