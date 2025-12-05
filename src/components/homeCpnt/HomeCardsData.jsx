import React from "react";
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
  Logo,
  Home11Assets,
  Home12Assets,
  Home13Assets,
  Home14Assets,
  Home15Assets,
  Home16Assets,
  Home17Assets,
  Home18Assets,
} from "../../assets/AssetsRoute/homeAssests";
import { MdDescription } from "react-icons/md";

export default function HomeCardsData() {
  const TopData = [
    {
      image: Home1Assets,
      title: " South Park Sucks Now",
      titleDescip: "(SPSN)",
      marketCap: "$21.2M",
      reply: "508",
      description: "New South Park Episode Takes Aim at Memecoins",
    },
    {
      image: Home2Assets,
      title: " South Park Sucks Now",
      titleDescip: "(SPSN)",
      marketCap: "$21.2M",
      reply: "508",
      description:
        "AI Companies Access High-Quality Data Through Lumen’s Platform",
    },
    {
      image: Home3Assets,
      title: " South Park Sucks Now",
      titleDescip: "(SPSN)",
      marketCap: "$21.2M",
      reply: "508",
      description: "New AI Home Robot Captures the Internet’s Attention",
    },
    {
      image: Home4Assets,
      title: " South Park Sucks Now",
      titleDescip: "(SPSN)",
      marketCap: "$21.2M",
      reply: "508",
      description: "Chill House De-Rugs After Getting in Bed with Base",
    },

    {
      image: Home5Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description:
        "Neet Proves Unemployment Could Be the Move After New All-Time High",
    },

    {
      image: Home5Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description:
        "Neet Proves Unemployment Could Be the Move After New All-Time High",
    },

    {
      image: Home5Assets,
      title: "NotInEmploymentEduc…",
      titleDescip: "(neet)",
      marketCap: "$21.2M",
      reply: "508",
      description:
        "Neet Proves Unemployment Could Be the Move After New All-Time High",
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
      <h1 className=" text-[16px] mt-5 font-[600] ">Now trending</h1>

      <div className=" overflow-x-auto no-scrollbar ">
        <div className="flex gap-4 mt-4 items-center ">
          {TopData.map((item, i) => (
            <>
              <div
                key={i}
                className="w-72 cursor-pointer space-y-1 flex-none "
                onClick={() => handleCardClick(item)}
              >
                <div className="flex gap-2 p-2 rounded-lg border-2 bg-[#090909] border-[#171717]">
                  <img
                    src={item.image}
                    className=" w-[72px] h-[72px] rounded-lg object-cover "
                  />
                  <div>
                    <h2 className="text-[14px] font-[700] ">{item.title}</h2>
                    <h2 className="text-[14px] font-[700] ">
                      {item.titleDescip}
                    </h2>
                    <p className=" text-[12px] font-[600] ">
                      {" "}
                      market cap:{" "}
                      <span className="font-[400] text-[#9DA3AE]">
                        {" "}
                        {item.marketCap}
                      </span>{" "}
                    </p>
                    <p className=" text-[12px] font-[400] text-[#9DA3AE]">
                      {" "}
                      replies: {item.reply}{" "}
                    </p>
                  </div>
                </div>
                <p className="font-[600] mt-3 text-[14px]">
                  {item.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
