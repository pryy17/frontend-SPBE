import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";

export default function Footer({ ...rest }) {
  return (
    <div {...rest}>
      <footer className="mt-24 self-end">
        <div className="w-full grid grid-cols-12 pb-10 from-[#F90B31] to-[#DD0525] bg-gradient-to-b text-white font-semibold px-5 pt-5 rounded-lg rounded-b-none">
          <div className="col-span-6 text-4xl">SPBE</div>
          <div className="col-span-2 ">
            <h2 className="font-semibold">Kontak</h2>
            <br />
            <div className="flex items-center mb-2">
              <HiMail className="text-lg me-1" /> <p>timspbe@spbe.go.id</p>
            </div>
            <div className="flex items-center">
              <HiPhone className="text-lg me-1" /> <p>+6285729457264</p>
            </div>
          </div>
          <div className="col-span-2 font-semibold">
            {" "}
            <h2 className="font-semibold">Kontak</h2>
            <br />
            <p>kominfo.go.id</p>
            <p>spbe.menpan.go.id</p>
          </div>
          <div className="col-span-2">test</div>
        </div>
        <div className="py-3 bg-black text-center">
          <p className="text-white">© BrandName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
