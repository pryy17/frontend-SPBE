import { DisclosureDown } from "@/components";
import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function levelDown({ data }) {
  return (
    <div>
      <div>
        {data?.map((item) => (
          <DisclosureDown title={item.title} key={item.id} opened={false}>
            <div className="mt-2">
              <div className="border-b-2 pb-5 mt-5">
                <strong className="text-lg text-gray-500">
                  Pemenuhan Level
                </strong>
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
                            <div className="tools absolute z-30">
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
          </DisclosureDown>
        ))}
      </div>
    </div>
  );
}
