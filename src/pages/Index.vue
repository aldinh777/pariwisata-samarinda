<template>
  <q-page class="bg-grey-2">

    <!-- Search Bar -->
    <search-bar />

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
          :target="food.target"
        />
      </div>
    </div>
    <q-separator />

    <!-- Banner -->
    <div>
      <img class="full-width" src="https://st3.depositphotos.com/2100659/33242/v/1600/depositphotos_332426834-stock-illustration-mega-sale-concept-horizontal-banner.jpg" alt="">
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
          :target="food.target"
        />
      </div>
    </div>
    <q-separator />

    <!-- Banner -->
    <div>
      <img class="full-width" src="https://st4.depositphotos.com/6188090/19830/v/1600/depositphotos_198308926-stock-illustration-super-sale-discount-horizontal-banner.jpg" alt="">
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
import SearchBar from 'src/components/SearchBar.vue'

export default {
  components: {
    SimpleCard,
    ImageCard,
    SearchBar
  },
  name: 'PageIndex',
  computed: {
    wisata () {
      return this.$store.state.wisata.list
    },
    kafe () {
      return this.$store.state.kafe.list
    },
    kuliner () {
      return this.$store.state.kuliner.list
    },
    oleholeh () {
      return this.$store.state.oleholeh.list
    },
    workingspace () {
      return this.$store.state.workingspace.list
    }
  },
  preFetch ({ store }) {
    return Promise.all([
      store.dispatch('wisata/getList', 8),
      store.dispatch('kafe/getList', 8),
      store.dispatch('kuliner/getList', 8),
      store.dispatch('oleholeh/getList', 8),
      store.dispatch('workingspace/getList', 8)
    ])
  }
}
</script>
