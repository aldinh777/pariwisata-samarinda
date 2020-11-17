<template>
  <q-page class="bg-grey-2">
    <search-bar />

    <div class="q-pa-md text-center">
      <div class="text-h2 text-bold q-pa-lg">
        Tentang Kami
      </div>
      <div class="text-subtitle1 q-pa-lg text-center">
        Kami adalah perusahaan yang bergerak di bidang perminyakan PT. Industri Minyak Melimpah Indonesia yang tersebar di seluruh penjuru negeri.
      </div>
    </div>

    <q-separator />

    <div class="q-pa-md text-center">
      <div class="text-h2 text-bold q-pa-lg">
        Visi :
      </div>
      <div class="text-subtitle1 q-pa-lg text-center">
        Menyediakan energi yang melimpah kepada masyarakat mampu dan menengah keatas
        <br />
        <br />
        Monopoli minyak dunia dan mengadu domba negara agar ikut perang dunia
      </div>
    </div>

    <q-separator />

    <div class="q-pa-md text-center">
      <div class="text-h2 text-bold q-pa-lg">
        Misi :
      </div>
      <div class="text-subtitle1 q-pa-lg text-center">
        Menyatukan rakyat dengan menggabungkan Pertalite dan Pertamina hingga menjadi Pertalitemina
        <br />
        <br />
        Mampu memberikan pelayanan yang baik kepada masyarakat yang membayar
      </div>
    </div>

  </q-page>
</template>

<script>
import SearchBar from 'src/components/SearchBar.vue'
export default {
  components: { SearchBar },
  name: 'PageAbout'
}
</script>
