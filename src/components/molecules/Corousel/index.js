import { Carousel } from "flowbite-react";
import React from "react";

export default function Corousel({ data, ...rest }) {
  console.log(data)
  return (
    <div>
      <div className="h-48 sm:w-full sm:h-64 xl:h-80 2xl:h-[32rem]">
        <Carousel className="object-contain bg-transparent" >
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
