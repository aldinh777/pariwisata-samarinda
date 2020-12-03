<template>
  <q-page class="q-pa-sm">

    <q-card class="q-mt-lg">
      <q-card-section>
        <div class="text-h6 text-grey-8">
          Working Space
          <q-btn to="/admin/workingspace/tambah" label="Tambah" class="float-right text-capitalize text-indigo-8 shadow-3" icon="add"/>
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
              <q-btn :to="'/admin/workingspace/update/' + props.row.slug" icon="edit" size="sm" flat dense/>
              <q-btn @click="confirmDelete(props.row.slug)" icon="delete" size="sm" class="q-ml-sm" flat dense/>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="hapus" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="red" text-color="white" />
          <span class="q-ml-sm">Yakin Ingin Menghapus?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Batalkan" color="primary" v-close-popup />
          <q-btn @click="deleteData" flat label="Hapus" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
export default {
  name: 'PageAdminWorkingSpace',
  data () {
    return {
      columns: [
        { name: 'Name', label: 'Nama', field: 'title', sortable: true, align: 'left' },
        { name: 'Created Date', label: 'Tanggal Dibuat', field: 'created_at', sortable: true, align: 'left' },
        { name: 'Action', label: '', field: 'Action', sortable: false, align: 'center' }
      ],
      filter: '',
      show_filter: false,
      hapus: false,
      slugHapus: ''
    }
  },
  methods: {
    confirmDelete (slug) {
      this.slugHapus = slug
      this.hapus = true
    },
    deleteData () {
      this.$axios.delete('/api/workingspace?slug=' + escape(this.slugHapus), {
        headers: {
          Authorization: 'Bearer ' + this.$q.localStorage.getItem('token')
        }
      }).then(res => {
        this.$q.notify('Data Terhapus')
        this.$store.dispatch('workingspace/getList')
      }).catch(err => {
        this.$q.notify('Error')
        console.log(err)
      })
    }
  },
  computed: {
    data () {
      return this.$store.state.workingspace.list
    }
  },
  preFetch ({ store }) {
    return store.dispatch('workingspace/getList')
  }
}
</script>
