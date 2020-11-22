<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <!-- Banner -->
    <ad-banner src="https://st4.depositphotos.com/6188090/19830/v/1600/depositphotos_198308926-stock-illustration-super-sale-discount-horizontal-banner.jpg" />

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Kuliner Kota Samarinda
      </div>
      <div class="row">
        <simple-card v-for="food in list"
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
  name: 'PageKuliner',
  computed: {
    list () {
      return this.$store.state.kuliner.list
    }
  },
  preFetch ({ store }) {
    return store.dispatch('kuliner/getList')
  }
}
</script>
