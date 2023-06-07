import { DisclosureDown, Footer, Navbar } from "@/components";
import { getDetailProcedureData } from "@/services/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function detailProcedures() {
  const [data, setData] = useState();
  const [dataProcedure, setDataProcedure] = useState();
  const router = useRouter();
  const path = router.query;
  useEffect(() => {
    if (path.detailProcedures) {
      getDetailProcedureData(path?.detailProcedures).then((res) => {
        console.log(res.data.data);
        setData(res.data.data.attributes);
        setDataProcedure(res.data.data.attributes.indikator_procedure);
      });
    }
  }, [path]);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold pb-9 border-b-4 border-b-slate-700 mb-4">
          {data?.title}
        </h1>
        <div className="grid grid-cols-12 w-full gap-8">
          <div className=" col-span-7 text-lg tracking-wide text-justify">
            <p>{data?.description}</p>
          </div>
          <div className="col-span-5 w-full">
            <div className="mb-1">
              <TransformWrapper initialScale={1}>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <React.Fragment>
                    <div className="tools absolute z-30">
                      <button
                        className="px-8 py-1 me-5 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                        onClick={() => zoomIn()}
                      >
                        +
                      </button>
                      <button
                        className="px-8 py-1 me-5 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                        onClick={() => zoomOut()}
                      >
                        -
                      </button>
                      <button
                        className="px-8 py-1 me-5 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                        onClick={() => resetTransform()}
                      >
                        reset
                      </button>
                    </div>

                    <TransformComponent contentClass="cursor-zoom-in">
                      <img
                        src={data?.example.data?.attributes.url}
                        className="w-fit"
                      />
                    </TransformComponent>
                  </React.Fragment>
                )}
              </TransformWrapper>
            </div>
          </div>
        </div>
        <div className="pe-4">
          {dataProcedure?.map((item) => (
            <DisclosureDown key={item.id} title={item.title}>
              <div>
                <p className="mb-10">{item.description}</p>
                <div className="flex">
                  {item.example.data?.map((itemExample) => (
                    <div className="me-5">
                      <TransformWrapper initialScale={1}>
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                          <React.Fragment>
                            <div className="tools absolute z-30">
                              <button
                                className="px-4 me-5 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                                onClick={() => zoomIn()}
                              >
                                +
                              </button>
                              <button
                                className="px-4 me-5 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                                onClick={() => zoomOut()}
                              >
                                -
                              </button>
                              <button
                                className="px-4 me-5 from-slate-500 bg-gradient-to-r rounded-md shadow-md shadow-slate-400 to-[#f0d3d3]"
                                onClick={() => resetTransform()}
                              >
                                reset
                              </button>
                            </div>

                            <TransformComponent contentClass="cursor-zoom-in">
                              <img
                                src={itemExample.attributes.url}
                                className="w-fit"
                              />
                            </TransformComponent>
                          </React.Fragment>
                        )}
                      </TransformWrapper>
                    </div>
                  ))}
                </div>
              </div>
            </DisclosureDown>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
