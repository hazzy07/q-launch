import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaArrowDownWideShort } from "react-icons/fa6";
import {User} from "../../assets/AssetsRoute/homeAssests"
export default function CommentTabs() {
  const [tab, setTab] = useState("comments");

  const comments = [
    { user: "Ct145", time: "2d", text: "heyyy", likes:1 },
    { user: "Ct145", time: "2d", text: "hey", likes:1 },
    { user: "Ct145", time: "2d", text: "hey", likes:1 },
    { user: "RGRMMX", time: "3d", text: "iam hard fam launching fig we", likes:1 },
    { user: "bamm", time: "4d", text: "W DAY", likes:1 },
    { user: "7rym90", time: "5d", text: "great buy signal", likes:1 },
    { user: "andrtoms1", time: "4d", text: "Shalom Coin", likes:1},
    {
      user: "vpdi",
      time: "5d",
      text: "a noel is going to be the top 1b Mc on binance.",
      likes:1
    },
    {
      user: "Wbtopsy",
      time: "5d",
      text: "SPREAD HOPE. HELP PEOPLE. THIS IS FTP &lt;3",
      likes:1
    },
    { user: "onrya324", time: "6d", text: "bullish asf", likes:1 },
    { user: "thefuture", time: "6d", text: "dont hold", likes:1 },
  ];

  return (
    <div className=" bg-[#090909BF] border-2 border-[#171717] mt-5 text-white rounded-2xl">
      <div className="flex px-4 gap-9  border-b border-gray-700">
        <button
          onClick={() => setTab("comments")}
          className={`py-4 text-[14px] font-[600] ${
            tab === "comments" ? "border-b-2  border-white" : "text-gray-400"
          }`}
        >
          Comments
        </button>
        <button
          onClick={() => setTab("trades")}
          className={` py-4 text-[14px] font-[600] ${
            tab === "trades" ? "border-b-2 border-white" : "text-gray-400"
          }`}
        >
          Trades
        </button>
      </div>

      {tab === "comments" && (
        <div className="mt-3 p-3">
          <div className="items-center mb-3 flex gap-4 ">
            <img src={User} alt="" className=" w-[40px] h-[40px] rounded-full " />
            <input
              type="text"
              name=""
              id=""
              className=" bg-[#FFFFFF0A] border border-[#2F3036] rounded-lg pl-2 flex-1 text-[14px] font-[600] h-[40px] "
              placeholder="add Comment"
            />

            <button className=" flex items-center gap-2 bg-[#FFFFFF0A] border border-[#2F3036] rounded-lg px-3 h-[40px] ">
              <FaArrowDownWideShort fill="#A1A1AA" />
              Newest
            </button>
          </div>
          {comments.map((c, i) => (
            <div
              key={i}
              className="flex items-start justify-between  p-3 rounded-xl"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={User}
                  alt=""
                  className=" w-[40px] h-[40px] rounded-full "
                />

                <div>
                  <p className="font-semibold text-[12px]">
                    {c.user}{" "}
                    <span className="text-gray-500 pl-3 text-xs">{c.time}</span>
                  </p>
                  <p className="text-[12px]">{c.text}</p>
                  <p className="text-gray-500 text-xs">reply</p>
                </div>
              </div>
              <div className="text-gray-500 text-[12px]">
                <FiHeart size={19} />
                <p className=" pl-2 pt-1 ">
                  {c.likes}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "trades" && (
        <div className="mt-4 px-3 pb-4 text-gray-400 text-sm">
          <p>No trades data available.</p>
        </div>
      )}
    </div>
  );
}
