import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Nav2 = () => {
  return (
    <div className="text-3xl bg-[#3f2710] text-[#fff] px-2 py-3 flex flex-col gap-2 rounded-l-xl fixed z-[100] top-80 right-0">
        <CiSearch />
        <CiShoppingCart />
    </div>
  )
}

export default Nav2