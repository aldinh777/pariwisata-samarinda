<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Destinasi Wisata Kota Samarinda
      </div>
      <div class="row">
        <card-wisata />
        <card-wisata />
        <card-wisata />
        <card-wisata />
        <card-wisata />
        <card-wisata />
        <card-wisata />
        <card-wisata />
      </div>
    </div>

  </q-page>
</template>

<script>
import CardWisata from 'src/components/CardWisata.vue'
export default {
  components: { CardWisata },
  name: 'PageWisata'
}
</script>
