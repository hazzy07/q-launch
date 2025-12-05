import React, { useState } from "react";
import TokenModal from "../components/ReuseableComponent/TokenModal";
import { Logo } from "../assets/AssetsRoute/homeAssests";
import { RxCaretDown } from "react-icons/rx";
import { FaArrowDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export default function Swap() {
  const [selectedToken, setSelectedToken] = useState({
    symbol: "SOL",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
  });

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className=" flex py-2 px-3 justify-between items-center gap-3">
        <div className=" flex items-center gap-4 ">
            < NavLink to="/">
          <img src={Logo} alt="" srcset="" />
            </NavLink>
          <div className=" rounded-full px-3 text-[#9BA2AE] border border-[#9BA2AE] font-[600] text-[14px]  ">
            beta
          </div>
          <div className=" flex gap-2 ">
            <p className="text-[#9BA2AE] font-[600]  cursor-pointer ">[swap]</p>
            <p className="hover:text-[#9BA2AE] cursor-pointer ">
              [deposite/create]
            </p>
            <p className="hover:text-[#9BA2AE] cursor-pointer ">[position]</p>
          </div>
        </div>
        <div className="hover:text-[#9BA2AE] text-[16px] cursor-pointer ">
          [connect wallet]
        </div>
      </div>
      <div className="min-h-[80vh] flex justify-center items-center ">
        <div className="p-5 rounded-xl w-full h-[300px]  max-w-[552px] ">
          <div className="mt-5 border border-[#171717] justify-between  p-4 py-5 rounded-xl">
            <p>Sell</p>
            <div className="flex justify-between pr-4 items-center">
              <input
                type="number"
                className="bg-transparent text-white text-[29px] my-2 outline-none w-full"
                placeholder="0"
              />

              <div
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 border px-3 h-[40px] w-[150px] rounded-full cursor-pointer"
              >
                <img
                  src={selectedToken.icon}
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-white text-[14px] font-medium">
                  {selectedToken.symbol}
                </span>
                <div>
                  <RxCaretDown size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center ">
            <span className="absolute bg-[#282828]  rounded-full p-3 ">
              <FaArrowDown />
            </span>
          </div>
          <div className="border mt-2 border-[#171717] justify-between  p-4 py-5 rounded-xl">
            <p>Buy</p>
            <div className="flex justify-between  items-center">
              <input
                type="number"
                className="bg-transparent text-white text-[29px] my-2 outline-none w-full"
                placeholder="0"
              />

              <div
                onClick={() => setModalOpen(true)}
                className="flex items-center whitespace-nowrap gap-2 border px-3 h-[40px] w-[150px] rounded-full cursor-pointer"
              >
                Select Token
                <div>
                  <RxCaretDown size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-white rounded-lg font-[600] text-black h-[55px] mt-5">
            Connect Wallet
          </button>

          <TokenModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSelect={(token) => {
              setSelectedToken(token);
              setModalOpen(false);
            }}
          />
        </div>
      </div>
    </>
  );
}
