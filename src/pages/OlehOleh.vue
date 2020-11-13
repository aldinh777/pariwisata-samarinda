<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
       Oleh-Oleh Kota Samarinda
      </div>
      <div class="row">
        <card-oleh-oleh />
        <card-oleh-oleh />
        <card-oleh-oleh />
        <card-oleh-oleh />
        <card-oleh-oleh />
        <card-oleh-oleh />
        <card-oleh-oleh />
        <card-oleh-oleh />
      </div>
    </div>

  </q-page>
</template>

<script>
import CardOlehOleh from 'src/components/CardOlehOleh.vue'
export default {
  components: { CardOlehOleh },
  name: 'PageOlehOleh'
}
</script>
