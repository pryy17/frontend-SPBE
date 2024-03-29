import { Modal } from "@/components";
import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function ({ data }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 sm:justify-start justify-items-center">
      {data?.map((item) => (
        <Modal
          key={item.id}
          title={item.title}
          height="55em"
          width="60%"
          button={
            <button
              type="button"
              className="transition ease-in-out delay-75 hover:-translate-y-5 duration-300 mb-9 rounded-md w-56 h-56 bg-white border-[1px] border-[#c9bcbc] px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <p className="text-4xl uppercase font-bold">{item.title}</p>
            </button>
          }
        >
          <div className="mt-2">
            <div className="border-b-2 pb-5 mt-5">
              <strong className="text-lg text-gray-500">Pemenuhan Level</strong>
              <p className="text-base">{item.pemenuhan_level}</p>
            </div>

            <div className="border-b-2 pb-5 mt-5">
              <strong className="text-lg text-gray-500">
                Kriteria Bukti Dukung
              </strong>
              <p className="text-base whitespace-pre-wrap">
                {item.bukti_dukung}
              </p>
            </div>
            {item?.example?.data && (
              <div className="border-b-2 pb-5 mt-5">
                <strong className="text-lg text-gray-500 mt-11">
                  Contoh Bukti Dukung
                </strong>
                {item?.example?.data?.map((item) => (
                  <div className="mb-6" key={item.id}>
                    <TransformWrapper initialScale={1}>
                      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <React.Fragment>
                          <div className="tools relative z-30">
                            <button
                              className="px-8 py-1 me-5 opacity-40 hover:opacity-100 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                              onClick={() => zoomIn()}
                            >
                              +
                            </button>
                            <button
                              className="px-8 py-1 me-5 opacity-40 hover:opacity-100 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                              onClick={() => zoomOut()}
                            >
                              -
                            </button>
                            <button
                              className="px-8 py-1 me-5 opacity-40 hover:opacity-100 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                              onClick={() => resetTransform()}
                            >
                              reset
                            </button>
                            <button
                              className="px-8 py-1 me-5 sm:mt-0 mt-3 opacity-40 hover:opacity-100 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                              onClick={() => resetTransform()}
                            >
                              <a href={item.attributes?.url} target="_blank">
                                open
                              </a>
                            </button>
                          </div>

                          <TransformComponent contentClass="cursor-zoom-in">
                            <img
                              src={item.attributes?.url}
                              alt="test"
                              className="max-w-[60em] "
                            />
                          </TransformComponent>
                        </React.Fragment>
                      )}
                    </TransformWrapper>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      ))}
    </div>
  );
}
