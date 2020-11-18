<template>
  <div ref="map" class="full-width" style="height: 420px"></div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: ['lat', 'lng', 'markers'],
  data () {
    return {
      google: null,
      map: null,
      dataMarkers: []
    }
  },
  async mounted () {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: 'AIzaSyC3Sis_MBeaSHRKlZIPftutQTXQgz5_m8c'
    })
    this.google = googleMapApi
    this.initializeMap()
  },
  methods: {
    initializeMap () {
      var lat = this.lat
      var lng = this.lng

      this.map = new this.google.maps.Map(this.$refs.map, {
        center: new this.google.maps.LatLng(lat, lng),
        zoom: 15
      })

      this.dataMarkers.push(new this.google.maps.Marker({
        map: this.map,
        position: new this.google.maps.LatLng(lat, lng)
      }))

      if (this.markers) {
        this.markers.forEach((pos) => {
          this.dataMarkers.push(new this.google.maps.Marker({
            map: this.map,
            position: new this.google.maps.LatLng(pos.lat, pos.lng)
          }))
        })
      }
    }
  }
}
</script>
