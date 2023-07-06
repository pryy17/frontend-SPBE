import { DisclosureDown, Footer, Navbar } from "@/components";
import { getPrincipleData } from "@/services/api";
import React, { useEffect, useState } from "react";
import loading from "@/assets/loadinggif.gif";
import Image from "next/image";

export default function provision() {
  const [principleData, setPrincipleData] = useState();

  useEffect(() => {
    getPrincipleData()
      .then((res) => {
        console.log(res.data.data);
        setPrincipleData(res.data.data);
      })
      .catch((err) => [console.log(err)]);
  }, []);

  if (!principleData) {
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
      <div className="text-center pt-11">
        <h1 className="text-4xl font-bold uppercase">
          Prinsip-prinsip Etika Asesor Sistem Pemerintahan berbasis Elektronik
        </h1>
        <p className="mt-10 text-lg">
          Asesor Pemantauan dan Evaluasi SPBE diharapkan menerapkan dan
          menegakkan prinsip-prinsip etika sebagai berikut:
        </p>
        <div>
          {principleData?.map((item) => (
            <DisclosureDown key={item.id} title={item.attributes.name}>
              {item.attributes.content}
            </DisclosureDown>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
