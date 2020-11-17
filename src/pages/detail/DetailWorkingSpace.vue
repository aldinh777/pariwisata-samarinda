<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-sm">
      <div class="row">
        <div class="col-12 col-sm-9 q-pa-sm">
          <img src="http://localhost:8000/img/workingspace/ruangku.jpg" alt="Gambar" class="full-width" />
          <q-card>
            <q-tabs v-model="tab">
              <q-tab name="deskripsi" label="Deskripsi" />
              <q-tab name="lokasi" label="Lokasi" />
              <q-tab name="review" label="Review" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab">
              <q-tab-panel name="deskripsi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Start-Up Coffee</div>
                <div class="text-bold q-mb-lg text-grey-8">Jl. Wahid Hasyim 2 No.25, Sempaja Sel., Kec. Samarinda Utara, Kota Samarinda, Kalimantan Timur 75131</div>
                <div>
                  <div class="text-h6">Jam Buka :</div>
                  <ul>
                    <li>09.00-00.00</li>
                  </ul>
                </div>
                <div>
                  <div class="text-h6">Fasilitas :</div>
                  <ul>
                    <li>Wifi Gratis 600 GB/detik</li>
                    <li>Boardgame</li>
                    <li>Ruang Rapat</li>
                  </ul>
                </div>
                <div class="q-mb-lg" style="white-space: pre-wrap">Mau Cari tempat buat kumpul-kumpul bareng temen-temen malam ini? Ke  Start Up Coffee aja yuk. Banyak menu yang harus kamu coba sambil baca buku-buku atau belajar bersama. Langsung aja yuk mampir sekarang...</div>
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
              <img src="http://localhost:8000/img/workingspace/startup-coffee.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Start-Up Coffee</div>
              <div>Jam Buka : 10.00–23.30</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/workingspace/startup-coffee.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Start-Up Coffee</div>
              <div>Jam Buka : 10.00–23.30</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/workingspace/startup-coffee.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Start-Up Coffee</div>
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
  name: 'PageDetailWorkingSpace',
  data () {
    return {
      tab: 'deskripsi'
    }
  }
}
</script>
