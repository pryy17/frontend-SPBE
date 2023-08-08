import { Disclosure, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function DisclosureDown({ children, title, opened }) {
  return (
    <div className="mt-4 whitespace-pre-line">
      <Disclosure defaultOpen={opened}>
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclosure.Button
              className={`flex w-full justify-between ${
                open ? "rounded-t-lg bg-[#eb3f5c]" : "rounded-lg bg-[#F90B31]"
              } px-4 py-2 text-left text-base font-medium text-white hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              {title}
              <HiChevronDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-white`}
              />
            </Disclosure.Button>
            <Transition
              as={Fragment}
              show={open}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 -translate-y-[1em]"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition"
              leaveFrom="opacity-100 rotate-0 "
              leaveTo="opacity-0 -translate-y-[1em]"
            >
              <Disclosure.Panel
                style={{ wordBreak: "break-all" }}
                className="leading-loose z-auto bg-white border-[#c9bcbc] border-[1px] overflow-auto px-4 py-6 rounded-b-lg text-left text-base font-medium  text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
