import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa6";
const tokenList = [
  {
    symbol: "PUMP",
    name: "PUMP",
    icon: "https://cryptologos.cc/logos/pump-coin-logo.png",
  },
  {
    symbol: "USDe",
    name: "USDe",
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    symbol: "TRX",
    name: "Tron",
    icon: "https://cryptologos.cc/logos/tron-trx-logo.png",
  },
  {
    symbol: "APT",
    name: "Aptos",
    icon: "https://cryptologos.cc/logos/aptos-apt-logo.png",
  },

   {
    symbol: "PUMP",
    name: "PUMP",
    icon: "https://cryptologos.cc/logos/pump-coin-logo.png",
  },
  {
    symbol: "USDe",
    name: "USDe",
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    symbol: "TRX",
    name: "Tron",
    icon: "https://cryptologos.cc/logos/tron-trx-logo.png",
  },
  {
    symbol: "APT",
    name: "Aptos",
    icon: "https://cryptologos.cc/logos/aptos-apt-logo.png",
  },

   {
    symbol: "PUMP",
    name: "PUMP",
    icon: "https://cryptologos.cc/logos/pump-coin-logo.png",
  },
  {
    symbol: "USDe",
    name: "USDe",
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    symbol: "TRX",
    name: "Tron",
    icon: "https://cryptologos.cc/logos/tron-trx-logo.png",
  },
  {
    symbol: "APT",
    name: "Aptos",
    icon: "https://cryptologos.cc/logos/aptos-apt-logo.png",
  },
];

export default function TokenModal({ open, onClose, onSelect }) {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0f0f0f] w-[552px] rounded-xl p-4">
        <div className="flex justify-between px-2 items-center mb-3">
          <p className="text-white font-[700] text-[19px]">Select a token</p>
          <button onClick={onClose} className="text-[#9ca3af] text-[16px]">
            [Close]
          </button>
        </div>

        <div className=" flex gap-4 ">
          <div className="relative flex items-center  w-[420px] bg-black border hover:border-[#ffffff60] border-[#2D2E31] rounded-md px-3 h-[40px] cursor-pointer ">
            <FiSearch className="text-white w-4 h-[24px] mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent flex-1 font-inter font-[600] text-[13px] outline-none placeholder-[#acadae] text-white"
            />
          </div>

          <button
            className=" bg-white rounded-md text-black text-[14px] font-[700] flex items-center justify-center px-3 h-[38px] "
            to=""
            end
          >
            Search
          </button>
        </div>

        <div className=" h-[55vh] overflow-y-auto no-scrollbar mt-4">
          {tokenList.map((token) => (
            <button
              key={token.symbol}
              onClick={() => onSelect(token)}
              className="w-full flex items-center gap-3 py-2 px-2 hover:bg-[#1c1c1c] rounded-md text-white"
            >
              <img src={token.icon} className="w-8 h-8" />
              <div className=" flex w-full justify-between items-center ">
                <p className="text-[14px]">
                  {token.symbol} {token.name}
                </p>
                <div className=" text-[13px] ">
                  <p className=" hover:text-[#6c6ce0] "> [explore] </p>
                  <p className=" flex gap-2 items-center ">
                    <span className=" text-[#a8a4a4] ">
                      <FaRegCopy size={17} />
                    </span>
                    pump..9Dfn
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
