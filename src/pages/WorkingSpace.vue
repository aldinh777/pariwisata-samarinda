<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Working Space Kota Samarinda
      </div>
      <div class="row">
        <card-working-space />
        <card-working-space />
        <card-working-space />
        <card-working-space />
        <card-working-space />
        <card-working-space />
        <card-working-space />
        <card-working-space />
      </div>
    </div>

  </q-page>
</template>

<script>
import CardWorkingSpace from 'src/components/CardWorkingSpace.vue'

export default {
  components: {
    CardWorkingSpace
  },
  name: 'PageWorkingSpace'
}
</script>
