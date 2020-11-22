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
    target: '/kuliner/' + res.id
  }))
  commit('getList', list)
}

export async function getData ({ commit }, id) {
  const response = await axios.get(api.host + api.endpoint.kuliner + '?id=' + id)
  const { nama, deskripsi, gambar } = response.data
  commit('getData', {
    title: nama,
    description: deskripsi,
    img: getImage(gambar)
  })
}

export async function getRecomendations ({ commit }, id) {
  const response = await axios.get(api.host + api.endpoint.kuliner + '?limit=3&exceptId=' + id)
  const recomendations = response.data.map(function (res) {
    const { gambar } = res
    res.gambar = getImage(gambar)
    return res
  })
  commit('getRecomendations', recomendations)
}
