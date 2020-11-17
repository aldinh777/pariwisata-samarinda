<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Destinasi Wisata Kota Samarinda
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

  </q-page>
</template>

<script>
import SimpleCard from 'src/components/SimpleCard.vue'

const sampleWisata = {
  img: 'http://localhost:8000/img/wisata/Desa-Budaya-Pampang.jpg',
  title: 'Desa Budaya Pampang',
  subtitle: 'Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint consequatur adipisci sit maxime, perspiciatis officiis similique, ratione accusantium commodi molestias eius cupiditate suscipit. Consequatur perferendis aperiam eveniet tempora voluptatem.',
  target: '/wisata/1'
}
const wisata = [sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata]

export default {
  components: { SimpleCard },
  name: 'PageWisata',
  data () {
    return {
      wisata
    }
  }
}
</script>
