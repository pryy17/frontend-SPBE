import { CardFlipper, Footer, Modal, Navbar } from "@/components";
import { getProceduresData } from "@/services/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function procedures() {
  const [dataProceduresIntern, setDataProceduresIntern] = useState();
  const [dataProceduresEkstern, setDataProceduresEkstern] = useState();

  useEffect(() => {
    getProceduresData()
      .then((res) => {
        const dataIntern = res.data.data.filter((e) => {
          return e.attributes.type == "internal";
        });
        const dataEkstern = res.data.data.filter((e) => {
          return e.attributes.type == "eksternal";
        });
        console.log(res.data.data);
        setDataProceduresIntern(dataIntern);
        setDataProceduresEkstern(dataEkstern);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div
        className={`bg-[url('../assets/diskusi.jpeg')] bg-cover bg-center w-full h-[30em] backdrop-blur-sm flex flex-col text-center justify-center text-white items-center`}
      >
        <h1
          className="font-['Poltawski Nowy'] text-white text-5xl font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
        >
          TATA CARA DAN KAIDAH PENILAIAN <br /> PEMANTAUAN DAN EVALUASI SPBE
        </h1>
        <div className=" w-full px-5 sm:w-1/3 flex justify-between mt-8">
          <Modal
            title={"test"}
            button={
              <button className="bg-white shadow-lg shadow-black bg-gradient-to-r from-red-500 hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-8 hover:border-transparent rounded-full">
                <p className="text-lg tracking-wide">eksternal</p>
              </button>
            }
          >
            <div className="grid grid-cols-4 py-5 px-6">
              {dataProceduresEkstern?.map((item) => (
                <Link href={`/procedures/${item.id}`} key={item.id}>
                  <div className="h-40 w-40 text-md font-semibold text-white from-[#777978] to-[#02bb86] bg-gradient-to-b shadow-md shadow-slate-800 text-center rounded-md flex justify-center items-center">
                    <p>{item.attributes.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Modal>
          <Modal
            title={"test2"}
            button={
              <button className="bg-red-400  bg-gradient-to-r from-white py-2 px-8 text-black font-semibold rounded-full shadow-lg shadow-black">
                <p className="text-lg tracking-wide">internal</p>
              </button>
            }
          >
            <div className="grid grid-cols-4 py-5 px-6">
              {dataProceduresIntern?.map((item) => (
                <Link href={`/procedures/${item.id}`} key={item.id}>
                  <div className="h-40 w-40 text-md font-semibold text-white from-[#777978] to-[#02bb86] bg-gradient-to-b shadow-md shadow-slate-800 text-center rounded-md flex justify-center items-center">
                    <p>{item.attributes.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Modal>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 mt-4 pt-3">
        <p className="text-lg text-justify tracking-wider px-2 sm:px-0 ">
          Untuk menghasilkan standar dan kualitas penilaian pemantauan dan
          evaluasi SPBE, maka perlu disusun tata cara dan kaidah penilaian
          sebagai acuan bagi semua pihak yang berkepentingan dalam pelaksanaan
          pemantauan dan evaluasi SPBE. Tata cara dan kaidah penilaian disusun
          berdasarkan tahapan pemantauan dan evaluasi SPBE. Setiap Asesor
          Internal menggunakan acuan tata cara dan kaidah ini untuk melakukan
          penilaian mandiri, dan setiap Asesor Eksternal menggunakan acuan tata
          cara dan kaidah ini untuk melakukan penilaian dokumen, penilaian
          interviu, dan penilaian visitasi.
        </p>
      </div>
      <Footer />
    </div>
  );
}
