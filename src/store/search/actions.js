import axios from 'axios'

export async function searchWisata ({ commit }, key) {
  const response = await axios.get('http://' + location.hostname + ':8000/api/wisata/search?key=' + key)
  const wisata = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: res.deskripsi_singkat,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://' + location.hostname + ':8000' + res.gambar,
    target: '/wisata/' + res.id
  }))
  commit('searchWisata', wisata)
}

export async function searchKafe ({ commit }, key) {
  const response = await axios.get('http://' + location.hostname + ':8000/api/kafe/search?key=' + key)
  const kafe = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://' + location.hostname + ':8000' + res.gambar,
    target: '/kafe/' + res.id
  }))
  commit('searchKafe', kafe)
}

export async function searchWorkingSpace ({ commit }, key) {
  const response = await axios.get('http://' + location.hostname + ':8000/api/workingspace/search?key=' + key)
  const workingspace = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://' + location.hostname + ':8000' + res.gambar,
    target: '/workingspace/' + res.id
  }))
  commit('searchWorkingSpace', workingspace)
}

export async function searchKuliner ({ commit }, key) {
  const response = await axios.get('http://' + location.hostname + ':8000/api/kuliner/search?key=' + key)
  const kuliner = response.data.map(res => ({
    title: res.nama,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://' + location.hostname + ':8000' + res.gambar,
    target: '/kuliner/' + res.id
  }))
  commit('searchKuliner', kuliner)
}

export async function searchOlehOleh ({ commit }, key) {
  const response = await axios.get('http://' + location.hostname + ':8000/api/oleholeh/search?key=' + key)
  const oleholeh = response.data.map(res => ({
    title: res.nama,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://' + location.hostname + ':8000' + res.gambar,
    target: '/oleholeh/' + res.id
  }))
  commit('searchOlehOleh', oleholeh)
}
