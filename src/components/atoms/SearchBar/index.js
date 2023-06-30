import React from "react";
import { HiSearch } from "react-icons/hi";

export default function index({ handleSubmit, handleChange, value, ...rest }) {
  
  return (
    <div>
      <div className="mt-8 sm:mt-0 flex justify-center w-full" {...rest}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="w-full"
        >
          <div className="border-2 border-solid w-full mx-auto bg-white rounded-full h-10 flex items-center active:border-2 active:border-blue-500  hover:border-2 hover:border-blue-500">
            <input
              type="text"
              defaultValue={value}
              className="border-none w-[87%] rounded-full h-9 focus:ring-0"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <button className="bg-gray-400 rounded-full w-9 h-9 ms-auto">
              <HiSearch className="text-xl text-white ms-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
