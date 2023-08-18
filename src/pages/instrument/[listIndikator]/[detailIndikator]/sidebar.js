import React, { useState, Fragment, useRef, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { MdClose, MdOutlineReorder } from "react-icons/md";
import { Transition } from "@headlessui/react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { getAllIndikatorData } from "@/services/api";
import Link from "next/link";

export default function sidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const [dataIndicator, setDataIndicator] = useState();
  const ref = useRef();
  useOutsideClick(ref, (visible) => {
    setIsVisible(visible);
  });

  useEffect(() => {
    getAllIndikatorData()
      .then((res) => {
        const data = res.data.data;
        const newdata = data.sort((a, b) => {
          // Mengonversi nilai string menjadi angka sebelum perbandingan
          var indikatorA = parseInt(a.attributes.ind);
          var indikatorB = parseInt(b.attributes.ind);

          return indikatorA - indikatorB;
        });
        console.log(newdata);
        setDataIndicator(newdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Transition
        as={Fragment}
        show={isVisible}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 -translate-x-20"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 -translate-x-20"
      >
        <div
          className={`fixed top-16 z-10 shadow-md shadow-[#5e5c5c]`}
          ref={ref}
        >
          <Sidebar>
            <Sidebar.Items>
              <div className="flex items-center justify-between">
                <h1 className="font-bold">LIST INDIKATOR</h1>
                <MdClose
                  className="text-xl cursor-pointer font-bold"
                  onClick={() => {
                    setIsVisible(false);
                  }}
                />
              </div>
              <Sidebar.ItemGroup>
                {dataIndicator?.map((item) => (
                  <Link href={`/instrument/indikator/${item.id}`} key={item.id} >
                    <Sidebar.Item href="#" icon="">
                      <p className= "font-bold" >INDIKATOR {item.attributes.ind}</p>
                    </Sidebar.Item>
                  </Link>
                ))}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      </Transition>
      {isVisible ? null : (
        <div className="w-10 h-10 fixed top-16 md:right-80 z-10 cursor-pointer">
          <MdOutlineReorder
            className="text-4xl"
            onClick={() => {
              setIsVisible(true);
            }}
          />
        </div>
      )}
    </div>
  );
}
