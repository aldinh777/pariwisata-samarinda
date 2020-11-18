<template>
  <div class="col-12 col-md-3 col-sm-6 q-pa-sm">
    <router-link :to="target">
      <q-img :src="img" class="full-width full-height">
        <div class="absolute-bottom text-subtitle1 text-center">
            {{title}}
        </div>
      </q-img>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['img', 'title', 'target']
}
</script>
