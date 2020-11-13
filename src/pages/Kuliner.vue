<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Kuliner Kota Samarinda
      </div>
      <div class="row">
        <card-kuliner />
        <card-kuliner />
        <card-kuliner />
        <card-kuliner />
        <card-kuliner />
        <card-kuliner />
        <card-kuliner />
        <card-kuliner />
      </div>
    </div>

  </q-page>
</template>

<script>
import CardKuliner from 'src/components/CardKuliner.vue'
export default {
  components: { CardKuliner },
  name: 'PageKuliner'
}
</script>
