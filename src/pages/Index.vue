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
import SimpleCard from 'src/components/SimpleCard.vue'
import ImageCard from 'src/components/ImageCard.vue'

const sampleWisata = {
  img: 'http://localhost:8000/img/wisata/Desa-Budaya-Pampang.jpg',
  title: 'Desa Budaya Pampang',
  subtitle: 'Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint consequatur adipisci sit maxime, perspiciatis officiis similique, ratione accusantium commodi molestias eius cupiditate suscipit. Consequatur perferendis aperiam eveniet tempora voluptatem.',
  target: '/wisata/1'
}
const sampleKafe = {
  img: 'http://localhost:8000/img/kafe/ruang-teduh.jpg',
  title: 'Ruang Teduh Coffee & Eatery Juanda',
  subtitle: 'Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda',
  description: 'Jam Buka : 09.00–00.00',
  target: '/kafe/1'
}
const sampleWorkingSpace = {
  img: 'http://localhost:8000/img/workingspace/ruangku.jpg',
  title: 'Ruangku Coworking Space',
  subtitle: 'Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda',
  description: 'Jam Buka : 09.00–21.00',
  target: '/workingspace/1'
}
const sampleKuliner = {
  img: 'http://localhost:8000/img/kuliner/nasi-kuning.jpg',
  title: 'Nasi Kuning'
}
const sampleOlehOleh = {
  img: 'http://localhost:8000/img/oleholeh/sarung-samarinda.jpg',
  title: 'Sarung Samarinda'
}

const wisata = [sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata, sampleWisata]
const kafe = [sampleKafe, sampleKafe, sampleKafe, sampleKafe]
const workingspace = [sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace]
const kuliner = [sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner, sampleKuliner]
const oleholeh = [sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh, sampleOlehOleh]

export default {
  components: {
    SimpleCard,
    ImageCard
  },
  name: 'PageIndex',
  data () {
    return {
      wisata,
      kafe,
      workingspace,
      kuliner,
      oleholeh
    }
  }
}
</script>
