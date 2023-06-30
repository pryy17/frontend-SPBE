import { Footer, Navbar, SearchBar } from "@/components";
import { getSearchAppData, getSearchIndikatorData } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function index() {
  const router = useRouter();
  const queryValue = router.query.value;
  const [dataIndikator, setDataIndikator] = useState();
  const [dataApp, setDataApp] = useState();
  const [valueSearch, setValueSearch] = useState("");

  const handleChange = (e) => {
    const newValueSearch = e.target.value.replace("/", " ");
    setValueSearch(newValueSearch);
    console.log(valueSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueSearch) {
      router.push(`/search/${valueSearch.replace("/", " ")}`);
    }
  };

  useEffect(() => {
    if (queryValue) {
      getSearchIndikatorData(queryValue)
        .then((res) => {
          setDataIndikator(res?.data.data);
        })
        .catch((e) => {
          console.log(e);
        });

      getSearchAppData(queryValue)
        .then((res) => {
          setDataApp(res?.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [queryValue]);
  console.log(dataIndikator);
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center text-6xl font-bold mb-12">
          Halaman Pencarian Panduan SPBE
        </h1>
        <div className="mx-10 xl:mx-96">
          <SearchBar
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={queryValue}
          />
        </div>
        <div>
          <h2 className="text-3xl"># Indikator</h2>
          <p> {dataIndikator?.length} result</p>
          {dataIndikator?.map((data) => (
            <Link href={`/instrument/aspek/${data.id}`} key={data.id}>
              <div className="mt-3 border-2 border-gray-400 p-4 rounded-md hover:bg-[#e1e2df] cursor-pointer active:bg-[#f5f8f0]">
                <div>
                  <div>
                    <strong>indikator {data.attributes.ind}</strong>
                  </div>
                  <div className="my-2">
                    <strong>
                      domain : {data.attributes.domain.data.attributes.name}
                    </strong>
                  </div>
                  <div>
                    <strong>
                      aspek : {data.attributes.aspek.data.attributes.name}
                    </strong>
                  </div>
                  <div className="my-4">
                    <strong>Name</strong>
                    <p>{data.attributes.title}</p>
                  </div>
                  <div>
                    <strong>explanation</strong>
                    <p className="whitespace-pre-line">
                      {data.attributes.explanation_indicator}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <h2 className="text-3xl mt-3"># application</h2>
          <p> {dataApp?.length} result</p>
          <div className="mt-3">
            {dataApp?.map((item) => (
              <Link key={item.id} href={`/list-app/${item.id}`}>
                <div className="mt-3 border-2 p-4 rounded-md hover:bg-[#e1e2df] cursor-pointer active:bg-[#f5f8f0]">
                  <div>
                    <strong>Name :</strong>
                    <p>{item.attributes.name}</p>
                  </div>
                  <div>
                    <strong>explanation :</strong>
                    <p>{item.attributes.overview}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
