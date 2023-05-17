import { Disclosure } from "@headlessui/react";
import React from "react";
import { HiChevronDown } from "react-icons/hi";

export default function DisclosureDown({ children, title }) {
  return (
    <div className="mt-4 whitespace-pre-line">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclosure.Button
              className={`flex w-full justify-between ${
                open ? "rounded-t-lg bg-[#02bb86]" : "rounded-lg"
              } bg-[#02bb86] px-4 py-2 text-left text-base font-medium text-white hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              {title}
              <HiChevronDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel
              style={{ wordBreak: "break-all" }}
              className="bg-purple-100 overflow-auto px-4 py-6 rounded-b-lg text-left text-base font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            >
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
