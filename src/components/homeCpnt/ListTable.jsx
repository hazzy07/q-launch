import React from "react";
import { FaRegStar } from "react-icons/fa";
import MiniGraph from "../ReuseableComponent/MiniGraph";
export default function ListTable() {
  const data = [
    {
      id: 1,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      ath: "$259.7K",
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 2,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      ath: "$259.7K",
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 3,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      ath: "$259.7K",
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 4,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      ath: "$259.7K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 5,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      ath: "$259.7K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 6,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      ath: "$259.7K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 7,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      ath: "$259.7K",
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 8,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      ath: "$259.7K",
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 9,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      ath: "$259.7K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 10,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      ath: "$259.7K",
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },

    {
      id: 11,
      name: "Costco Hotdog Stablecoin",
      mcap: "$66.59K",
      data: [5, 6, 7, 6, 8, 4, 7, 5, 7, 9, 6, 5,7, 8, 6, 8],
      ath: "$259.7K",
      age: "2d",
      txns: "2,004",
      vol: "$161.40K",
      traders: "555",
      m5: "-8.64%",
      h1: "+32.18%",
      h6: "+69.52%",
      h24: "-29.30%",
      icon: "",
    },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar bg-black text-white">
      <table className="w-full min-w-[1400px] border-collapse">
        <thead>
          <tr className="bg-[#111] text-[12px] ">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Coin</th>
            <th className="p-3 text-left">Graph</th>
            <th className="p-3 text-left">MCAP</th>
            <th className="p-3 text-left">ATH</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">TXNS</th>
            <th className="p-3 text-left">24H Vol</th>
            <th className="p-3 text-left">Traders</th>
            <th className="p-3 text-left">5M</th>
            <th className="p-3 text-left">1H</th>
            <th className="p-3 text-left">6H</th>
            <th className="p-3 text-left">24H</th>
            <th className="p-3"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-[#222]">
              <td className="p-3 text-[12px]">#{row.id}</td>

              <td className="p-3">
                <div className="flex text-[12px] items-center gap-3">
                  <img
                    src={row.icon}
                    alt=""
                    className="w-7 h-7 rounded-full bg-gray-700"
                  />
                  {row.name}
                </div>
              </td>

              <td className="w-32 p-3 h-7 flex text-[12px]  rounded">
                <MiniGraph data={row.data} />
              </td>

              <td className="p-3 text-[12px]">{row.mcap}</td>
              <td className="p-3 text-[12px]">{row.ath}</td>
              <td className="p-3 text-[12px]">{row.age}</td>
              <td className="p-3 text-[12px]">{row.txns}</td>
              <td className="p-3 text-[12px]">{row.vol}</td>
              <td className="p-3 text-[12px]">{row.traders}</td>

              <td
                className={`p-3 text-[12px] ${
                  row.m5.startsWith("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {row.m5}
              </td>

              <td
                className={`p-3 text-[12px] ${
                  row.h1.startsWith("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {row.h1}
              </td>

              <td
                className={`p-3 text-[12px] ${
                  row.h6.startsWith("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {row.h6}
              </td>

              <td
                className={`p-3 text-[12px] ${
                  row.h24.startsWith("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {row.h24}
              </td>

              <td className="p-3 text-gray-500 cursor-pointer hover:text-white">
                <FaRegStar size={18} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
