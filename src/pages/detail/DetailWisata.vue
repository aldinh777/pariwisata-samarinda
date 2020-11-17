<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-sm">
      <div class="row">
        <div class="col-12 col-sm-9 q-pa-sm">
          <img src="http://localhost:8000/img/wisata/Desa-Budaya-Pampang.jpg" alt="Gambar" class="full-width" />
          <q-card>
            <q-tabs v-model="tab">
              <q-tab name="deskripsi" label="Deskripsi" />
              <q-tab name="lokasi" label="Lokasi" />
              <q-tab name="akomodasi" label="Akomodasi" />
              <q-tab name="event" label="Event" />
              <q-tab name="review" label="Review" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab">
              <q-tab-panel name="deskripsi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Desa Budaya Pampang</div>
                <div class="text-bold q-mb-lg text-grey-8">Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda</div>
                <div class="q-mb-lg" style="white-space: pre-wrap">Desa Budaya Pampang, menjadi salah satu destinasi yang bisa Kamu kunjungi jika ingin mengenal budaya lokal suku di Samarinda. Desa budaya ini dihuni oleh suku Dayak Kenyah asli. Desa ini juga memiliki keunikan, tak heran jika banyak wisatawan yang berkunjung kesini.

Selain melihat berbagai aktivitas warga suku Dayak, Kamu juga bisa menikmati pertunjukan seni setiap hari minggu siang di balai pertemuan atau lamin. Uniknya, saat pertunjukan berlangsung seluruh masyarakat Desa Pampang akan mengenakan baju tradisionalnya.</div>
              </q-tab-panel>

              <q-tab-panel name="lokasi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Info Lokasi</div>
                <div id="location-map" style="width: 100%; height: 420px">Maps Lokasi</div>
                <div>
                  <ul>
                    <li>Alamat : Jl. Wisata Budaya Pampang, No.32, RT.03, Kec Sam. Utara, Kota Samarinda</li>
                    <li>Latitude : -0.3775379</li>
                    <li>Longitude : 117.2279942</li>
                  </ul>
                </div>
                <div class="text-h6">Jarak dari bandara (Bandara Internasional Aji Pangeran Tumenggung Pranoto)</div>
                <p>±10 km</p>
                <div class="text-h6">Estimasi perjalanan (Menggunakan Kendaraan)</div>
                <p>±5 menit</p>
              </q-tab-panel>

              <q-tab-panel name="akomodasi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Hotel Terdekat</div>
                <div id="location-hotel" style="width: 100%; height: 420px">Maps Hotel</div>
                <div class="q-mb-sm q-mt-sm">
                  <q-card class="q-pa-xs">
                    <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" alt="Gambar" style="width: 120px; height: 120px">
                    <div style="position: absolute; left: 135px; top: 20px">
                      <div class="text-bold">Aston Samarinda Hotel</div>
                      <div>
                        <i class="material-icons text-yellow-8">star</i>
                        <i class="material-icons text-yellow-8">star</i>
                        <i class="material-icons text-yellow-8">star</i>
                      </div>
                    </div>
                    <div style="position: absolute; bottom: 10px; right: 20px" class="text-right">
                      <div>Harga per malam mulai dari</div>
                      <div class="text-bold">Rp. 330.000,-</div>
                    </div>
                  </q-card>
                </div>
                <div class="q-mb-sm q-mt-sm">
                  <q-card class="q-pa-xs">
                    <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" alt="Gambar" style="width: 120px; height: 120px">
                    <div style="position: absolute; left: 135px; top: 20px">
                      <div class="text-bold">Aston Samarinda Hotel</div>
                      <div>
                        <i class="material-icons text-yellow-8">star</i>
                        <i class="material-icons text-yellow-8">star</i>
                        <i class="material-icons text-yellow-8">star</i>
                      </div>
                    </div>
                    <div style="position: absolute; bottom: 10px; right: 20px" class="text-right">
                      <div>Harga per malam mulai dari</div>
                      <div class="text-bold">Rp. 330.000,-</div>
                    </div>
                  </q-card>
                </div>
                <div class="q-mb-sm q-mt-sm">
                  <q-card class="q-pa-xs">
                    <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" alt="Gambar" style="width: 120px; height: 120px">
                    <div style="position: absolute; left: 135px; top: 20px">
                      <div class="text-bold">Aston Samarinda Hotel</div>
                      <div>
                        <i class="material-icons text-yellow-8">star</i>
                        <i class="material-icons text-yellow-8">star</i>
                        <i class="material-icons text-yellow-8">star</i>
                      </div>
                    </div>
                    <div style="position: absolute; bottom: 10px; right: 20px" class="text-right">
                      <div>Harga per malam mulai dari</div>
                      <div class="text-bold">Rp. 330.000,-</div>
                    </div>
                  </q-card>
                </div>
              </q-tab-panel>

              <q-tab-panel name="event" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Event</div>
                <div>Belum Ada Event</div>
              </q-tab-panel>

              <q-tab-panel name="review" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Review</div>
                <q-card class="q-pa-lg bg-blue-1">
                  <div>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                    <i class="material-icons text-yellow-8">star</i>
                  </div>
                  <div>
                    Oleh : Udin Santoso
                  </div>
                  <div class="q-mt-lg">
                    pengemasan cepat pengiriman nya pun cuma paket ku kaya nya paling bawah gitu yah soal nya bocor😥 terimakasih hadiah nyaa toko udah langganan ko
                  </div>
                  <div style="position: absolute; top: 20px; right: 40px" class="text-right">
                    12 Oktober 2020
                  </div>
                </q-card>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>

        <div class="col-12 col-sm-3 q-pa-sm">
          <q-card class="q-pa-md">
            <div class="text-h6 text-blue-8">Lihat Juga</div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/wisata/Air-Terjun-Tanah-Merah.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Air Terjun Tanah Merah</div>
              <div>Jl. Muara Badak , Tanah Merah, Kec. Samarinda Utara, Kota Samarinda</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/wisata/Air-Terjun-Tanah-Merah.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Air Terjun Tanah Merah</div>
              <div>Jl. Muara Badak , Tanah Merah, Kec. Samarinda Utara, Kota Samarinda</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/wisata/Air-Terjun-Tanah-Merah.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Air Terjun Tanah Merah</div>
              <div>Jl. Muara Badak , Tanah Merah, Kec. Samarinda Utara, Kota Samarinda</div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'PageDetailWisata',
  data () {
    return {
      tab: 'deskripsi'
    }
  }
}
</script>
