import { useRouter } from "next/router";
import { CardFlipper, Corousel, Footer, Navbar } from "@/components";
import { getDetailDomain, getIndikatorData } from "../../../services/api";
import React, { useEffect, useState } from "react";
import Aos from "aos";

export default function indikator() {
  const router = useRouter();
  const path = router.query;
  const [dataIndikator, setDataIndikator] = useState(null);
  const [dataDomain, setDataDomain] = useState(null);
  const [title, setTitle] = useState(null);
  const [domainId, setDomainId] = useState(null);

  useEffect(() => {
    if (path.listIndikator) {
      getIndikatorData(path?.listIndikator)
        .then((res) => {
          const data = res?.data.data.attributes.indikators.data;
          setTitle(res?.data.data.attributes.name);
          setDataIndikator(data);
          setDomainId(res?.data.data.attributes.domain.data.id);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (domainId) {
      getDetailDomain(domainId)
        .then((res) => {
          setDataDomain(res.data.data.attributes);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [path, domainId]);
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 300,
      mirror: true,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  if (!dataIndikator) {
    return <div>loading...</div>;
  }
  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <div className="banner grid grid-cols-12 min-h-[30em] pt-11" data-aos="zoom-out-up">
          <div className="col-span-5 flex items-center">
            <h1 className="whitespace-pre-line text-left text-7xl font-bold ps-2">
              {dataDomain?.name}
            </h1>
          </div>
          <div
            className="bg-cover bg-no-repeat col-span-7"
            style={{
              backgroundImage: `url(${dataDomain?.banner.data?.attributes.url})`,
            }}
          ></div>
        </div>

        <div
          className="gambaran_umum flex-col text-center w-100 my-28 px-6"
          data-aos="zoom-in-up"
        >
          <h1 className=" font-bold text-5xl">Gambaran Umum</h1>
          <div>
            <p className=" whitespace-pre-line text-center font-semibold mt-8">
              {dataDomain?.general_description}
            </p>
          </div>
        </div>

        <div className="gap_analysis grid grid-cols-12 min-h-[30em] mt-11 px-6">
          <div
            className="bg-contain bg-no-repeat col-span-7 w-full"
            data-aos={"fade-right"}
            data-aos-offset="600"
            style={{
              backgroundImage: `url(${dataDomain?.gap_analysis.data?.attributes.url})`,
            }}
          ></div>
          <div className="col-span-5 whitespace-pre-line text-left text-5xl flex items-center ms-8 font-bold ps-2">
            <h1>ANALISIS KESENJANGAN</h1>
          </div>
        </div>

        <div className="general_criteria grid grid-cols-12 min-h-[30em] mt-11 px-6">
          <div className="col-span-5 whitespace-pre-line text-right text-5xl flex items-center ms-8 font-bold pe-8">
            <h1>PEMENUHAN KRITERIA UMUM</h1>
          </div>
          <div
            className="bg-contain bg-no-repeat col-span-7 w-full"
            data-aos={"fade-left"}
            style={{
              backgroundImage: `url(${dataDomain?.general_criteria.data?.attributes.url})`,
            }}
          ></div>
        </div>

        <Corousel
          data={dataDomain?.support_information?.data}
          className="bg-contain w-full h-full bg-no-repeat bg-center"
        />
      </div>
      <div className="h-60 flex justify-center items-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {dataIndikator?.map((item) => (
          <CardFlipper style="indicator" key={item.id} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
