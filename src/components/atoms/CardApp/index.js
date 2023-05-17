import Link from "next/link";
import React from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";

export default function CardAPP({ data }) {
  const url = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div className="mb-5">
      <Link href="/list-app/1">
        <div className="card_app border-2 max-w-[40em] h-[15em] rounded-md grid grid-cols-12 shadow-md shadow-slate-950 overflow-hidden cursor-pointer hover:animate-pulse">
          <div className="desc_app col-span-5 ps-5 ">
            <div className="text-left mt-14">
              <strong className="text-left text-4xl font-bold">
                {data?.attributes.name}
              </strong>
              <div className="text-left mt-3">
                <p>Colaborasi</p>
                <div className="w-full grid grid-cols-4 mt-2">
                  {data?.attributes.collaboration.data.map((item, index) => (
                    <div
                      key={index}
                      className=" me-6  w-10 h-10 bg-center bg-cover"
                      style={{ backgroundImage: `url(${url}${item.img})` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex mt-12 items-center">
              <HiChevronDoubleLeft className="text-lg" /> <p>detail</p>
            </div>
          </div>
          <div className="img_app rotate-[20deg] col-span-7 w-[30em] scale-125 translate-x-10 -translate-y-4  hover:rotate-0 hover:scale-100 hover:translate-x-0 transition hover:duration-[200ms]">
            <img
              src={`${url}${data?.attributes.banner}`}
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
