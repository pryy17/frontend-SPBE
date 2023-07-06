import { CardApp, Footer, Navbar } from "@/components";
import { getListApps } from "@/services/api";
import React, { useEffect, useState } from "react";
import loading from "@/assets/loadinggif.gif";
import Image from "next/image";

export default function listApp() {
  const [dataApps, setDataApps] = useState(null);

  useEffect(() => {
    getListApps()
      .then((res) => {
        setDataApps(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dataApps) {
    return (
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <Image
          src={loading}
          alt="loader"
          height={100}
          width={100}
          quality={100}
        />
        <p className="text-base text-black">wait system ready</p>
      </div>
    );
  }

  return (
    <div className="2xl:px-[17em]">
      <Navbar />

      <h1 className="text-4xl font-bold pb-9 border-b-4 border-b-slate-700 mb-4">
        Aplikasi Umum SPBE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dataApps?.map((item) => (
          <CardApp key={item.id} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
