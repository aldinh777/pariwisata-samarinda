import axios from 'axios'
import { api, getImage } from '../config'

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get(api.host + api.endpoint.wisata + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: res.deskripsi_singkat,
    img: getImage(res.gambar),
    target: '/wisata/' + res.slug
  }))
  commit('getList', list)
}

export async function getData ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.wisata + '?slug=' + encodeURI(slug))
  const { nama, lokasi, deskripsi, gambar, lat, lng } = response.data
  commit('getData', {
    title: nama,
    address: lokasi,
    description: deskripsi,
    img: getImage(gambar),
    position: { lat, lng }
  })
}

export async function getRecomendations ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.wisata + '?limit=3&except=' + encodeURI(slug))
  const recomendations = response.data.map(function (res) {
    const { gambar } = res
    res.gambar = getImage(gambar)
    return res
  })
  commit('getRecomendations', recomendations)
}
