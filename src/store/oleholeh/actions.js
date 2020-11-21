import axios from 'axios'

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get('http://localhost:8000/api/oleholeh' + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    description: res.deskripsi_singkat,
    img: res.gambar.startsWith('http') ? res.gambar : 'http://localhost:8000' + res.gambar,
    target: '/oleholeh/' + res.id
  }))
  commit('getList', list)
}

export async function getData ({ commit }, id) {
  const response = await axios.get('http://localhost:8000/api/oleholeh?id=' + id)
  const { nama, deskripsi, gambar } = response.data
  commit('getData', {
    title: nama,
    description: deskripsi,
    img: gambar.startsWith('http') ? gambar : 'http://localhost:8000' + gambar
  })
}

export async function getRecomendations ({ commit }, id) {
  const response = await axios.get('http://localhost:8000/api/oleholeh?limit=3&exceptId=' + id)
  const recomendations = response.data.map(function (res) {
    const { gambar } = res
    res.gambar = gambar.startsWith('http') ? gambar : 'http://localhost:8000' + gambar
    return res
  })
  commit('getRecomendations', recomendations)
}
