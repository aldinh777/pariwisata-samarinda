<template>
  <div class="col-12 col-md-3 col-sm-6 q-pa-sm">
    <q-card class="full-height">
      <img :src="img" alt="Gambar" class="full-width" width="200" height="100" style="height: 200px" loading="lazy">
      <div>
        <div class="q-pa-md">
          <div class="text-h6">{{title}}</div>
          <div>{{subtitle}}</div>
        </div>
        <q-separator />
        <div class="q-pa-md">
          {{description}}
        </div>
        <div style="visibility: hidden">
          <q-separator />
          <div class="q-pa-md text-center text-white" style="position: relative; bottom: 0px">
            <q-btn :to="target" class="bg-orange-6 q-pa-xs">Lebih Lanjut</q-btn>
          </div>
        </div>
        <div style="position: absolute; bottom: 0px" class="full-width">
          <q-separator />
          <div class="q-pa-md text-center text-white" style="position: relative; bottom: 0px">
            <q-btn :to="target" class="bg-orange-6 q-pa-xs">Lebih Lanjut</q-btn>
          </div>
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
