import { CardWithTrigger, Footer, Navbar } from "@/components";
import { getInstrumentData } from "@/services/api";
import { useEffect, useState } from "react";

export default function instrument() {
  const [dataInstrument, setDataInstrument] = useState(null);

  useEffect(() => {
    getInstrumentData()
      .then((data) => {
        setDataInstrument(data?.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(dataInstrument);
  if (!dataInstrument) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <br />
      <div className="container_instrument bg-white  py-10">
        <div className="container_intrument_row px-8 grid grid-cols-2 gap-8">
          {dataInstrument?.map((data) => (
            <CardWithTrigger
              domainTitle={data.attributes.name}
              key={data.id}
              aspeks={data.attributes.aspeks.data}
              img={`http://localhost:1337${data.attributes.domain_image.data.attributes.url}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
