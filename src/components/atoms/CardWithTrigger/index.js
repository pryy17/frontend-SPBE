import { useOutsideClick } from "@/hooks/useOutsideClick";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function CardWithTrigger({ domainTitle, aspeks, img }) {
  const [active, setActive] = useState(false);
  const wrapper = useRef(null);
  useOutsideClick(wrapper, setActive);

  return (
    <div>
      {" "}
      <div
        ref={wrapper}
        className="container_instrument_col min-h-[20em] from-[#02bb86] to-green-700 bg-gradient-to-b rounded-lg cursor-pointer"
        onClick={() => {
          setActive(true);
        }}
      >
        {active ? (
          <div
            className={`grid ${
              aspeks.length > 2 ? "grid-cols-3" : "grid-cols-2"
            }  p-3 items-center gap-3`}
          >
            {aspeks?.map((aspek) => (
              <Link href={`/instrument/${aspek.id}`} key={aspek.id}>
                <div className="from-[#e2e7e6] to-[#02bb86] bg-gradient-to-b shadow-md shadow-slate-800 border-none rounded-lg min-h-[18em] flex justify-center text-center items-center font-semibold">
                  {aspek.attributes.name}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-12 min-h-[20em] rounded-s-md shadow-md shadow-slate-500">
            <div
              className="col-span-5 rounded-s-md bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            />
            <p className="text-4xl font-semibold col-span-7 ms-2 flex items-center text-white">
              {domainTitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
