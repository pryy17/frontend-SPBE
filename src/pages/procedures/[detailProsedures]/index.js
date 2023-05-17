import { DisclosureDown, Footer, Navbar } from "@/components";
import React from "react";

export default function detailProcedures() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold pb-9 border-b-4 border-b-slate-700 mb-4">
          Tata Cara dan Kaidah Penilaian Dokumen Bagi Asesor Eksternal
        </h1>
        <div className="grid grid-cols-12 w-full gap-8">
          <div className=" col-span-7 text-lg tracking-wide text-justify">
            <p>
              Pada halaman aplikasi pemantauan dan evaluasi SPBE seperti pada
              Gambar2 di bawah ini, dimana Asesor Eksternal melakukan verifikasi
              dan validasi terhadap hasil penilaian mandiri dari Asesor Internal
              dengan menentukan kembali tingkat kematangan pada radio button
              (opsi pilihan), serta melakukan entri pengisian penjelasan dengan
              menguraikan Fakta dan Hasil Analisis, serta Justifikasi Hasil
              berdasarkan kesesuaian kriteria tingkat kematangan yang telah
              dicapai dengan lampiran Data Pendukung yang dirujuk oleh Asesor
              Internal. Dalam memberikan penjelasan, Asesor Eksternal agar
              mengacu minimal menyesuaikan kaidah yang telah ditentukan,
              sehingga uraian hasil penilaian eksternal mudah dipahami dan dapat
              dipertanggung jawabkan. Masing-masing Domain, memiliki
              karakteristik penilaian dan kriteria yang berbeda. Berikut ini
              merupakan contoh kaidah dalam memberikan penjelasan penilaian
              dokumen pada aplikasi pemantauan dan evaluasi SPBE bagi Asesor
              Eksternal.
            </p>
          </div>
          <div className="col-span-5 w-full">
            <div className=" w-full h-80 bg-gray-500" />
          </div>
        </div>
        <div className="pe-4">
          <DisclosureDown
            title={
              "Kaidah Penulisan Penjelasan Penilaian Dokumen Bagi Asesor Eksternal Pada Domain Kebijakan (Indikator 1-10)"
            }
          >
            test
          </DisclosureDown>
        </div>
      </div>
      <Footer />
    </div>
  );
}
