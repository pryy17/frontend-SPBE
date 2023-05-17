import { Footer, Navbar } from "@/components";
import React, { useEffect, useState } from "react";
import imgBanner from "../../../assets/diskusi.jpeg";
import { useRouter } from "next/router";
import { getDetailApp } from "@/services/api";
import Link from "next/link";

export default function detailApp() {
  const router = useRouter();
  const path = router.query;
  const url = process.env.NEXT_PUBLIC_API_URL;

  const [dataDetailApp, setDataDetailApp] = useState(null);

  useEffect(() => {
    if (path.detailApp) {
      getDetailApp(path?.detailApp)
        .then((res) => {
          const data = res?.data.data.attributes;
          // console.log(res?.data.data.attributes.Apps.data);
          setDataDetailApp(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [path]);

  console.log(dataDetailApp);
  if (!dataDetailApp) {
    return <div>loading...</div>;
  }

  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <div className="relative mb-48">
          <div className="banner_app w-full h-[20em] overflow-hidden relative rounded-md">
            <img
              src={`${url}${dataDetailApp?.banner}`}
              alt="banner"
              className=" absolute w-full  h-auto left-0"
            />
          </div>
          <div className="absolute top-72 left-16 flex items-center">
            <div
              className=" z-20 logo_app w-48 h-48 overflow-hidden rounded-full shadow-lg shadow-slate-700 bg-cover bg-center"
              style={{ backgroundImage: `url(${url}${dataDetailApp.logo})` }}
            ></div>
            <div className="ms-7">
              <h1 className="text-5xl font-bold font-['Poltawski Nowy']">
                {dataDetailApp.name}
              </h1>
              <p className="text-base mt-2 font-semibold">
                {dataDetailApp.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 grid w-full grid-cols-2 grid-flow-row gap-2 pt-5">
          <div className="collaboration_app w-full pb-5">
            <h2 className="font-semibold text-xl text-center">kolaborasi</h2>
            <div className="w-full flex justify-center mt-9 ps-8">
              {dataDetailApp?.collaboration.data.map((item, index) => (
                <div
                  className="me-6 w-16 h-16 bg-center bg-cover"
                  key={index}
                  style={{ backgroundImage: `url(${url}${item.img})` }}
                />
              ))}
            </div>
          </div>

          <div className="w-full h-2 pb-5">
            <h2 className="font-semibold text-xl text-center ">Pengguna</h2>
            <div className=" mt-9 ps-8  flex flex-wrap">
              {dataDetailApp?.number_users.data.map((item, index) => (
                <div
                  className="me-6 bg-green-500 px-5 rounded-full w-fit mt-5"
                  key={index}
                >
                  <p className="text-white">
                    {item.name} ({item.counts})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-10">
          <div className="left_app me-10 ms-20">
            <div className="px-5 py-4 bg-[#efc9a1] rounded-lg pb-6 shadow-lg shadow-slate-600">
              <h2 className="text-center font-semibold text-xl mb-6">
                Overview
              </h2>
              <p className="text-justify">{dataDetailApp.overview}</p>
            </div>

            <div className="px-5 mt-10 py-4 bg-[#efc9a1] rounded-lg pb-6 shadow-lg shadow-slate-600">
              <h2 className="text-center font-semibold text-xl mb-6">
                Target Pengguna
              </h2>
              <p className="text-justify">{dataDetailApp.user_app}</p>
            </div>

            <div className="px-5 mt-10 py-4 bg-[#efc9a1] rounded-lg pb-6 shadow-lg shadow-slate-600">
              <h2 className="text-center font-semibold text-xl mb-6">
                Alur Permohonan Penggunaan Aplikasi
              </h2>
              <p className="text-justify">{dataDetailApp.request_flow}</p>
            </div>
          </div>

          <div className="right_app ms-10 me-20">
            <div className="px-5 py-4 bg-[#efc9a1] rounded-lg pb-6 shadow-lg shadow-slate-600">
              <h2 className="text-center font-semibold text-xl mb-6">
                Dasar Hukum
              </h2>
              <p className="text-justify whitespace-pre-line">
                {dataDetailApp.law}
              </p>
            </div>

            <div className="px-5 mt-10 py-4 bg-[#efc9a1] rounded-lg pb-6 shadow-lg shadow-slate-600">
              <h2 className="text-center font-semibold text-xl mb-6">Fitur</h2>
              <p className="text-justify whitespace-pre-line">
                {dataDetailApp.feature}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#02bb86] h-[10em] w-full mt-24 rounded-sm flex flex-col justify-center items-center">
          <h2 className="text-xl mb-5 font-bold text-white">
            Dapat di akses melalui
          </h2>
          <Link href={dataDetailApp.link} target="_blank">
            <div className="from-[#efc9a1] hover:shadow-none to-green-300 bg-gradient-to-b py-1 px-4 w-fit rounded-full shadow-md shadow-slate-800 cursor-pointer">
              <p className="text-lg font-semibold ">lapor.go.id</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
