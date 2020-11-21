<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <!-- Banner -->
    <div>
      <img class="full-width" src="https://st4.depositphotos.com/6188090/19830/v/1600/depositphotos_198308926-stock-illustration-super-sale-discount-horizontal-banner.jpg" alt="">
    </div>

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
import SearchBar from 'src/components/SearchBar.vue'

export default {
  components: { SimpleCard, SearchBar },
  name: 'PageOlehOleh',
  computed: {
    oleholeh () {
      return this.$store.state.oleholeh.list
    }
  },
  preFetch ({ store }) {
    return store.dispatch('oleholeh/getList')
  }
}
</script>
