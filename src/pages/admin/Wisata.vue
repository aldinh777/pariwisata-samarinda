<template>
  <q-page class="q-pa-sm">

    <q-card class="q-mt-lg">
      <q-card-section>
        <div class="text-h6 text-grey-8">
          Wisata
          <q-btn label="Tambah" class="float-right text-capitalize text-indigo-8 shadow-3" icon="add"/>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <q-table :data="data" :columns="columns">
          <template v-slot:body-cell-Name="props">
            <q-td :props="props">
              <q-item style="max-width: 420px">
                <q-item-section avatar>
                  <q-avatar square>
                    <img :src="props.row.img">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ props.row.title }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Action="props">
            <q-td :props="props">
              <q-btn icon="edit" size="sm" flat dense/>
              <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense/>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: 'PageAdminWisata',
  data () {
    return {
      columns: [
        { name: 'Name', label: 'Nama', field: 'title', sortable: true, align: 'left' },
        { name: 'Created Date', label: 'Tanggal Dibuat', field: 'created_date', sortable: true, align: 'left' },
        { name: 'Action', label: '', field: 'Action', sortable: false, align: 'center' }
      ],
      filter: '',
      show_filter: false
    }
  },
  computed: {
    data () {
      console.log(this.$store.state.wisata.list)
      return this.$store.state.wisata.list
    }
  },
  preFetch ({ store }) {
    return store.dispatch('wisata/getList')
  }
}
</script>
