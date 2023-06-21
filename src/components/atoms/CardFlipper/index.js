import Aos from "aos";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 300,
      mirror: true,
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  if (style == "indicator") {
    return (
      <div data-aos="fade-up">
        <ReactCardFlip isFlipped={flipper} flipDirection="horizontal">
          <div
            className="h-[15em] w-[40em] from-[#F90B31] to-[#852f3c] bg-gradient-to-br text-white flex rounded-md shadow-2xl shadow-slate-600"
            onMouseEnter={handleFlip}
            onClick={handleFlip}
          >
            <div className="w-full grid grid-cols-12 place-content-center">
              <p className=" text-center text-5xl font-bold col-span-4 -rotate-90 -ms-16">
                Indikator
              </p>
              <p className="ms-14 text-8xl font-bold col-span-8">
                {data?.attributes.ind}
              </p>
            </div>
          </div>

          <div
            className="h-[15em] w-[40em] from-[#F90B31] to-[#DD0525] bg-gradient-to-b rounded-md text-center grid place-content-center shadow-2xl shadow-slate-600 justify-items-center"
            onMouseLeave={handleFlip}
            onClick={handleFlip}
          >
            <strong className="text-white text-lg">
              {data?.attributes.title}
            </strong>
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
      <div data-aos="fade-up">
        <ReactCardFlip isFlipped={flipper} flipDirection="horizontal">
          <div
            className={`${className} grid grid-cols-1 sm:grid-cols-2`}
            onMouseEnter={handleFlip}
            onClick={handleFlip}
          >
            {img ? (
              <div
                style={{ backgroundImage: `url("${img}")` }}
                className="w-full h-full bg-cover bg-no-repeat bg-center"
              ></div>
            ) : null}

            <div className=" w-full h-full flex justify-center items-center border-s-2 border-gray-500 me-2 sm:my-2">
              <p className="text-black font-bold text-3xl ps-3 tracking-wide whitespace-pre-line leading-tight uppercase">
                {title}
              </p>
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
