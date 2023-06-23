import { CardApp, Footer, Navbar } from "@/components";
import { getListApps } from "@/services/api";
import React, { useEffect, useState } from "react";

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

  return (
    <div>
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
