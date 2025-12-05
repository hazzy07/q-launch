import { useState } from "react";
import { LuSend } from "react-icons/lu";
import { User, SOL, Feed } from "../../assets/AssetsRoute/homeAssests";
import { IoReturnDownForward } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";

export default function LiveChat() {
  const TopHolders = [
    {
      name: "Liquidity pool 💧",
      percent: "100.00%",
    },
    {
      name: "23Qx...YTXx",
      percent: "100.00%",
    },

    {
      name: "Liquidity pool 💧",
      percent: "Hh3z...KWEe",
    },
    {
      name: "DWcE...zQY8",
      percent: "100.00%",
    },
    {
      name: "Aham...fnnP",
      percent: "100.00%",
    },
    {
      name: "5rv4...Bznw",
      percent: "100.00%",
    },
    {
      name: "6JEm...jJqQ",
      percent: "100.00%",
    },
    {
      name: "Bvw8...Z4BY",
      percent: "100.00%",
    },
    {
      name: "DdXn...7oJU",
      percent: "100.00%",
    },
    {
      name: "HFZD...iJwr",
      percent: "100.00%",
    },
    {
      name: "49oZ...LLCF",
      percent: "100.00%",
    },
     {
      name: "Liquidity pool 💧",
      percent: "100.00%",
    },
    {
      name: "23Qx...YTXx",
      percent: "100.00%",
    },

    {
      name: "Liquidity pool 💧",
      percent: "Hh3z...KWEe",
    },
    {
      name: "DWcE...zQY8",
      percent: "100.00%",
    },
    {
      name: "Aham...fnnP",
      percent: "100.00%",
    },
    {
      name: "5rv4...Bznw",
      percent: "100.00%",
    },
    {
      name: "6JEm...jJqQ",
      percent: "100.00%",
    },
    {
      name: "Bvw8...Z4BY",
      percent: "100.00%",
    },
    {
      name: "DdXn...7oJU",
      percent: "100.00%",
    },
    {
      name: "HFZD...iJwr",
      percent: "100.00%",
    },
    {
      name: "49oZ...LLCF",
      percent: "100.00%",
    },
  ];

  return (
    <div className=" flex flex-col gap-4">
      {/* Buy panel */}
      <div className="border-2 rounded-lg border-[#212329] p-4 space-y-3">
        <div className="flex bg-[#1F293780] p-2 rounded-md gap-3">
          <button className="bg-[#1FD978] text-black flex-1 py-2 rounded text-sm">
            Buy
          </button>
          <button className=" flex-1 py-2 text-[#9CA3AF] rounded text-sm">
            Sell
          </button>
        </div>

        <div className="flex justify-between text-xs">
          <button className="bg-[#FFFFFF0D] border border-[#2F3036] px-3 py-1 rounded-full">
            Switch to FTP
          </button>
          <button className="bg-[#FFFFFF0D] border border-[#2F3036] px-3 py-1 rounded">
            Set max slippage
          </button>
        </div>

        <div>
          <div className="flex text-gray-400 text-xs justify-between">
            <p>Balance:</p>
            <p>0 SOL</p>
          </div>

          <div className="bg-[#FFFFFF0D] rounded-lg mt-3 px-3 flex items-center border text-[14px] font-[600] border-[#2F3036]">
            <input
              type="number"
              className="outline-none  w-full flex-1 bg-transparent"
              placeholder="0.00"
            />
            <div className=" flex gap-2 items-center ">
              <p>Sol</p>
              <img
                src={SOL}
                alt=""
                srcset=""
                className=" w-7 h-10 rounded-full "
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 text-xs">
          <button className="bg-[#FFFFFF0D] px-2 py-1 border border-[#2F3036] rounded-full ">
            0.1 SOL
          </button>
          <button className="bg-[#FFFFFF0D]  border border-[#2F3036] px-2 py-1 rounded-full">
            0.5 SOL
          </button>
          <button className="bg-[#FFFFFF0D]  border border-[#2F3036] px-2 py-1 rounded-full">
            1 SOL
          </button>
          <button className="bg-[#FFFFFF0D]  border border-[#2F3036] px-2 py-1 rounded-full">
            Max
          </button>
        </div>

        <button className="bg-[#1FD978] w-full py-2 rounded text-sm">
          Buy FTP
        </button>
      </div>

      {/* Position widget */}
      <div className="border-2 rounded-lg border-[#212329] p-4">
        <div className="flex justify-between">
          <span className="text-sm font-[600]">
            0.00 <span className=" text-[#9BA2AE] font-[400] ">0 FTP</span>{" "}
          </span>
          <span className=" text-end ">-</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-[#9BA2AE] font-[600]">
            Position <span className=" text-[#fff] font-[400] ">Trades</span>{" "}
          </span>
          <span className="text-[#9BA2AE] text-[12px] font-[400]">
            Profit/Loss
          </span>
        </div>

        <div className="bg-gray-700 h-2 rounded mt-2"></div>
        <p className="text-[#9BA2AE] text-[12px] mt-3 font-[400]">
          Profit indicator
        </p>
      </div>

      {/* Join chat box */}
      <div className="border-2 rounded-lg border-[#212329] p-4 flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src={Feed}
            alt=""
            className=" w-8 h-8 object-cover rounded-full "
          />
          <div>
            <p className="text-sm">FTP chat</p>
            <p className="text-xs mt-1 text-gray-400">5.1k members</p>
          </div>
        </div>
        <button className="bg-[#2B313B] flex items-center gap-3 px-3 py-2 rounded text-[14px] font-[600] ">
          <BiMessageRounded size={22} />
          Join chat
        </button>
      </div>

      <div className="border-2 rounded-lg border-[#212329] p-4 text-xs">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-[600]"> Get notified</p>
          <p className="text-[12px] font-[400]">Find out more</p>
        </div>
        <p className="text-[12px] mt-2 text-[#9BA2AE]">
          {" "}
          Get mobile app for coin notifications{" "}
        </p>
      </div>
      <div className="border-2 rounded-lg border-[#212329] p-4 ">
        <div className="flex items-center justify-between ">
          <p className="text-[#F8F8F8] text-[16px] font-[700]">Top holders</p>
          <button className=" border border-[#2F3036] bg-[#181921] px-2 py-[6px] rounded-md text-[#9BA2AE] text-[12px] font-[600] ">
            Generate bubble map
          </button>
        </div>
        <div className="h-[55vh] mt-4 overflow-y-auto no-scrollbar ">
          {TopHolders.map((item, i) => (
            <>
              <div className="flex py-1 items-center justify-between" key={i}>
                <p className="text-[#F8F8F8] text-[14px] ">
                  {item.name}
                </p>
                <p className="text-[#F8F8F8] text-[14px] ">
                  {item.percent}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
