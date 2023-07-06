import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useRouter } from "next/router";
import { data } from "./data";
import { Navbar } from "flowbite-react";
import { SearchBar } from "../../atoms";

export default function NavbarComp() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const path = useRouter().pathname;
  const router = useRouter();
  const [valueSearch, setValueSearch] = useState("");

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
  const handleChange = (e) => {
    const newValueSearch = e.target.value.replace("/", " ");
    setValueSearch(newValueSearch);
    console.log(valueSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueSearch) {
      router.push(`/search/${valueSearch.replace("/", " ")}`);
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
    <Navbar
      fluid
      rounded
      className={`${
        show
          ? "z-20 mb-5 transition duration-300 "
          : "shadow-slate-800 shadow-lg fixed right-0 visible z-20 w-full sm:w-[100%] duration-300 transition-[0.5s]"
      }`}
    >
      <Navbar.Brand>
        <div className="logo flex items-center">
          <img src="/logo.png" className="w-10 h-10" />
          <p className="ms-2 text-lg text-red-600 font-bold">SPBE</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        data-collapse-toggle="navbar-sticky"
        className={`${
          show
            ? "z-20 transition duration-300 "
            : "fixed visible z-20 duration-300 transition-[0.5s] top-2 right-2"
        }`}
      />
      <Navbar.Collapse
        className={`navbar-list w-full z-40 ${
          show
            ? "z-20 transition duration-300 "
            : "fixed sm:relative visible z-20 duration-300 transition-[0.5s] top-14 sm:top-0 bg-white pb-5 sm:pb-0"
        }`}
      >
        {data.map((item) => (
          <p
            key={item.id}
            style={{ marginRight: "2em" }}
            className={`self-center mb-4 sm:mb-0 ${
              item.path === path &&
              "border-b-4 border-red-600 font-bold text-red-500"
            } `}
          >
            <Link href={item.path}>{item.name}</Link>
          </p>
        ))}
        {/* search bar */}
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </Navbar.Collapse>
    </Navbar>
  );
}
