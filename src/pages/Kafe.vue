<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Kafe Kota Samarinda
      </div>
      <div class="row">
        <card-kafe />
        <card-kafe />
        <card-kafe />
        <card-kafe />
        <card-kafe />
        <card-kafe />
        <card-kafe />
        <card-kafe />
      </div>
    </div>

  </q-page>
</template>

<script>
import CardKafe from 'src/components/CardKafe.vue'
export default {
  components: { CardKafe },
  name: 'PageKafe'
}
</script>
