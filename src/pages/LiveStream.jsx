import React, { useState } from "react";
import { RiVolumeMuteFill } from "react-icons/ri";

import {
  Second1,
  Second2,
  Second3,
  Second4,
  Second5,
  Second6,
  Second7,
  Second8,
  Second9,
  Second11,
  Second12,
  Second13,
  Second14,
  Second15,
} from "../assets/AssetsRoute/homeAssests";
import { useNavigate } from "react-router-dom";

export default function Livestream() {
  const [showNSFW, setShowNSFW] = useState(true); // state to track ON/OFF

  const sampleStreams = [
    {
      image: Second11,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
      nsfw: true,
    },
    {
      image: Second12,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second13,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second4,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second5,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
      nsfw: true,
    },
    {
      image: Second6,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second8,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second2,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
      nsfw: true,
    },
    {
      image: Second11,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second12,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second1,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
      nsfw: true,
    },
    {
      image: Second3,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second9,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second13,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
    },
    {
      image: Second14,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
      nsfw: true,
    },
    {
      image: Second15,
      id: "8h7694E7",
      title: "ovrexposed",
      logo: "q",
      price: "$32.8K",
      att: "$250.0K",
      nsfw: true,
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = (stream) => {
    navigate("/cardsContent", {
      state: {
        id: stream.id,
        title: stream.title,
        image: stream.image,
      },
    });
  };

  const filteredStreams = sampleStreams.filter(
    (stream) => showNSFW || !stream.nsfw
  );

  return (
    <div className="text-white">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Livestreams</h2>

        <div className=" flex items-center gap-3">
          <p className="text-[14px] font-[400]">Include nsfw:</p>
          <button
            className={`text-[14px] font-[400] ${
              showNSFW
                ? "text-black bg-white rounded-md px-1 py-1 "
                : "text-[#6B7280]"
            }`}
            onClick={() => setShowNSFW(true)}
          >
            ON
          </button>
          <button
            className={`text-[13px] font-[400] ${
              !showNSFW
                ? "text-black bg-white rounded-md px-1 py-1 "
                : "text-[#6B7280]"
            }`}
            onClick={() => setShowNSFW(false)}
          >
            OFF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {filteredStreams.map((stream, i) => (
          <div
            key={i}
            onClick={() => handleCardClick(stream)}
            className="cursor-pointer"
          >
            <div className="group rounded-lg bg-[#4B5563] h-[175px] w-full relative overflow-hidden">
              <img
                src={stream.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-in-out group-hover:opacity-0"
              />
              <span className="absolute bottom-4 right-4 flex transition-opacity opacity-0 duration-200 ease-in-out group-hover:opacity-100 justify-center items-center w-7 h-7 bg-[#3c3b3b] rounded-full">
                <RiVolumeMuteFill />
              </span>
            </div>

            <div className="p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <img
                    src={stream.image}
                    alt={stream.title}
                    className="object-cover w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-[14px] font-[700]">{stream.id}</p>
                    <p className="text-[12px] text-gray-400">{stream.title}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div>
                    <span className="text-[#9CA3AF] text-[13px] font-[400]">
                      mcap
                    </span>
                    <span className="bg-white text-black font-[700] text-[12px] rounded-md px-1 py-[2px]">
                      {stream.price}
                    </span>
                  </div>
                  <p className="text-[12px] font-[700]">
                    <span className="text-[#9CA3AF]">ATH</span> {stream.att}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
