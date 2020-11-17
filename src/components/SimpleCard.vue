<template>
  <div class="col-12 col-md-3 col-sm-6 q-pa-sm">
    <q-card>
      <img :src="img" alt="Gambar">
      <div>
        <div class="q-pa-md">
          <div class="text-h6">{{title}}</div>
          <div>{{subtitle}}</div>
        </div>
        <q-separator />
        <div class="q-pa-md">
          {{description}}
        </div>
        <q-separator />
        <div class="q-pa-md text-center text-white">
          <q-btn :to="target" class="bg-orange-6 q-pa-xs">Lebih Lanjut</q-btn>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['img', 'title', 'subtitle', 'description', 'target']
}
</script>
