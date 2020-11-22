<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <!-- Banner -->
    <ad-banner src="https://st4.depositphotos.com/6188090/19830/v/1600/depositphotos_198308926-stock-illustration-super-sale-discount-horizontal-banner.jpg" />

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
import AdBanner from 'src/components/AdBanner.vue'

export default {
  components: { SimpleCard, SearchBar, AdBanner },
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
