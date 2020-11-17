<template>
  <q-page class="bg-grey-2">

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
import SimpleCard from 'src/components/SimpleCard.vue'

const sampleKuliner = {
  img: 'http://localhost:8000/img/kuliner/nasi-kuning.jpg',
  title: 'Nasi Kuning',
  description: 'Kepopuleran makanan ini telah membuahkan sebuah nama untuk satu wilayah di tengah kota, yaitu Kampoeng Nasi Kuning.',
  target: '/kuliner/1'
}
const kuliner = [sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner]

export default {
  components: { SimpleCard },
  name: 'PageKuliner',
  data () {
    return {
      kuliner
    }
  }
}
</script>
