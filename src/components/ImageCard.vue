<template>
  <div class="col-12 col-md-3 col-sm-6 q-pa-sm">
    <q-img
      :src="img"
      style="width: 100%"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        {{title}}
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  props: ['img', 'title']
}
</script>
