import { Corousel, DisclosureDown, Footer, Modal, Navbar } from "@/components";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDetailIndikatorData, getIndikatorLevelData } from "@/services/api";
import Level from "./level";
import loading from "@/assets/loadinggif.gif";
import Image from "next/image";

export default function detailIndikator() {
  const router = useRouter();
  const path = router.query;
  const [dataDetailIndikator, setDataDetailIndikator] = useState(null);
  const [dataLevel, setDataLevel] = useState(null);
  const [title, setTitle] = useState(null);

  console.log(router);
  useEffect(() => {
    if (path.detailIndikator) {
      getDetailIndikatorData(path?.detailIndikator)
        .then((res) => {
          const data = res?.data.data.attributes;
          // console.log(res?.data.data.attributes.indikators.data);
          setDataDetailIndikator(data);
          if (res.data.data.id) {
            getIndikatorLevelData(res.data.data.id)
              .then((res) => {
                setDataLevel(res.data.data.attributes.level_component);
                console.log(res.data.data.attributes.level_component);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [path]);
  if (!dataDetailIndikator) {
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
    <div className="min-h-[100vh] flex-col 2xl:px-[17em]">
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold pb-9 border-b-4 border-b-slate-700 mb-4">
          {dataDetailIndikator.title}
        </h1>
        <div className="type_indicator">
          <div className="flex mb-4 w-full">
            <p className="font-bold text-lg">
              domain : {dataDetailIndikator.domain.data.attributes.name}
            </p>
            <p className="ms-auto font-bold text-lg">
              indikator {dataDetailIndikator.ind}
            </p>
          </div>
          <p className="font-bold text-lg">
            aspek : {dataDetailIndikator.aspek.data.attributes.name}
          </p>
        </div>
        <div className="mt-7">
          <DisclosureDown title={"PENJELASAN INDIKATOR"}>
            <div>
              <p className="mb-10">
                {dataDetailIndikator.explanation_indicator}
              </p>
              {dataDetailIndikator?.more_explanation?.data.image && (
                <Corousel
                  className="bg-contain w-full h-full bg-no-repeat bg-center"
                  data={dataDetailIndikator.more_explanation.data.image}
                />
              )}
            </div>
          </DisclosureDown>
          <DisclosureDown title={"TUJUAN/MANFAAT KEBIJAKAN"}>
            {dataDetailIndikator.purpose}
          </DisclosureDown>
          <DisclosureDown title={"RUANG LINKUP"}>
            {dataDetailIndikator.scope}
          </DisclosureDown>
          <DisclosureDown title={"REFERENSI"}>
            {dataDetailIndikator.reference}
          </DisclosureDown>
          <DisclosureDown title={"LEVEL"}>
            <Level data={dataLevel} />
          </DisclosureDown>
          <DisclosureDown
            title={"Kaidah penilaian pemantauan dan evaluasi SPBE"}
          >
            test
          </DisclosureDown>
        </div>
      </div>
      <Footer className="mt-44" />
    </div>
  );
}
