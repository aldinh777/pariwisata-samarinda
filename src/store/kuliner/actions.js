import axios from 'axios'
import { api, getImage } from '../config'

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get(api.host + api.endpoint.kuliner + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    description: res.deskripsi_singkat,
    img: getImage(res.gambar),
    target: '/kuliner/' + res.slug
  }))
  commit('getList', list)
}

export async function getData ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.kuliner + '?slug=' + escape(slug))
  const { nama, deskripsi, gambar } = response.data
  commit('getData', {
    title: nama,
    description: deskripsi,
    img: getImage(gambar)
  })
}

export async function getRecomendations ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.kuliner + '?limit=3&except=' + escape(slug))
  const recomendations = response.data.map(function (res) {
    const { gambar } = res
    res.gambar = getImage(gambar)
    return res
  })
  commit('getRecomendations', recomendations)
}
