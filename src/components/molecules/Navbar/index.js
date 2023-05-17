import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import logo from "../../../../public/logo.png";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        if (window.scrollY === 0) {
          setShow(true);
        } else {
          setShow(false);
        }
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div
      className={`${
        show ? "shadow-slate-800 shadow-md z-20" : "fixed visible z-20 w-[85em]"
      }`}
    >
      <nav className="flex items-center h-16 px-7 rounded-sm shadow-slate-800 shadow-md bg-white w-full">
        <div className="flex w-full">
          <div className="logo flex items-center">
            <img src='/logo.png' className="w-10 h-10" />
            <p className="ms-2 text-lg text-red-600 font-bold">SPBE</p>
          </div>
          <div className="navbar-list flex ms-auto items-center">
            <p className="me-20">
              <Link href="/">Home</Link>
            </p>
            <p className="me-20">
              <Link href="/instrument">Instrument</Link>
            </p>
            <p className="me-20">
              <Link href="/procedures">Procedures</Link>
            </p>
            <p className="me-20">Ethics</p>
          </div>
          <div>
            <form>
              <div className="border-2 border-solid bg-white rounded-full h-10 flex items-center active:border-2 active:border-blue-500  hover:border-2 hover:border-blue-500">
                <input
                  type="text"
                  className="border-none rounded-full h-9 focus:ring-0"
                />
                <button className="bg-gray-400 rounded-full w-9 h-9">
                  <HiSearch className="text-xl text-white ms-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
