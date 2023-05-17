import { useRouter } from "next/router";
import { CardFlipper, Footer, Navbar } from "@/components";
import { getIndikatorData } from "../../../services/api";
import React, { useEffect, useState } from "react";

export default function indikator() {
  const router = useRouter();
  const path = router.query;
  console.log("id", path);
  const [dataIndikator, setDataIndikator] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (path.listIndikator) {
      getIndikatorData(path?.listIndikator)
        .then((res) => {
          const data = res?.data.data.attributes.indikators.data;
          // console.log(res?.data.data.attributes.indikators.data);
          setTitle(res?.data.data.attributes.name);
          setDataIndikator(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [path]);
  if (!dataIndikator) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="h-60 flex justify-center items-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {dataIndikator?.map((item) => (
          <CardFlipper style="indicator" key={item.id} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
