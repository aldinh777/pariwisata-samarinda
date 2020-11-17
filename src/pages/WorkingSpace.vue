<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-md">
      <div class="text-center text-h4 q-pa-lg">
        Working Space Kota Samarinda
      </div>
      <div class="row">
        <simple-card v-for="place in workingspace"
          :key="place.target"
          :img="place.img"
          :title="place.title"
          :subtitle="place.subtitle"
          :description="place.description"
          :target="place.target"
        />
      </div>
    </div>

  </q-page>
</template>

<script>
import SimpleCard from 'src/components/SimpleCard.vue'

const sampleWorkingSpace = {
  img: 'http://localhost:8000/img/workingspace/ruangku.jpg',
  title: 'Ruangku Coworking Space',
  subtitle: 'Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda',
  description: 'Jam Buka : 09.00–21.00',
  target: '/workingspace/1'
}
const workingspace = [sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace, sampleWorkingSpace]

export default {
  components: {
    SimpleCard
  },
  name: 'PageWorkingSpace',
  data () {
    return {
      workingspace
    }
  }
}
</script>
