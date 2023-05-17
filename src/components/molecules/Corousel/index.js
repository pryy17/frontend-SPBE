import { Carousel } from "flowbite-react";
import React from "react";

export default function Corousel() {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[32rem]">
        <Carousel>
          <img
            src="https://bappeda.grobogan.go.id/images/rapat_SPBE.jpeg"
            alt="..."
          />
          <img
            src="https://www.menpan.go.id/site/images/berita_foto_backup/2023/20230320_-_Forum_SPBE_Summit_2023_27.jpeg"
            alt="..."
          />
          <img
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/03/20/630062264.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
