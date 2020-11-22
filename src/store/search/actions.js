import axios from 'axios'
import { api, getImage } from '../config'

export async function searchWisata ({ commit }, key) {
  const response = await axios.get(api.host + api.endpoint.wisata + '/search?key=' + key)
  const wisata = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: res.deskripsi_singkat,
    img: getImage(res.gambar),
    target: '/wisata/' + res.id
  }))
  commit('searchWisata', wisata)
}

export async function searchKafe ({ commit }, key) {
  const response = await axios.get(api.host + api.endpoint.kafe + '/search?key=' + key)
  const kafe = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    img: getImage(res.gambar),
    target: '/kafe/' + res.id
  }))
  commit('searchKafe', kafe)
}

export async function searchWorkingSpace ({ commit }, key) {
  const response = await axios.get(api.host + api.endpoint.workingspace + '/search?key=' + key)
  const workingspace = response.data.map(res => ({
    title: res.nama,
    subtitle: res.alamat,
    description: 'Jam Buka : ' + res.jam_buka,
    img: getImage(res.gambar),
    target: '/workingspace/' + res.id
  }))
  commit('searchWorkingSpace', workingspace)
}

export async function searchKuliner ({ commit }, key) {
  const response = await axios.get(api.host + api.endpoint.kuliner + '/search?key=' + key)
  const kuliner = response.data.map(res => ({
    title: res.nama,
    img: getImage(res.gambar),
    target: '/kuliner/' + res.id
  }))
  commit('searchKuliner', kuliner)
}

export async function searchOlehOleh ({ commit }, key) {
  const response = await axios.get(api.host + api.endpoint.wisata + '/search?key=' + key)
  const oleholeh = response.data.map(res => ({
    title: res.nama,
    img: getImage(res.gambar),
    target: '/oleholeh/' + res.id
  }))
  commit('searchOlehOleh', oleholeh)
}
