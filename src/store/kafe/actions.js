import axios from 'axios'
import { api, getImage } from '../config'

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get(api.host + api.endpoint.kafe + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    img: getImage(res.gambar),
    target: '/kafe/' + res.slug
  }))
  commit('getList', list)
}

export async function getData ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.kafe + '?slug=' + escape(slug))
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
  const response = await axios.get(api.host + api.endpoint.kafe + '?limit=3&except=' + escape(slug))
  const recomendations = response.data.map(function (rec) {
    const { gambar } = rec
    rec.gambar = getImage(gambar)
    return rec
  })
  commit('getRecomendations', recomendations)
}
