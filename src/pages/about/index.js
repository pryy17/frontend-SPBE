import { Footer, Navbar, Tab } from "@/components";
import React from "react";

export default function about() {
  return (
    <div>
      <Navbar />
      <Tab />
      <div>
        <h1 className="text-4xl font-bold pb-9 border-b-4 border-b-slate-700 mb-4">
          mengenai aplikasi
        </h1>
        <p>
          aplikasi ini di buat dengan tujuan untuk menyelesaikan permasalahan
          pada evaluasi penerapan SPBE baik dari lembaga pemerintah daerah atau
          pusat serta membantu target pengguna aplikasi ini yaitu asesor
          internal dan eksternal dalam menilai dan mengevaluasi tingkat
          kematangan penerapan SPBE di setiap lembaga pemerintah daerah.
        </p>
      </div>
      <Footer />
    </div>
  );
}
