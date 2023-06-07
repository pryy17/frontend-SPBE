import { Carousel } from "flowbite-react";
import React from "react";

export default function Corousel({ data, ...rest }) {
  console.log(data)
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[32rem]">
        <Carousel className="object-contain">
          {data?.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.src})` }}
              {...rest}
            ></div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
