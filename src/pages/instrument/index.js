import { CardWithTrigger, Footer, Navbar } from "@/components";
import { getInstrumentData } from "@/services/api";
import { useEffect, useState } from "react";
import loading from "@/assets/loadinggif.gif";
import Image from "next/image";

export default function instrument() {
  const [dataInstrument, setDataInstrument] = useState(null);

  useEffect(() => {
    getInstrumentData()
      .then((data) => {
        setDataInstrument(data?.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(dataInstrument);
  if (!dataInstrument) {
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
    <div className="min-h-[100vh] 2xl:px-[17em]">
      <Navbar />
      <br />
      <div className="container_instrument bg-white  py-10">
        <div className="container_intrument_row px-8 grid sm:grid-cols-2 grid-cols-1 gap-8">
          {dataInstrument?.map((data) => (
            <CardWithTrigger
              domainTitle={data.attributes.name}
              key={data.id}
              aspeks={data.attributes.aspeks.data}
              img={data.attributes.domain_image.data.attributes.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
