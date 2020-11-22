<template>
  <div>
    <img class="full-width" :src="src" alt="" loading="lazy">
  </div>
</template>

<script>
export default {
  props: ['src']
}
</script>
