<template>
  <q-page class="bg-grey-2">

    <!-- Rekomendasi Wisata -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Wisata
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
    <q-separator />

    <!-- Rekomendasi Kuliner -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Kuliner
      </div>
      <div class="row">
        <image-card-kuliner />
        <image-card-kuliner />
        <image-card-kuliner />
        <image-card-kuliner />
        <image-card-kuliner />
        <image-card-kuliner />
        <image-card-kuliner />
        <image-card-kuliner />
      </div>
    </div>
    <q-separator />

    <!-- Rekomendasi Kafe -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Kafe
      </div>
      <div class="row">
        <card-kafe />
        <card-kafe />
        <card-kafe />
        <card-kafe />
      </div>
    </div>
    <q-separator />

    <!-- Rekomendasi Oleh-Oleh -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Oleh-Oleh
      </div>
      <div class="row">
        <image-card-oleh-oleh />
        <image-card-oleh-oleh />
        <image-card-oleh-oleh />
        <image-card-oleh-oleh />
        <image-card-oleh-oleh />
        <image-card-oleh-oleh />
        <image-card-oleh-oleh />
        <image-card-oleh-oleh />
      </div>
    </div>
    <q-separator />

    <!-- Rekomendasi Working Space -->
    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Rekomendasi Working Space
      </div>
      <div class="row">
        <card-working-space />
        <card-working-space />
        <card-working-space />
        <card-working-space />
      </div>
    </div>

  </q-page>
</template>

<script>
import CardWisata from 'src/components/CardWisata.vue'
import CardKafe from 'src/components/CardKafe.vue'
import CardWorkingSpace from 'src/components/CardWorkingSpace.vue'
import ImageCardKuliner from 'src/components/ImageCardKuliner.vue'
import ImageCardOlehOleh from 'src/components/ImageCardOlehOleh.vue'

export default {
  components: {
    CardWisata,
    CardKafe,
    CardWorkingSpace,
    ImageCardKuliner,
    ImageCardOlehOleh
  },
  name: 'PageIndex'
}
</script>
