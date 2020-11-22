export const api = {
  host: 'http://localhost:8000',

  endpoint: {
    wisata: '/api/wisata',
    kafe: '/api/kafe',
    workingspace: '/api/workingspace',
    kuliner: '/api/kuliner',
    oleholeh: '/api/oleholeh'
  }
}

export function getImage (src) {
  return src.startsWith('http') ? src : api.host + src
}
