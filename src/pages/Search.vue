<template>
  <q-page class="bg-grey-2">

    <!-- Search Bar -->
    <search-bar />

    <div class="q-pa-md" v-if="wisata.length + kuliner.length + kafe.length + oleholeh.length + workingspace.length == 0">
      <div class="text-center text-h4 q-pa-lg">
        Pencarian Tidak Ditemukan
      </div>
    </div>

    <!-- Hasil Pencarian Wisata -->
    <div class="q-pa-md" v-if="wisata.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Wisata
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
      <q-separator />
    </div>

    <!-- Hasil Pencarian Kuliner -->
    <div class="q-pa-md" v-if="kuliner.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Kuliner
      </div>
      <div class="row">
        <image-card v-for="food in kuliner"
          :key="food.target"
          :target="food.target"
          :img="food.img"
          :title="food.title"
        />
      </div>
      <q-separator />
    </div>

    <!-- Hasil Pencarian Kafe -->
    <div class="q-pa-md" v-if="kafe.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Kafe
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
      <q-separator />
    </div>

    <!-- Hasil Pencarian Oleh-Oleh -->
    <div class="q-pa-md" v-if="oleholeh.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Oleh-Oleh
      </div>
      <div class="row">
        <image-card v-for="food in oleholeh"
          :key="food.target"
          :target="food.target"
          :img="food.img"
          :title="food.title"
        />
      </div>
      <q-separator />
    </div>

    <!-- Hasil Pencarian Working Space -->
    <div class="q-pa-md" v-if="workingspace.length > 0">
      <div class="text-center text-h4 q-pa-lg">
        Hasil Pencarian Working Space
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
  name: 'PageSearch',
  computed: {
    wisata () {
      return this.$store.state.search.wisata
    },
    kafe () {
      return this.$store.state.search.kafe
    },
    workingspace () {
      return this.$store.state.search.workingspace
    },
    kuliner () {
      return this.$store.state.search.kuliner
    },
    oleholeh () {
      return this.$store.state.search.oleholeh
    }
  },
  preFetch ({ store, currentRoute }) {
    const key = currentRoute.query.key

    return Promise.all([
      store.dispatch('search/searchWisata', key),
      store.dispatch('search/searchKafe', key),
      store.dispatch('search/searchWorkingSpace', key),
      store.dispatch('search/searchKuliner', key),
      store.dispatch('search/searchOlehOleh', key)
    ])
  }
}
</script>
