<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <!-- Banner -->
    <ad-banner src="https://st3.depositphotos.com/2100659/33242/v/1600/depositphotos_332426834-stock-illustration-mega-sale-concept-horizontal-banner.jpg" />

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Working Space Kota Samarinda
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
import SearchBar from 'src/components/SearchBar.vue'
import AdBanner from 'src/components/AdBanner.vue'

export default {
  components: {
    SimpleCard,
    SearchBar,
    AdBanner
  },
  name: 'PageWorkingSpace',
  computed: {
    workingspace () {
      return this.$store.state.workingspace.list
    }
  },
  preFetch ({ store }) {
    return store.dispatch('workingspace/getList')
  }
}
</script>
