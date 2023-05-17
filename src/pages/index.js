import { dataMenu } from "@/data/dataMenu";
import { CardFlipper, Corousel, Footer, Navbar } from "../components";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Corousel />
      <div className="mt-20 flex">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/-p32jFI00zw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="aspect-video me-16"
        ></iframe>

        <div className="border-s-2 ps-3 border-slate-700 text-7xl">
          SISTEM <br /> PEMERINTAHAN <br /> BERBASIS <br /> ELEKTRONIK
        </div>
      </div>
      <div>
        <h1 className="text-center mb-20 mt-20 text-5xl">
          Panduan Sistem Pemerintahan Berbasis Elektronik
        </h1>
        <div className="grid grid-cols-2 w-full justify-center justify-items-center gap-20">
          {dataMenu.map((item) => (
            <CardFlipper
              key={item.id}
              style="custom"
              path={item.path}
              title={item.name}
              img={item.img}
              className={`bg-cover bg-no-repeat bg-center h-[15em] w-[40em] justify-center items-center text-white flex rounded-md shadow-2xl shadow-slate-600`}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
