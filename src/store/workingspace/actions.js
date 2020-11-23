import axios from 'axios'
import { api, getImage } from '../config'

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get(api.host + api.endpoint.workingspace + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    img: getImage(res.gambar),
    created_at: res.created_at,
    target: '/workingspace/' + res.slug
  }))
  commit('getList', list)
}

export async function getData ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.workingspace + '?slug=' + escape(slug))
  const { nama, alamat, deskripsi, gambar, lat, lng } = response.data
  commit('getData', {
    title: nama,
    address: alamat,
    description: deskripsi,
    open_time: response.data.jam_buka,
    img: getImage(gambar),
    position: { lat, lng }
  })
}

export async function getRecomendations ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.workingspace + '?limit=3&except=' + escape(slug))
  const recomendations = response.data.map(function (res) {
    const { gambar } = res
    res.gambar = getImage(gambar)
    return res
  })
  commit('getRecomendations', recomendations)
}
