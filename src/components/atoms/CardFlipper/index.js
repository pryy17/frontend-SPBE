import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { HiOutlineInformationCircle } from "react-icons/hi";

export default function CardFlipper({
  data,
  style,
  img,
  className,
  title,
  path,
}) {
  const [flipper, setFlipper] = useState(false);
  const { asPath } = useRouter();
  const handleFlip = (e) => {
    e.preventDefault();
    setFlipper(!flipper);
  };

  if (style == "indicator") {
    return (
      <div>
        <ReactCardFlip isFlipped={flipper} flipDirection="horizontal">
          <div
            className="h-[15em] w-[40em] from-[#02bb86] bg-gradient-to-br text-white to-[#367060] flex rounded-md shadow-2xl shadow-slate-600"
            onMouseEnter={handleFlip}
          >
            <div className="w-full grid grid-cols-12 place-content-center">
              <p className=" text-center text-5xl font-bold col-span-4 -rotate-45 -mt-11 -ms-11">
                Indikator
              </p>
              <p className="ms-14 text-8xl font-bold col-span-8">
                {data?.attributes.ind}
              </p>
            </div>
          </div>

          <div
            className="h-[15em] w-[40em] bg-[#02bb86] rounded-md text-center grid place-content-center shadow-2xl shadow-slate-600 justify-items-center"
            onMouseLeave={handleFlip}
          >
            <strong>{data?.attributes.title}</strong>
            <Link href={`${asPath}/${data?.id}`}>
              <button className="from-[#efc9a1] mt-3 hover:shadow-none to-green-300 bg-gradient-to-b py-1 px-4 w-fit rounded-full shadow-md shadow-slate-800 cursor-pointer">
                GO
              </button>
            </Link>
          </div>
        </ReactCardFlip>
      </div>
    );
  }

  if (style == "custom") {
    return (
      <div>
        <ReactCardFlip isFlipped={flipper} flipDirection="horizontal">
          <div
            className={className}
            style={{ backgroundImage: `url("${img}")` }}
            onMouseEnter={handleFlip}
            onClick={handleFlip}
          >
            <div className=" backdrop-blur-sm w-full h-full flex items-center justify-center px-7 text-center">
              <p className="text-black font-bold text-4xl">{title}</p>
            </div>
          </div>

          <div
            className={`${className} `}
            style={{ backgroundImage: `url("${img}")` }}
            onMouseLeave={handleFlip}
            onClick={handleFlip}
          >
            <div className="grid grid-cols-1 text-center">
              <Link href={path}>
                <button className="from-[#efc9a1] text-5xl font-bold text-black mt-3 hover:shadow-none to-green-300 bg-gradient-to-b py-1 px-4 w-fit rounded-full shadow-md shadow-slate-800 cursor-pointer">
                  GO
                </button>
              </Link>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
