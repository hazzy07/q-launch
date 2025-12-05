import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { NavLink, Outlet } from "react-router-dom";
import Modal from "../ReuseableComponent/Modal";

export default function Layout() {
  const [cookieVisible, setCookieVisible] = useState(true);
  const [open, setOpen] = useState(false);

useEffect(() => {
  const shown = localStorage.getItem("modalSeen");
  const cookie = localStorage.getItem("cookieSeen");

  if (!shown) {
    setOpen(true);
    localStorage.setItem("modalSeen", "true");
  }

  if (!cookie) {
    setCookieVisible(true);
  } else {
    setCookieVisible(false);
  }
}, []);

const handleCookieAccept = () => {
  localStorage.setItem("cookieSeen", "true");
  setCookieVisible(false);
};



  return (
    <>
      <div className="">
        <Sidebar />
        <div className="flex flex-col mb-5 justify-center transition-all lg:mb-7 duration-300 lg:mt-[73px]">
          <main className="px-6 relative">
            <Header />
            <Outlet />
          </main>
        </div>
      </div>

      {cookieVisible && (
        <div className="fixed bg-[#151515] z-[200] bottom-0 left-0 flex items-center p-5 justify-center right-0">
          <div className="text-center">
            <h3 className="text-[18px] font-[500] text-[#CACACA]">Cookie settings</h3>
            <p className="text-[12px] mt-3 font-[400] text-[#CACACA]">
              We use cookies to provide you with the best possible experience.
            </p>

            <div className="flex gap-3 justify-center my-3 items-center">
              <button
                // onClick={() => setCookieVisible(false)}
                onClick={handleCookieAccept}
                className="bg-white rounded-md text-black text-[14px] font-[600] flex items-center justify-center px-3 h-[38px]"
              >
                Accept All
              </button>

              <button
                // onClick={() => setCookieVisible(false)}
                onClick={handleCookieAccept}
                className="bg-[#090909] rounded-md text-white text-[14px] font-[400] flex items-center justify-center px-3 h-[38px]"
              >
                Accept Selection
              </button>

              <button
                // onClick={() => setCookieVisible(false)}
                onClick={handleCookieAccept}
                className="bg-[#090909] rounded-md text-white text-[14px] font-[400] flex items-center justify-center px-3 h-[38px]"
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={open}
        maxwidth="w-full md:w-[540px]"
        message={
          <>
            <div className="text-center">
              <h3>How it works</h3>

              <p className="whitespace-nowrap mt-2 text-[14px] font-[400]">
                Launch allows <span className="text-[#93C5FD]">anyone</span> to create coins. all coins created on Launch are fair
              </p>

              <p className="text-[14px] font-[400]">
                launch, meaning everyone has equal access to buy and sell when the coin is first created.
              </p>

              <p className="text-[14px] text-[#D1D5DB] mt-3 font-[700]">
                Step 1:
                <span className="text-[14px] font-[400]"> pick a coin that you like</span>
              </p>

              <p className="text-[14px] text-[#D1D5DB] mt-3 font-[700]">
                Step 2:
                <span className="text-[14px] font-[400]"> buy the coin on the bonding curve</span>
              </p>

              <p className="text-[14px] text-[#D1D5DB] mt-3 font-[700]">
                Step 3:
                <span className="text-[14px] font-[400]"> sell at any time to lock in your profits or losses</span>
              </p>

              <p className="text-[14px] my-3 font-[400]">
                By clicking this button, you agree to the terms and conditions and certify that you are over 18 years old
              </p>

              <button
                className="bg-[#fff] h-[40px] mt-2 w-full rounded-lg text-black text-[14px] font-[400]"
                onClick={() => setOpen(false)}
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
