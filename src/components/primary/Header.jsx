import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Modal from "../ReuseableComponent/Modal";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { PiCaretRightLight } from "react-icons/pi";
import {
  Image,
  Image1,
  Image2,
  Image3,
  Image4,
  Logo,
} from "../../assets/AssetsRoute/homeAssests";
import { HiMiniWallet } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <header className="top-0 left-0 right-0 z-[200] h-[72px] hidden lg:flex items-center justify-between px-6 font-interTight bg-black fixed transition-all duration-300">
      {/* Search Bar */}

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

      <div className="flex items-center gap-4">
        <NavLink
        to="/create-coin"
          className=" bg-white rounded-lg text-black text-[14px] font-[600] flex items-center justify-center px-3 h-[33px]  "
          end
        >
          Create coin
        </NavLink>
        {/* <div className="h-6 w-px bg-[#2D2E31]" /> */}

        <button
          className=" bg-white rounded-md text-black text-[14px] font-[600] flex items-center justify-center px-3 h-[33px] "
          onClick={() => setOpen(!open)}
          to=""
          end
        >
          Log in
        </button>
      </div>

      <Modal
        isOpen={open}
        maxwidth="w-full bg-[#090909] md:w-[440px]"
        title={
          <>
            <div className="flex justify-between items-center px-6 pt-6 pb-4">
              <h2 className="text-[18px] font-medium text-center w-full">
                connect or create wallet
              </h2>

              <button
                className=" p-1 rounded-full  bg-[#1c1b1b]"
                onClick={() => setOpen(false)}
              >
                <RxCross2 />
              </button>
            </div>
          </>
        }
        message={
          <>
            <div className="w-full max-w-[420px] rounded-2xl  text-white overflow-hidden">
              <div className="flex justify-center mb-4">
                <img
                  src={Logo}
                  alt="logo"
                  className="h-[50px] w-[50px] object-cover"
                />
              </div>

              <div className="px-6">
                <button className="w-full border border-[#545454] rounded-[18px] px-4 h-[60px] flex items-center justify-between text-[14px]">
                  <div className="flex items-center gap-3">
                    <span className="text-[18px]">
                      <FaRegUser fill="#9DA3AE" size={19} />
                    </span>
                    <div className="flex flex-col text-left  leading-tight">
                      <span className="font-[400] text-[14px]">
                        login with email or socials
                      </span>
                      <span className="text-[12px] text-[#9DA3AE]">
                        zero confirmation trading
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-[18px]
                  
                  "
                    onClick={() => setLogin(true)}
                  >
                    {" "}
                    <PiCaretRightLight />{" "}
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-4 px-6 my-4">
                <div className="flex-grow h-px bg-[#545454]"></div>
                <span className="text-[#545454] text-[14px]">or</span>
                <div className="flex-grow h-px bg-[#545454]"></div>
              </div>

              <div className="px-6 space-y-3 pb-6">
                {[
                  {
                    name: "MetaMask",
                    icon: "/icons/metamask.png",
                    image: Image,
                  },
                  {
                    name: "Phantom",
                    icon: "/icons/phantom.png",
                    image: Image1,
                  },
                  {
                    name: "Solflare",
                    icon: "/icons/solflare.png",
                    image: Image2,
                  },
                  { name: "Torus", icon: "/icons/torus.png", image: Image4 },
                  {
                    name: "Magic Eden",
                    icon: "/icons/magiceden.png",
                    image: Image3,
                  },
                  { name: "Ledger", icon: "/icons/ledger.png", image: Image },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full border border-[#545454] rounded-[19px] px-4 h-[50px] flex items-center gap-3 text-left text-[15px] hover:bg-[#222] transition"
                  >
                    <img src={item.image} alt={item.name} className="h-6 w-6" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        }
      />

      <Modal
        isOpen={login}
        maxwidth="w-full bg-[#090909] md:w-[440px]"
        title={
          <>
            <div className="flex justify-between items-center px-6 pt-6 pb-4">
              <h2 className="text-[18px] font-medium text-center w-full">
                Log in or sign up
              </h2>

              <button
                className=" p-1 rounded-full  bg-[#1c1b1b]"
                onClick={() => setLogin(false)}
              >
                <RxCross2 />
              </button>
            </div>
          </>
        }
        message={
          <>
            <div className="w-full max-w-[420px] rounded-2xl  text-white overflow-hidden">
              <div className="flex justify-center mb-4">
                <img
                  src={Logo}
                  alt="logo"
                  className="h-[50px] w-[50px] object-cover"
                />
              </div>

              <div className="px-6">
                <button className="w-full border border-[#545454] rounded-[18px] px-4 h-[50px] flex items-center justify-between text-[14px]">
                  <div className="flex items-center gap-3">
                    <span className="text-[18px]">
                      <FiMail size={20} />
                    </span>
                    <input
                      type="text"
                      placeholder=" your@email.com "
                      className=" placeholder-[#9DA3AE] outline-none bg-transparent "
                    />
                  </div>
                  <span className="text-[14px] font-[600] text-[#545454]">
                    Submit
                  </span>
                </button>
              </div>

              <div className="px-6 space-y-3 mt-3 pb-6">
                {[
                  {
                    name: "Google",

                    image: <FcGoogle size={22} />,
                  },
                  {
                    name: "Phantom",

                    image: <BsTwitterX size={22} />,
                  },
                  {
                    name: "Solflare",

                    image: <ImAppleinc size={22} />,
                  },
                  { name: "Torus", image: <HiMiniWallet size={22} /> },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full border border-[#545454] rounded-[19px] px-4 h-[50px] flex items-center gap-3 text-left text-[15px] hover:bg-[#222] transition"
                  >
                    <span>{item.image}</span>

                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              <div className="text-center font-[400] text-[14px] ">
                Protected by <span className=" font-extrabold text-[15px]">Privy</span>
              </div>
            </div>
          </>
        }
      />
    </header>
  );
}
