import { CardFlipper, Footer, Navbar } from "@/components";
import React from "react";

export default function ethics() {
  return (
    <div className="2xl:px-[17em]">
      <Navbar />
      <div>
        <h1 className="text-center text-4xl font-bold mt-16">
          ETIKA ASESOR PEMANTAUAN DAN EVALUASI SPBE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:justify-center sm:justify-items-center gap-20 mt-24">
          <CardFlipper
            style="custom"
            path="/ethics/provision"
            title="Ketentuan Umum"
            className={`bg-cover bg-no-repeat bg-center h-[15em] w-full sm:w-[40em] justify-center items-center text-white flex rounded-md shadow-2xl shadow-slate-600`}
          />
          <CardFlipper
            style="custom"
            path="/ethics/principle"
            title="Prinsip-prinsip Etika Asesor"
            className={`bg-cover bg-no-repeat bg-center h-[15em] w-full sm:w-[40em] justify-center items-center text-white flex rounded-md shadow-2xl shadow-slate-600`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
