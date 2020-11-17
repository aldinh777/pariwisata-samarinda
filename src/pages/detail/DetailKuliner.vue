<template>
  <q-page class="bg-grey-2">

    <div class="q-pa-sm">
      <div class="row">
        <div class="col-12 col-sm-9 q-pa-sm">
          <img src="http://localhost:8000/img/kuliner/Ayam-Cincane.jpg" alt="Gambar" class="full-width" />
          <q-card>
            <q-tabs v-model="tab">
              <q-tab name="deskripsi" label="Deskripsi" />
              <q-tab name="lokasi" label="Lokasi" />
              <q-tab name="review" label="Review" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab">
              <q-tab-panel name="deskripsi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Ayam Cincane</div>
                <div class="q-mb-lg" style="white-space: pre-wrap">Inilah makanan khas Samarinda yang jadi favorit turis ketika berkunjung ke Samarinda. Ayam Cincane adalah ayam kampung yang dibakar dan disajikan dengan sambal tomat.

Sekilas, makanan ini memang terlihat mirip dengan ayam balado karena warnanya yang merah, Toppers.

Meski demikian, rasa Ayam Cincane ini sangat berbeda karena penggunaan bumbu-bumbu khas terutama dari segi rempah yang dilumuri sebelum dibakar.

Kuliner tradisional khas Samarinda ini juga telah melewati proses perebusan terlebih dahulu sehingga dagingnya empuk dan lembut.

Biasanya, Ayam Cincane dihidangkan dalam acara resmi seperti undangan atau pernikahan.</div>
              </q-tab-panel>

              <q-tab-panel name="lokasi" class="q-pa-lg">
                <div class="text-h5 q-mb-lg">Lokasi Ditemukan</div>
                <div class="row q-mb-md">
                  <div class="col-4 q-pa-xs">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-f/11/d9/9d/c5/ayam-gepuk.jpg" alt="Gambar" class="full-width" style="height: 160px">
                    <div class="q-pl-md">
                      <div class="text-bold">RM. Ayam Gepuk Asli</div>
                      <div>Asia, Indonesia</div>
                      <q-btn class="text-blue">Info Lebih Lanjut</q-btn>
                    </div>
                  </div>
                  <div class="col-4 q-pa-xs">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-f/11/d9/9d/c5/ayam-gepuk.jpg" alt="Gambar" class="full-width" style="height: 160px">
                    <div class="q-pl-md">
                      <div class="text-bold">RM. Ayam Gepuk Asli</div>
                      <div>Asia, Indonesia</div>
                      <q-btn class="text-blue">Info Lebih Lanjut</q-btn>
                    </div>
                  </div>
                  <div class="col-4 q-pa-xs">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-f/11/d9/9d/c5/ayam-gepuk.jpg" alt="Gambar" class="full-width" style="height: 160px">
                    <div class="q-pl-md">
                      <div class="text-bold">RM. Ayam Gepuk Asli</div>
                      <div>Asia, Indonesia</div>
                      <q-btn class="text-blue">Info Lebih Lanjut</q-btn>
                    </div>
                  </div>
                </div>
                <div id="location-map" style="width: 100%; height: 420px">Maps Lokasi</div>
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
              <img src="http://localhost:8000/img/kuliner/nasi-kuning.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Nasi Kuning</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/kuliner/nasi-kuning.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Nasi Kuning</div>
            </div>
            <q-separator />
            <div class="q-mt-md q-mb-md">
              <img src="http://localhost:8000/img/kuliner/nasi-kuning.jpg" alt="Gambar" class="full-width">
              <div class="text-bold q-mt-md">Nasi Kuning</div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'PageDetailKuliner',
  data () {
    return {
      tab: 'deskripsi'
    }
  }
}
</script>
