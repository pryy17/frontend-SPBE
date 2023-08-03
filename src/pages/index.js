import { dataMenu } from "@/data/dataMenu";
import { CardFlipper, Corousel, Footer, Navbar } from "../components";
import { data as img } from "@/data/home/dataCorousel";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />
      <Corousel
        data={img}
        className="bg-cover bg-center w-full h-full bg-no-repeat"
      />
      <div className="mt-20 xl:flex justify-center grid grid-cols-1 justify-items-center w-full ">
        <video
          width="440px"
          loop="true"
          autoplay="autoplay"
          className="aspect-video me-0 xl:me-16 w-full xl:w-[45em] h-[20em] xl:h-[27em]"
          muted
        >
          <source
            src="https://res.cloudinary.com/dsgz61dvy/video/upload/v1689646043/spbe_a31716bbfd.mp4"
            type="video/mp4"
          />
        </video>

        <div className="mt-10 xl:mt-0 border-s-2 ps-3 xl:text-left border-slate-700 text-5xl xl:text-7xl w-fit font-bold">
         EVALUASI <br /> SISTEM <br /> PEMERINTAHAN <br /> BERBASIS <br /> ELEKTRONIK
        </div>
      </div>
      <div>
        <h1 className="text-center mb-20 mt-20 text-2xl xl:text-5xl ">
          Panduan Sistem Pemerintahan Berbasis Elektronik
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full md:px-[10em] justify-center justify-items-center gap-20">
          {dataMenu.map((item) => (
            <CardFlipper
              key={item.id}
              style="custom"
              path={item.path}
              title={item.name}
              img={item.img}
              className={`bg-cover backdrop-blur-xl bg-no-repeat bg-center h-[25em] sm:h-[15em] w-[20em] sm:w-[40em] justify-center items-center text-white flex rounded-md shadow-2xl shadow-slate-600`}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
