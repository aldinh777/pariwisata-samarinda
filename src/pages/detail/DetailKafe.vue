<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-sm">
      <div class="row">
        <div class="col-12 col-sm-9 q-pa-sm">
          <img src="http://localhost:8000/img/kafe/ruang-teduh.jpg" alt="Gambar" class="full-width" />
          <q-card>
            <q-tabs v-model="tab">
              <q-tab name="deskripsi" label="Deskripsi" />
              <q-tab name="lokasi" label="Lokasi" />
              <q-tab name="review" label="Review" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab">
              <q-tab-panel name="deskripsi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Ruang Teduh Coffee & Eatery Juanda</div>
                <div class="text-bold q-mb-lg text-grey-8">Jl. Juanda 4, Air Hitam, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75124</div>
                <div>
                  <div class="text-h6">Jam Buka :</div>
                  <ul>
                    <li>09.00-00.00</li>
                  </ul>
                </div>
                <div>
                  <div class="text-h6">Makanan :</div>
                  <ul>
                    <li>Sate Betina</li>
                    <li>Ramen Asli Original</li>
                  </ul>
                </div>
                <div>
                  <div class="text-h6">Minuman :</div>
                  <ul>
                    <li>Air Dingin Manis</li>
                    <li>Es Teh Bersoda</li>
                  </ul>
                </div>
                <div class="q-mb-lg" style="white-space: pre-wrap">Ruang Teduh memiliki konsep kedai kopi yang minimalis namun terkesan sangat homey. Sesuai dengan namanya, kedai kopi yang dihiasi dengan dinding bercat putih serta lantai kayu, mampu memberikan kesan teduh untuk jiwa yang lelah, sehingga mampu menjadi pilihan untuk bersantai dan rehat sejenak dari rutinitas sehari-hari.

Di salah satu dinding dihiasi dengan menu kopi dari Ruang Teduh yang terbuat dari kayu. Selain itu, Ruang Teduh juga memiliki banyak jendela kaca dengan ukuran yang cukup besar, sehingga cahaya matahari yang masuk mampu menjadi sarana penunjang bagi kamu yang hobi foto.Kalau mampir ke Ruang Teduh. Teman Traveler patut mencoba salah satu menu kopi best-seller mereka yaitu kopi susu caramel. Kedai kopi yang satu ini terletak di Jalan Juanda 4 No. 99, Samarinda. Ruang Teduh Coffee buka setiap hari mulai pukul 11.00-23.00 WITA.</div>
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
              <img src="http://localhost:8000/img/kafe/dpuncak.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">D'puncak Cafe & Resto</div>
              <div>Jam Buka : 10.00–23.30</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/kafe/dpuncak.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">D'puncak Cafe & Resto</div>
              <div>Jam Buka : 10.00–23.30</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/kafe/dpuncak.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">D'puncak Cafe & Resto</div>
              <div>Jam Buka : 10.00–23.30</div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'PageDetailKafe',
  data () {
    return {
      tab: 'deskripsi'
    }
  }
}
</script>
