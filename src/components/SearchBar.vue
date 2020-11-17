<template>
  <div class="bg-primary text-white q-pa-lg">
    <form action="/search" method="get" class="row">
      <div class="col-sm-9 col-12 q-pa-xs">
        <q-input class="bg-white" name="key" v-model="search" square outlined label="Temukan Tujuan Wisata" />
      </div>
      <div class="col-sm-3 col-12 q-pa-xs">
        <q-btn type="submit" class="full-width full-height bg-yellow-8">Telusuri</q-btn>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: this.$route.query.key
    }
  }
}
</script>
