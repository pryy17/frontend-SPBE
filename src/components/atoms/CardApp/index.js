import Link from "next/link";
import React from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";

export default function CardAPP({ data }) {
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log(data)

  return (
    <div className="mb-5">
      <Link href="/list-app/1">
        <div className="card_app border-2 max-w-[40em] sm:h-[15em] rounded-md grid grid-cols-12 shadow-md shadow-slate-950 overflow-hidden cursor-pointer hover:animate-pulse">
          <div className="desc_app col-span-12 sm:col-span-5 ps-5 ">
            <div className="text-left sm:mt-14">
              <strong className="text-left text-4xl font-bold">
                {data?.attributes.name}
              </strong>
              <div className="text-left mt-3">
                <p>Colaborasi</p>
                <div className="w-full grid grid-cols-4 mt-2">
                  {data?.attributes.collaborations.data.map((item) => (
                    <div
                      key={item.id}
                      className=" me-6 w-10 h-10 bg-center bg-cover"
                      style={{ backgroundImage: `url(${item.attributes.url})` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex mt-12 items-center invisible sm:visible">
              <HiChevronDoubleLeft className="text-lg" /> <p>detail</p>
            </div>
          </div>
          <div className="img_app sm:rotate-[20deg] col-span-12 sm:col-span-7 sm:w-[30em] h- sm:scale-125 sm:translate-x-10 sm:-translate-y-4  hover:rotate-0 hover:scale-100 hover:translate-x-0 transition hover:duration-[200ms]">
            <img
              src={data?.attributes.banner}
              alt="lapor"
              className="bg-cover bg-center"
              style={{ rotate: "initial" }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
