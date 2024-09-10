import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function CustomDebounceHook() {
  const { debounce } = useDebounce();

  const handleChange = debounce((e) => {
    console.log("Email :", e.target.value);
  }, 1000);
  const handleChangeV2 = debounce((e) => {
    console.log("Password :", e.target.value);
  }, 5000);

  return (
    <div className="p-2">
      <h1>Custom Debounce Hook</h1>
      <input
        onChange={handleChange}
        placeholder="Enter email here..."
        className="block my-2 border-2 border-gray-200 focus:border-slate-700 p-2 outline-none"
      />
      <input
        onChange={handleChangeV2}
        placeholder="Enter password here..."
        className="border-2 border-gray-200 focus:border-slate-700 p-2 outline-none"
      />
    </div>
  );
}

export default CustomDebounceHook;
