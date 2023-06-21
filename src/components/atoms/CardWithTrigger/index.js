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
        className="container_instrument_col h-[20em] from-[#F90B31] to-[#852f3c] bg-gradient-to-b rounded-lg cursor-pointer"
        onClick={() => {
          setActive(true);
        }}
      >
        {active ? (
          <div
            className={`grid ${
              aspeks.length > 2 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
            }  p-3 items-center gap-3`}
          >
            {aspeks?.map((aspek) => (
              <Link
                href={`/instrument/${aspek.id}`}
                key={aspek.id}
                data-aos="flip-down"
              >
                <div className="from-[#F90B31] to-[#e79da8] bg-gradient-to-br shadow-md shadow-slate-800 border-none rounded-lg sm:min-h-[18em] flex justify-center text-center items-center font-semibold">
                  <p className="whitespace-pre-line text-2xl text-white uppercase px-7 py-1 sm:py-0 sm:px-0">{aspek.attributes.name}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-12 min-h-[20em] rounded-s-md shadow-xl shadow-slate-500">
            <div
              className="col-span-12 sm:col-span-5 rounded-s-md bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            />
            <p className="text-4xl font-semibold col-span-12 sm:col-span-7 ms-2 flex items-center text-white">
              {domainTitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
