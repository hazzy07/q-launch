import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { RiLiveLine } from "react-icons/ri";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { Logo } from "../../assets/AssetsRoute/homeAssests";
import { GoSidebarExpand } from "react-icons/go";
import { BiCandles } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { PiTiktokLogoFill } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Modal from "../ReuseableComponent/Modal";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [moreContainer, setMoreContainer] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const data = [
    { label: "Home", icon: <GoHomeFill size={29} />, route: "/" },
    {
      label: "LiveStreams",
      icon: <RiLiveLine size={29} />,
      route: "/liveStream",
    },
    { label: "Advanced", icon: <BiCandles size={29} />, route: "/terminal" },
    {
      label: "Chat",
      icon: <HiOutlineChatBubbleOvalLeft size={29} />,
      route: "/chat",
    },
    {
      label: "Profile",
      icon: <MdOutlineAccountCircle size={29} />,
      route: "/profile",
    },
    {
      label: "Support",
      icon: <TfiHeadphoneAlt size={28} />,
      route: "/support",
    },
  ];

  return (
    <>
      {/* ==== Mobile view ===== */}
      <div className="lg:hidden w-full h-[60px] flex items-center justify-between bg-[black] text-white px-4 font-inter">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
          className="focus:outline-none"
        >
          <FiMenu size={26} />
        </button>

        <div className="flex items-center">
          <FiSearch />
          <NavLink to="/" end>
            <span className="text-[14px] font-[400] text-black bg-white rounded-md py-1 px-3 ml-3">
              Create Coin
            </span>
          </NavLink>
        </div>
      </div>

      {/* ====desktop view ===== */}
      <div
        className={`fixed top-0 left-0 border-r border-[#2D2E31] bg-black h-screen  flex flex-col transition-all duration-300 z-[100]
      ${open ? "translate-x-0" : "-translate-x-full"}
      w-full
      lg:translate-x-0 
      ${collapse ? "lg:w-[55px] pl-[2px] " : "lg:w-[220px]"}`}
      >
        <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-slate-700 font-inter">
          <h2 className="text-lg font-semibold">QLaunch</h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="focus:outline-none"
          >
            <FiX size={25} />
          </button>
        </div>

        <div className="flex flex-col flex-grow p-2 overflow-y-auto no-scrollbar">
          <div
            className={` flex items-center mb-3 px-2 justify-between ${
              collapse ? "flex-col gap-3" : " flex-row"
            } `}
          >
            <NavLink
              to="/"
              end
              className="hidden lg:flex items-center ml-1 gap-3 pt-3 mb-2 font-inter text-2xl font-[500] text-center"
            >
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <span
                className={`${collapse ? "hidden" : ""} text-[15px] font-[700]`}
              >
                QLaunch
              </span>
            </NavLink>

            <button
              onClick={() => {
                const newState = !collapse;
                setCollapse(newState);
                if (newState) {
                  document.body.classList.add("sidebar-collapsed");
                } else {
                  document.body.classList.remove("sidebar-collapsed");
                }
              }}
              aria-label="Toggle collapse"
              className="hidden lg:block focus:outline-none"
            >
              <GoSidebarExpand size={18} />
            </button>
          </div>

          <nav className={`flex flex-col gap-[5px] px-2 font-inter text-sm `}>
            {data.map((item) => (
              <NavLink
                key={item.route}
                to={item.route}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-md transition-all duration-300 
              ${
                isActive
                  ? "bg-[#1B1B1B] text-white border-l-4 border-white lg:border-l-0"
                  : "hover:bg-[#2D2E31]"
              }  
                  
                  ${
                    collapse
                      ? "lg:h-[35px] p-2 lg:w-[35px] lg:justify-center"
                      : " p-2 "
                  } `
                }
              >
                <div className="flex justify-center w-[24px]">{item.icon}</div>
                <span
                  className={`${
                    collapse ? "lg:hidden" : ""
                  } text-[14px] font-[600] `}
                >
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>

          <div>
            <div
              className={`flex relative items-center my-2 gap-3  cursor-pointer 
                  
                  ${
                    collapse
                      ? "lg:justify-center font-bold"
                      : " p-2"
                  }  `}
              onClick={() => setMoreContainer(!moreContainer)}
            >
              <HiDotsVertical  size={26} />
              <span
                className={`${
                  collapse ? " lg:hidden" : ""
                } text-[14px] font-[600]  `}
              >
                More
              </span>
            </div>
            {moreContainer && (
              <>
                <div className="p-4 text-[14px] w-[210px] font-[500] fixed left-4 bg-[#2b313b] rounded-md  ">
                  <ul>
                    <li className=" pb-3 ">
                      <a href="/swap" className="hover:underline ">PumpSwap</a>
                    </li>
                    <li className=" pb-3 ">
                      <NavLink
                        to="/moderation-policy"
                        className="hover:underline "
                      >
                        Livestream policy
                      </NavLink>
                    </li>
                    <li className=" pb-3 ">
                      <NavLink
                        to="/dmca-guidelines"
                        className="hover:underline "
                      >
                        DMCA policy
                      </NavLink>
                    </li>

                    <li className=" pb-3 ">
                      <NavLink to="/trademark-guidline" className="hover:underline ">
                        Trademark guidelines
                      </NavLink>
                    </li>
                    <li className=" pb-4 ">
                      <button
                        onClick={() => setModalOpen(true)}
                        className="hover:underline "
                      >
                        How it works
                      </button>
                    </li>
                  </ul>

                  <div className="border-t flex items-center gap-2 pt-4 border-[#4f566282] ">
                    <a href="https://x.com/" className="">
                      <FaXTwitter size={14} />
                    </a>
                    <a href="https://www.instagram.com/" className="">
                      <BsInstagram size={14} />
                    </a>
                    <a href="https://www.tiktok.com/" className="">
                      <PiTiktokLogoFill size={15} />
                    </a>
                    <a href="https://www.youtube.com/" className="">
                      <FaYoutube size={15} />
                    </a>
                  </div>
                </div>
              </>
            )}

            <NavLink to="/create-coin" className=" bg-white mt-1 flex justify-center items-center text-[14px] font-[600] text-black w-full rounded-lg py-[10px] ">
              {collapse ? <FaPlus /> : "Create coin"}
            </NavLink>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        maxwidth="w-full md:w-[540px]"
        message={
          <>
            <div className="text-center">
              <h3>How it works</h3>

              <p className="whitespace-nowrap mt-2 text-[14px] font-[400]">
                Launch allows <span className="text-[#93C5FD]">anyone</span> to
                create coins. all coins created on Launch are fair
              </p>

              <p className="text-[14px] font-[400]">
                launch, meaning everyone has equal access to buy and sell when
                the coin is first created.
              </p>

              <p className="text-[14px] text-[#D1D5DB] mt-3 font-[700]">
                Step 1:
                <span className="text-[14px] font-[400]">
                  {" "}
                  pick a coin that you like
                </span>
              </p>

              <p className="text-[14px] text-[#D1D5DB] mt-3 font-[700]">
                Step 2:
                <span className="text-[14px] font-[400]">
                  {" "}
                  buy the coin on the bonding curve
                </span>
              </p>

              <p className="text-[14px] text-[#D1D5DB] mt-3 font-[700]">
                Step 3:
                <span className="text-[14px] font-[400]">
                  {" "}
                  sell at any time to lock in your profits or losses
                </span>
              </p>

              <p className="text-[14px] my-3 font-[400]">
                By clicking this button, you agree to the terms and conditions
                and certify that you are over 18 years old
              </p>

              <button
                className="bg-[#fff] h-[40px] mt-2 w-full rounded-lg text-black text-[14px] font-[400]"
                onClick={() => setModalOpen(false)}
              >
                I'm ready to launch
              </button>

              <div className="flex justify-center gap-3 items-center mt-4 text-[14px] font-[400] text-[#D1D5DB]">
                <NavLink>Privacy policy</NavLink>
                <div className="h-[15px] bg-[#d1d5db76] w-px"></div>
                <NavLink>Terms of service</NavLink>
                <div className="h-[15px] bg-[#d1d5db76] w-px"></div>
                <NavLink>Fees</NavLink>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
