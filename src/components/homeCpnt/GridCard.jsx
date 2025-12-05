import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home1Assets,
  Home2Assets,
  Home3Assets,
  Home4Assets,
  Home5Assets,
  Home6Assets,
  Home7Assets,
  Home8Assets,
  Home9Assets,
  Home11Assets,
  Home12Assets,
  Home13Assets,
  Home14Assets,
  Home15Assets,
  Home16Assets,
  Home17Assets,
  Home18Assets,
  MiniIcon,
} from "../../assets/AssetsRoute/homeAssests";
import Dropdown from "../ReuseableComponent/Dropdown";
import ToggleBtn from "../ReuseableComponent/ToggleBtn";
import { FiFilter } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import ListTable from "../homeCpnt/ListTable";

export default function GridCard() {
  const [activeTab, setActiveTab] = useState("grid");
  const [filter, setFilter] = useState(false);
  const [mcapMax, setMcapMax] = useState(50000000);
  const [volMin, setVolMin] = useState(0);

  const countryOptions = [
    { label: "Pakistan" },
    { label: "India" },
    { label: "United Kingdom" },
  ];

  const TopData = [
    {
      image: Home1Assets,
      title: " South Park Sucks Now",
      titleDescip: "(Park)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },
    {
      image: Home2Assets,
      title: " South Park Sucks Now",
      titleDescip: "(SPSN)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },
    {
      image: Home3Assets,
      title: " South Park Sucks Now",
      titleDescip: "(SPSN)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },
    {
      image: Home4Assets,
      title: " South Park Sucks Now",
      titleDescip: "(SPSN)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },

    {
      image: Home5Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },

    {
      image: Home6Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "celebrate christmas of a blank though",
    },
    {
      image: Home7Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },
    {
      image: Home8Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },
    {
      image: Home9Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "celebrate christmas a blank though",
    },
    {
      image: Home11Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "celebrate lots of jizz make sure though",
    },

    {
      image: Home12Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "celebrate christmas ",
    },

    {
      image: Home13Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "celebrate of jizz make sure not to shoot a blank though",
    },

    {
      image: Home14Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },
    {
      image: Home15Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description:
        "celebrate christmas with lots of jizz make sure not to though",
    },
    {
      image: Home17Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description:
        "celebrate christmas with lots of jizz make sure not to shoot a blank though",
    },
    {
      image: Home18Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "celebrate christmas with make ",
    },

    {
      image: Home16Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description: "",
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = (stream) => {
    navigate("/home-card-component", {
      state: {
        id: stream.id,
        title: stream.title,
        image: stream.image,
      },
    });
  };

  return (
    <>
      {/* ==== Cards Bar ===== */}

      <div className="flex mt-10 mb-3 justify-between items-center">
        {/* ==== Left side */}
        <div className="flex items-center">
          <Dropdown label={<>Featured 🔥 </>} options={countryOptions} />

          <div className="px-3 flex gap-4 items-center">
            <ToggleBtn label={" Nsfw "} defaultSet={false} />
            <ToggleBtn label={" Animation "} />
          </div>
        </div>
        {/* ==== Right side */}

        <div className="flex gap-3">
          <button
            onClick={() => setFilter(!filter)}
            className="border border-[#ffffff4f] text-[14px] rounded-lg px-3 py-[5px] flex items-center gap-2 "
          >
            <span>Filter</span>
            <FiFilter />
          </button>

          <div className="bg-[#181616] rounded">
            <button
              className={`px-3 py-[10px] rounded ${
                activeTab === "grid" ? "border bg-white text-black" : ""
              }`}
              onClick={() => setActiveTab("grid")}
            >
              <FiGrid />
            </button>

            <button
              className={`px-3 py-[10px]   rounded ${
                activeTab === "list"
                  ? "border bg-white text-black border-black"
                  : ""
              }`}
              onClick={() => setActiveTab("list")}
            >
              <TfiMenuAlt />
            </button>
          </div>

          {/* === Filter button content === */}
          {filter && (
            <>
              <div className="w-[380px] absolute right-7 mt-10 bg-[#171717] p-4 rounded-lg text-white text-sm">
                {/* Mcap */}
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Mcap</span>
                    <span>$1.0K, $50.0M+</span>
                  </div>

                  {/* Range slider */}

                  <input
                    type="range"
                    min="1000"
                    max="50000000"
                    value={mcapMax}
                    onChange={(e) => setMcapMax(Number(e.target.value))}
                    className="w-full accent-green-400 mt-2"
                  />

                  <div className="flex justify-between text-gray-400 text-[12px] mt-1">
                    <span>$1.0K</span>
                    <span>$50.0M+</span>
                  </div>

                  {/* Inputs */}
                  <div className="flex gap-2 mt-3">
                    <input
                      type="text"
                      placeholder="e.g, 10k, 1m"
                      className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-[12px]"
                    />
                    <input
                      type="text"
                      placeholder="e.g, 10k, 1m"
                      className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-[12px]"
                    />
                  </div>
                </div>

                {/* 24h Vol */}
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">24h Vol</span>
                    <span>$0, $500.0K+</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="500000"
                    value={volMin}
                    onChange={(e) => setVolMin(Number(e.target.value))}
                    className="w-full accent-green-400"
                  />

                  <div className="flex justify-between text-gray-400 text-[12px] mt-1">
                    <span>$0</span>
                    <span>$500.0K+</span>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <input
                      type="text"
                      placeholder="e.g, 5k, 100k"
                      className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-[12px]"
                    />
                    <input
                      type="text"
                      placeholder="e.g, 5k, 100k"
                      className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-[12px]"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="w-1/2 bg-gray-700 text-white py-2 rounded">
                    Clear
                  </button>
                  <button className="w-1/2 bg-green-600 text-white py-2 rounded">
                    Apply
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ===== cards grid Structure ===== */}

      {activeTab === "grid" && (
        <div className={`grid gap-4 grid-cols-2  xl:grid-cols-4`}>
          {TopData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="flex gap-2 p-3 transform transition duration-75 hover:translate-y-2  rounded-lg  bg-[#090909]"
            >
              <img
                src={item.image}
                className="w-[161px] rounded-lg object-cover "
              />
              <div>
                <h2 className="text-[14px] font-[700] ">{item.title}</h2>
                <h2 className="text-[14px] text-[#9DA3AE] font-[500] ">
                  {item.titleDescip}
                </h2>
                <div className="flex items-center gap-1 ">
                  <img src={MiniIcon} className=" w-4 h-7 " alt="" />
                  <p className=" text-[12px] font-[600] text-[#9DA3AE]">
                    {item.marketCap}
                  </p>
                </div>

                <div className="flex text-[12px] text-[#9DA3AE] items-center gap-1">
                  <span>MC</span>
                  <span className=" text-[#fff] ">$13.99K</span>
                  <div className="w-[90px] h-[6px] bg-[#374151] rounded-full">
                    <div className="bg-[#fff] h-full w-[30px] rounded-full "></div>
                  </div>
                </div>

                <p className=" text-[12px] font-[400] text-[#9DA3AE]">
                  {" "}
                  replies: {item.reply}{" "}
                </p>
                <p className="font-[500] mt-2 text-[11px] text-[#9DA3AE]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ===== cards list Structure ===== */}

      {activeTab === "list" && <ListTable />}
    </>
  );
}
