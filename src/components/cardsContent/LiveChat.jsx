import { useState } from "react";
import Accordian from "../ReuseableComponent/Accordian";
import { LuSend } from "react-icons/lu";
import { User, SOL, Feed } from "../../assets/AssetsRoute/homeAssests";
import { IoReturnDownForward } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";

export default function LiveChat() {
  const [messages, setMessages] = useState([
    {
      color: "text-[#52E0D9]",
      time: "06:00",
      user: "thugs666",
      text: "this goes quick wow cause they start around 1:30",
      image: User,
    },
    {
      color: "text-[#52E0D9]",
      time: "06:00",
      user: "thugs666",
      text: "mic is off btw",
      image: User,
    },
    {
      color: "text-[#E06E52]",
      time: "06:00",
      user: "launchn",
      text: "it felt waaaay more of the lines we had",
      image: User,
    },
    {
      color: "text-[#E06E52]",
      time: "06:00",
      user: "launchn",
      text: "good night yall o/",
      image: User,
    },
    {
      color: "text-[#E06E52]",
      time: "06:00",
      user: "launchn",
      text: "safe drivin",
      image: User,
    },
  ]);

  const [input, setInput] = useState("");

  // send logic
  function sendMessage() {
    if (!input.trim()) return;

    const newMessage = {
      user: "You",
      text: input,
      time: "now",
      color: "text-[#00FF00]",
      self: true,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  }

  return (
    <div className=" flex flex-col gap-4">
      <div className="border-2 rounded-lg border-[#212329]">
        <Accordian
          title={<span className="">Live Chat</span>}
          className="justify-between p-4 text-[14px] font-[600] "
          children={
            <>
              {/* Chat section */}
              <div className="rounded-lg p-3 pt-0 flex flex-col h-[500px] no-scrollbar overflow-y-auto">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-center mb-3 ${
                      msg.self ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!msg.self && (
                      <img
                        src={msg.image}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full object-cover mr-2"
                      />
                    )}

                    <div
                      className={`rounded-lg px-4 py-2 bg-[#0D0D0D] max-w-[220px] ${
                        msg.self ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-[600] text-[12px] ${msg.color}`}>
                          {msg.user}
                        </span>
                        <span>
                          <IoReturnDownForward size={17} />
                        </span>
                      </div>

                      <p className="text-[14px] break-words">{msg.text}</p>
                      <p className="text-[7px] mt-1">{msg.time}</p>
                    </div>

                    {msg.self && (
                      <span className=" rounded-full w-9 flex justify-center items-center h-9 bg-[#b66acbe6] ">
                        U
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat input */}
              <div className="flex p-3 items-center bg-[#191919] gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Write a message..."
                  className="flex-grow bg-[#0A0A0A] rounded-lg px-3 h-[41px] text-sm outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="bg-[#fff] text-black w-[40px] h-[40px] flex items-center justify-center rounded-full text-sm"
                >
                  <LuSend size={20} />
                </button>
              </div>
            </>
          }
        />
      </div>

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
        <p className="text-[12px] mt-2 text-[#9BA2AE]"> Get mobile app for coin notifications </p>
      </div>
    </div>
  );
}
