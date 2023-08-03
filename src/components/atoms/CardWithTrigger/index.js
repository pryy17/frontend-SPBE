import { useOutsideClick } from "@/hooks/useOutsideClick";
import Aos from "aos";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function CardWithTrigger({ domainTitle, aspeks, img, ...rest }) {
  const [active, setActive] = useState(false);
  const wrapper = useRef(null);
  useOutsideClick(wrapper, setActive);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 300,
      mirror: true,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div {...rest} data-aos="zoom-in">
      {" "}
      <div
        ref={wrapper}
        className={`container_instrument_col h-[20em]  rounded-lg cursor-pointer transition ease-in-out delay-75 hover:scale-105 duration-300 ${
          active ? "bg-white" : "border-[1px] border-[#c9bcbc]"
        } `}
        onClick={() => {
          setActive(true);
        }}
      >
        {active ? (
          <div
            className={`grid ${
              aspeks.length > 2
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
            }  p-3 items-center gap-3 bg-[#f7eded] rounded-md border-[1px] border-[#c9bcbc]`}
          >
            {aspeks?.map((aspek) => (
              <Link
                href={`/instrument/${aspek.id}`}
                key={aspek.id}
                data-aos="flip-down"
              >
                <div className="transition ease-in-out delay-75 hover:-translate-y-5 duration-300 bg-white border-[1px] px-8 border-[#c9bcbc] rounded-lg sm:min-h-[18em] flex justify-center text-center items-center font-semibold">
                  <p className="whitespace-pre-line text-xl text-gray-700 uppercase px-7 py-1 sm:py-0 sm:px-0">
                    {aspek.attributes.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-12 min-h-[20em] rounded-s-md">
            <div
              className="col-span-12 sm:col-span-5 rounded-s-md bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            />
            <p className="text-4xl font-semibold col-span-12 sm:col-span-7 ms-2 flex items-center text-gray-700">
              {domainTitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
