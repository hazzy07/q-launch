import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import { IoIosPause } from "react-icons/io";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { IoPlayOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { RiVipCrownLine } from "react-icons/ri";
import { GiImperialCrown } from "react-icons/gi";
import { RiTimer2Line } from "react-icons/ri";
import {
  Conta1,
  Conta2,
  Conta3,
  Conta4,
  Conta5,
  Conta6,
  Conta7,
} from "../assets/AssetsRoute/homeAssests";
import { FiEyeOff } from "react-icons/fi";

export default function ThreeGridStructure() {
  const LeftGridDat = [
    {
      image: Conta1,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },

     {
      image: Conta2,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },

     {
      image: Conta3,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },

     {
      image: Conta4,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },


     {
      image: Conta5,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },


     {
      image: Conta6,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },


     {
      image: Conta7,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },


     {
      image: Conta1,
      title: "BAG",
      Symbol: "BAGHOLDER",
      userId: "7yV7...launch",
      price: "$5",
      mcPrice: "$5.3K",
      tex: "4",
      button: "+0.01",
      time: "38s",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 rounded-md py-1 px-2 w-[100px]  bg-[#212329] border border-[#38383F] ">
          <FaSearch />
          <input
            className="bg-transparent text-sm w-full outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* ==== left grid ===  */}
        <div className=" border rounded-lg border-[#212329]">
          <div className="bg-black border-b mb-2 p-3 border-[#212329] items-center justify-between flex gap-3 pb-3 ">
            <div className="flex items-center gap-2">
              <BiGridVertical />
              <p className="text-green-400 text-sm"> NEWLY CREATED </p>
            </div>
            <div className="flex items-center gap-2">
              <IoIosPause />
              <PiSlidersHorizontalBold />
            </div>
          </div>

          <div className="h-[calc(96vh-100px)] p-3 space-y-3  no-scrollbar overflow-y-auto">
            {LeftGridDat.map((item, i) => (
              <div
                key={i}
                className="border border-[#212329] p-3 rounded flex items-center justify-between space-x-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-[72px] object-cover "
                  />
                  <div>
                    <p className=" text-[12px] font-[700] ">
                      {item.title}{" "}
                      <span className=" font-[600] text-[#D1D5DB] ">
                        {" "}
                        {item.Symbol}
                      </span>
                    </p>
                    <div className="flex text-[11px] text-[#9CA3AF] gap-1 items-center">
                      <span className="   ">{item.time}</span>
                      <FiEyeOff /> <FaSearch /> <FaRegStar />
                    </div>
                    <p className=" text-[10px] text-[#9CA3AF] ">
                      {item.userId}
                    </p>
                    <div className="flex items-center mt-1 gap-1 ">
                      <div className="flex text-[9px] text-[#FCA5A5] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <FaRegUser size={8} />
                        <span className=" pt-[2px] ">2</span>
                      </div>

                      <div className="flex text-[9px] text-[#61CC8C] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <RiVipCrownLine size={10} />
                        <span className=" pt-[2px] ">2</span>
                      </div>

                      <div className="flex text-[9px] text-[#61CC8C] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <GiImperialCrown size={12} />
                        <span className=" pt-[2px] ">2</span>
                      </div>

                      <div className="flex text-[9px] text-[#61CC8C] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <RiTimer2Line size={12} />
                        <span className=" pt-[2px] ">2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-3 items-center ">
                    <p className="text-[#9CA3AF] text-[10px] font-[700]">
                      V <span className="text-[#fff]">{item.price}</span>
                    </p>
                    <p className=" text-[#9CA3AF] text-[10px] font-[600] ">
                      MC
                      <span className=" text-[#FACC15] "> {item.mcPrice}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className=" text-[#9CA3AF] text-[10px] font-[600] ">
                      TX
                      <span className=" text-[#Fff]"> {item.mcPrice}</span>
                    </p>

                    <div className="flex gap-1">
                      <div className="w-[30px] rounded-full h-[4px] bg-[#5FE992]"></div>
                      <div className="w-[10px] rounded-full h-[4px] bg-[#ED7878]"></div>
                    </div>
                  </div>

                  <button className="bg-white mt-3 text-black font-[600] w-[54px] h-[25px] text-xs rounded">
                    {item.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==== middle grid ===  */}

        <div className=" border rounded-lg border-[#212329] ">
          <div className="bg-black border-b mb-2 p-3 border-[#212329] items-center justify-between flex gap-3 pb-3 ">
            <div className="flex items-center gap-2">
              <BiGridVertical />
              <p className="text-green-400 text-sm"> NEWLY CREATED </p>
            </div>
            <div className="flex items-center gap-2">
              <IoPlayOutline />
              <PiSlidersHorizontalBold />
            </div>
          </div>

          <div className="h-[calc(96vh-100px)] p-3 space-y-3  no-scrollbar overflow-y-auto"></div>
        </div>

        {/* ==== right grid ===  */}

        <div className=" border rounded-lg border-[#212329]">
          <div className="bg-black border-b mb-2 p-3 border-[#212329] items-center justify-between flex gap-3 pb-3 ">
            <div className="flex items-center gap-2">
              <BiGridVertical />
              <p className="text-green-400 text-sm"> NEWLY CREATED </p>
            </div>
            <div className="flex items-center gap-2">
              <IoIosPause />
              <PiSlidersHorizontalBold />
            </div>
          </div>

          <div className="h-[calc(96vh-100px)] p-3 space-y-3  no-scrollbar overflow-y-auto">
            {LeftGridDat.map((item, i) => (
              <div
                key={i}
                className="border border-[#212329] p-3 rounded flex items-center justify-between space-x-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-[72px] object-cover "
                  />
                  <div>
                    <p className=" text-[12px] font-[700] ">
                      {item.title}{" "}
                      <span className=" font-[600] text-[#D1D5DB] ">
                        {" "}
                        {item.Symbol}
                      </span>
                    </p>
                    <div className="flex text-[11px] text-[#9CA3AF] gap-1 items-center">
                      <span className="   ">{item.time}</span>
                      <FiEyeOff /> <FaSearch /> <FaRegStar />
                    </div>
                    <p className=" text-[10px] text-[#9CA3AF] ">
                      {item.userId}
                    </p>
                    <div className="flex items-center mt-1 gap-1 ">
                      <div className="flex text-[9px] text-[#FCA5A5] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <FaRegUser size={8} />
                        <span className=" pt-[2px] ">2</span>
                      </div>

                      <div className="flex text-[9px] text-[#61CC8C] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <RiVipCrownLine size={10} />
                        <span className=" pt-[2px] ">2</span>
                      </div>

                      <div className="flex text-[9px] text-[#61CC8C] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <GiImperialCrown size={12} />
                        <span className=" pt-[2px] ">2</span>
                      </div>

                      <div className="flex text-[9px] text-[#61CC8C] items-center h-[20px] gap-1 rounded-full px-2 border  border-[#212329] ">
                        <RiTimer2Line size={12} />
                        <span className=" pt-[2px] ">2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-3 items-center ">
                    <p className="text-[#9CA3AF] text-[10px] font-[700]">
                      V <span className="text-[#fff]">{item.price}</span>
                    </p>
                    <p className=" text-[#9CA3AF] text-[10px] font-[600] ">
                      MC
                      <span className=" text-[#FACC15] "> {item.mcPrice}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className=" text-[#9CA3AF] text-[10px] font-[600] ">
                      TX
                      <span className=" text-[#Fff]"> {item.mcPrice}</span>
                    </p>

                    <div className="flex gap-1">
                      <div className="w-[30px] rounded-full h-[4px] bg-[#5FE992]"></div>
                      <div className="w-[10px] rounded-full h-[4px] bg-[#ED7878]"></div>
                    </div>
                  </div>

                  <button className="bg-white mt-3 text-black font-[600] w-[54px] h-[25px] text-xs rounded">
                    {item.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
