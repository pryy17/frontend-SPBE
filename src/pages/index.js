import { dataMenu } from "@/data/dataMenu";
import { CardFlipper, Corousel, Footer, Navbar } from "../components";
import { data as img } from "@/data/home/dataCorousel";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />
      <Corousel data={img} className="bg-contain w-full h-full bg-no-repeat bg-center" />
      <div className="mt-20 xl:flex grid grid-cols-1 justify-items-center w-full ">
        <iframe
          src="https://www.youtube.com/embed/-p32jFI00zw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video me-0 xl:me-16 w-full xl:w-[40em] h-[20em] xl:h-[25em]"
        ></iframe>

        <div className="mt-10 xl:mt-0 border-s-2 ps-3 xl:text-left border-slate-700 text-5xl xl:text-7xl w-fit">
          SISTEM <br /> PEMERINTAHAN <br /> BERBASIS <br /> ELEKTRONIK
        </div>
      </div>
      <div>
        <h1 className="text-center mb-20 mt-20 text-2xl xl:text-5xl">
          Panduan Sistem Pemerintahan Berbasis Elektronik
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full justify-center justify-items-center gap-20">
          {dataMenu.map((item) => (
            <CardFlipper
              key={item.id}
              style="custom"
              path={item.path}
              title={item.name}
              img={item.img}
              className={`bg-cover rounded-md bg-no-repeat bg-center h-[25em] sm:h-[15em] w-[20em] sm:w-[40em] justify-center items-center text-white flex rounded-md shadow-2xl shadow-slate-600`}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
