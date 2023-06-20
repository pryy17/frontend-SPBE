import { DisclosureDown, Footer, Navbar } from "@/components";
import { getPrincipleData } from "@/services/api";
import React, { useEffect, useState } from "react";

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

  return (
    <div>
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