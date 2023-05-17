import { DisclosureDown, Footer, Modal, Navbar } from "@/components";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDetailIndikatorData } from "@/services/api";

export default function detailIndikator() {
  const router = useRouter();
  const path = router.query;
  console.log("id", path);
  const [dataDetailIndikator, setDataDetailIndikator] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (path.detailIndikator) {
      getDetailIndikatorData(path?.detailIndikator)
        .then((res) => {
          const data = res?.data.data.attributes;
          // console.log(res?.data.data.attributes.indikators.data);
          setDataDetailIndikator(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [path]);
  if (!dataDetailIndikator) {
    return <div>loading...</div>;
  }

  return (
    <div className="min-h-[100vh] flex-col">
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold pb-9 border-b-4 border-b-slate-700 mb-4">
          {dataDetailIndikator.title}
        </h1>
        <div className="type_indicator">
          <div className="flex mb-4 w-full">
            <p className="font-bold text-lg">
              domain : {dataDetailIndikator.domain.data.attributes.name}
            </p>
            <p className="ms-auto font-bold text-lg">
              indikator {dataDetailIndikator.ind}
            </p>
          </div>
          <p className="font-bold text-lg">
            aspek : {dataDetailIndikator.aspek.data.attributes.name}
          </p>
        </div>
        <div className="mt-7">
          <DisclosureDown title={"penjelasan indikator"}>
            {dataDetailIndikator.explanation_indicator}
          </DisclosureDown>
          <DisclosureDown title={"penjelasan penilaian"}>
            {dataDetailIndikator.explanation_evaluation}
          </DisclosureDown>
          <DisclosureDown title={"penjelasan bukti dukung"}>
            {dataDetailIndikator.supporting_evidence}
          </DisclosureDown>
          <DisclosureDown title={"level"}>
            <div className="grid grid-cols-4">
              {dataDetailIndikator?.level?.data.map((item) => (
                <Modal
                  key={item.id}
                  title={item.name}
                  button={
                    <button
                      type="button"
                      className="mb-9 rounded-md w-56 h-56 from-[#02bb86] bg-gradient-to-br shadow-md shadow-slate-800 to-[#6d6262] px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      {item.name}
                    </button>
                  }
                >
                  <div className="mt-2">
                    <div className="border-b-2 pb-5 mt-5">
                      <strong className="text-lg text-gray-500">
                        Kriteria Level
                      </strong>
                      <p className="text-base">{item.kriteria}</p>
                    </div>

                    <div className="border-b-2 pb-5 mt-5">
                      <strong className="text-lg text-gray-500">
                        Kriteria Pemenuhan Level
                      </strong>
                      <p className="text-base">{item.pemenuhan}</p>
                    </div>

                    <div className="border-b-2 pb-5 mt-5">
                      <strong className="text-lg text-gray-500">
                        Kriteria Bukti Dukung
                      </strong>
                      <p className="text-base whitespace-pre-wrap">
                        {item.bukti_dukung}
                      </p>
                    </div>
                  </div>
                </Modal>
              ))}
            </div>
          </DisclosureDown>
          <DisclosureDown
            title={"Kaidah penilaian pemantauan dan evaluasi SPBE"}
          >
            test
          </DisclosureDown>
        </div>
      </div>
      <Footer className="mt-44" />
    </div>
  );
}
