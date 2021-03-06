import axios from 'axios'
import { api, getImage } from '../config'

export async function getLogged ({ commit }, { token, csrf }) {
  const response = await axios.get(api.host + api.endpoint.oleholeh + '/get', {
    headers: {
      Authorization: 'Bearer ' + token,
      'Csrf-Token': csrf
    }
  })
  const result = response.data
  const list = result.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    slug: escape(res.slug),
    img: getImage(res.gambar),
    created_at: res.created_at,
    target: '/oleholeh/' + res.slug
  }))
  commit('getList', list)
}

export async function getList ({ commit }, limit) {
  let limitQuery = ''
  if (limit) {
    limitQuery += '?limit=' + limit
  }
  const response = await axios.get(api.host + api.endpoint.oleholeh + limitQuery)
  const list = response.data.map(res => ({
    title: res.nama,
    description: res.deskripsi_singkat,
    full_description: res.deskripsi,
    slug: escape(res.slug),
    img: getImage(res.gambar),
    created_at: res.created_at,
    target: '/oleholeh/' + res.slug
  }))
  commit('getList', list)
}

export async function getData ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.oleholeh + '?slug=' + escape(slug))
  const { nama, deskripsi, gambar } = response.data
  commit('getData', {
    title: nama,
    short_description: response.data.deskripsi_singkat,
    description: deskripsi,
    img: getImage(gambar)
  })
}

export async function getRecomendations ({ commit }, slug) {
  const response = await axios.get(api.host + api.endpoint.oleholeh + '?limit=3&except=' + escape(slug))
  const recomendations = response.data.map(function (res) {
    const { gambar } = res
    res.gambar = getImage(gambar)
    return res
  })
  commit('getRecomendations', recomendations)
}
