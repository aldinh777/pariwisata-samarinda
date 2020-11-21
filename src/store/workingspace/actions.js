import axios from 'axios'

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get('http://' + location.hostname + ':8000/api/workingspace' + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://' + location.hostname + ':8000' + res.gambar,
    target: '/workingspace/' + res.id
  }))
  commit('getList', list)
}

export async function getData ({ commit }, id) {
  const response = await axios.get('http://' + location.hostname + ':8000/api/workingspace?id=' + id)
  const { nama, alamat, deskripsi, gambar, lat, lng } = response.data
  commit('getData', {
    title: nama,
    address: alamat,
    description: deskripsi,
    open_time: response.data.jam_buka,
    img: gambar.startsWith('http') ? gambar : 'http://' + location.hostname + ':8000' + gambar,
    position: { lat, lng }
  })
}

export async function getRecomendations ({ commit }, id) {
  const response = await axios.get('http://' + location.hostname + ':8000/api/workingspace?limit=3&exceptId=' + id)
  const recomendations = response.data.map(function (rec) {
    const { gambar } = rec
    rec.gambar = gambar.startsWith('http') ? gambar : 'http://' + location.hostname + ':8000' + gambar
    return rec
  })
  commit('getRecomendations', recomendations)
}
