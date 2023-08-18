import { Corousel, DisclosureDown, Footer, Modal, Navbar } from "@/components";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDetailIndikatorData, getIndikatorLevelData } from "@/services/api";
import Level from "./level";
import LevelDown from "./levelDown";
import loading from "@/assets/loadinggif.gif";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";

export default function detailIndikator() {
  const router = useRouter();
  const path = router.query;
  const [dataDetailIndikator, setDataDetailIndikator] = useState(null);
  const [dataLevel, setDataLevel] = useState(null);
  const [title, setTitle] = useState(null);
  const [levelMode, setLevelMode] = useState("modal");
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
      <Sidebar />
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
          <DisclosureDown title={"PENJELASAN INDIKATOR"} opened={true}>
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
          <DisclosureDown title={"TUJUAN/MANFAAT KEBIJAKAN"} opened={true}>
            {dataDetailIndikator.purpose}
          </DisclosureDown>
          <DisclosureDown title={"RUANG LINKUP"} opened={true}>
            {dataDetailIndikator.scope}
          </DisclosureDown>
          <DisclosureDown title={"REFERENSI"} opened={true}>
            {dataDetailIndikator.reference}
          </DisclosureDown>
          <DisclosureDown title={"LEVEL"} opened={true}>
            <div>
              <div className="grid grid-cols-2 border-[1px] border-[#c9bcbc] w-fit ms-auto mb-5 rounded-md from-white to-slate-300 bg-gradient-to-b cursor-pointer text-black">
                <p
                  className={`px-3 text-center border-e-2 hover:bg-[#c9bcbc] ${
                    levelMode == "modal" && "bg-[#ffffff]"
                  } `}
                  onClick={() => {
                    setLevelMode("modal");
                  }}
                >
                  Modal
                </p>
                <p
                  className={`px-3 text-center hover:bg-[#c9bcbc] ${
                    levelMode == "drop" && "bg-[#ffffff]"
                  }`}
                  onClick={() => {
                    setLevelMode("drop");
                  }}
                >
                  Drop
                </p>
              </div>
              {levelMode == "modal" && <Level data={dataLevel} />}
              {levelMode == "drop" && <LevelDown data={dataLevel} />}
            </div>
          </DisclosureDown>
          <DisclosureDown
            title={"Kaidah penilaian pemantauan dan evaluasi SPBE"}
            opened={true}
          >
            <Link href="/procedures/1" target="_blank">
              <div className="from-[#eb3f5c] hover:shadow-none bg-gradient-to-b py-1 px-4 w-fit rounded-full shadow-md shadow-slate-800 cursor-pointer">
                <p className="text-lg text-black font-semibold ">
                  kaidah penulisan evaluasi
                </p>
              </div>
            </Link>
          </DisclosureDown>
        </div>
      </div>
      <Footer className="mt-44" />
    </div>
  );
}
