import { IoArrowBack } from "react-icons/io5";
import { User, SOL } from "../assets/AssetsRoute/homeAssests";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [tab, setTab] = useState("balances");

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className=" flex justify-center items-center ">
      <div className=" min-w-[800px] text-white p-4 space-y-6">
        <button onClick={goBack} className="text-white">
          <IoArrowBack size={22} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-[55px] h-[55px] rounded-full overflow-hidden">
            <img src={User} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-[600] text-[20px]">Ai8DZt</p>

            <div className="flex gap-2 text-[12px] items-center text-[#9CA3AF] ">
              <span className="  bg-[#FFFFFF0D] px-4 py-1 rounded-md ">
                Ai8Dz...DHNB
              </span>
              <span className=" cursor-pointer">View on solscan</span>
            </div>
          </div>

          <button className="ml-auto bg-[#1A1A1A] text-[14px] font-[700] px-5 py-2 rounded">
            edit
          </button>
        </div>
        <div className="flex gap-6 text-center text-[14px]">
          <div>
            <p className="font-[600]">0</p>
            <p className="text-gray-400">Followers</p>
          </div>
          <div>
            <p className="font-[600]">0</p>
            <p className="text-gray-400">Following</p>
          </div>
          <div>
            <p className="font-[600]">0</p>
            <p className="text-gray-400">Created coins</p>
          </div>
        </div>
        <div className="flex border-b border-gray-800 text-[14px]">
          <button
            onClick={() => setTab("balances")}
            className={`px-4 py-2 font-[600] ${
              tab === "balances"
                ? "text-white border-b-2 border-white"
                : "text-gray-400"
            }`}
          >
            Balances
          </button>

          <button
            onClick={() => setTab("replies")}
            className={`px-4 py-2 font-[600] ${
              tab === "replies"
                ? "text-white border-b-2 border-white"
                : "text-gray-400"
            }`}
          >
            Replies
          </button>

          <button
            onClick={() => setTab("notifications")}
            className={`px-4 py-2 font-[600] ${
              tab === "notifications"
                ? "text-white border-b-2 border-white"
                : "text-gray-400"
            }`}
          >
            Notifications
          </button>
        </div>
        {/* tab content */}
        <div className="mt-4 text-[14px]">
          {tab === "balances" && (
            <div>
              <div className="flex justify-between text-[#6B7280] text-[14px] px-2">
                <span>Coins</span>
                <span>MCAP</span>
                <span>Value</span>
              </div>
              <div className="flex items-center justify-between px-2 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                    <img src={SOL} alt="" className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold ">Solana balance</p>
                    <p className=" text-[12px] font-[400] text-[#6B7280] ">
                      kjhg789..
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-10 text-[14px]">
                  <p className="text-gray-400">0 SOL</p>
                  <p className="text-gray-400">$0</p>
                </div>
              </div>
            </div>
          )}

          {tab === "replies" && <div>Replies content here</div>}

          {tab === "notifications" && <div>Notifications content here</div>}
        </div>
      </div>
    </div>
  );
}
