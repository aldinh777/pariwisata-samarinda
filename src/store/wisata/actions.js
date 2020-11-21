import axios from 'axios'

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get('http://localhost:8000/api/wisata' + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: res.deskripsi_singkat,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
    target: '/wisata/' + res.id
  }))
  commit('getList', list)
}

export async function getData ({ commit }, id) {
  const response = await axios.get('http://localhost:8000/api/wisata?id=' + id)
  const { nama, lokasi, deskripsi, gambar, lat, lng } = response.data
  commit('getData', {
    title: nama,
    address: lokasi,
    description: deskripsi,
    img: gambar.startsWith('http') ? gambar : 'http://localhost:8000' + gambar,
    position: { lat, lng }
  })
}

export async function getRecomendations ({ commit }, id) {
  const response = await axios.get('http://localhost:8000/api/wisata?limit=3&exceptId=' + id)
  const recomendations = response.data.map(function (res) {
    const { gambar } = res
    res.gambar = gambar.startsWith('http') ? gambar : 'http://localhost:8000' + gambar
    return res
  })
  commit('getRecomendations', recomendations)
}
