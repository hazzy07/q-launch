import { AiOutlineSliders } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
export default function FeatureCards() {
  const previous = [
    {
      title: "SFTP - 11/2 - SUNDAY EVENT AT MAR...",
      time: "11:59:44",
      day: "1d ago",
    },
    { title: "Stream on Nov 2, 2025", time: "11:59:50", day: "1d ago" },
    { title: "Stream on Nov 1, 2025", time: "11:59:49", day: "1d ago" },
    { title: "Stream on Nov 1, 2025", time: "11:59:51", day: "2d ago" },
    { title: "Stream on Nov 1, 2025", time: "11:59:51", day: "2d ago" },
    { title: "Stream on Nov 1, 2025", time: "11:59:51", day: "2d ago" },
  ];

  const clips = [
    { title: "Clipped on Nov 3, 2025", time: "1:36", day: "today" },
    { title: "Clipped on Nov 3, 2025", time: "0:40", day: "today" },
    { title: "Clipped on Nov 3, 2025", time: "0:18", day: "today" },
    { title: "Clipped on Nov 3, 2025", time: "0:10", day: "today" },
    { title: "Clipped on Nov 3, 2025", time: "1:36", day: "today" },
    { title: "Clipped on Nov 3, 2025", time: "0:40", day: "today" },
    { title: "Clipped on Nov 3, 2025", time: "0:18", day: "today" },
    { title: "Clipped on Nov 3, 2025", time: "0:10", day: "today" },
  ];

  return (
    <div className="w-full bg-black text-white mt-5 space-y-8">
      <div className="grid grid-cols-5 gap-2 text-center text-sm">
        <div className="h-[66px] flex justify-center items-center flex-col text-[14px] rounded-lg border-2 border-[#171717] bg-[#090909BF] ">
          <p className="text-gray-400">Vol 24h</p>
          <p className="text-white">$60.6K</p>
        </div>
        <div className="h-[66px] flex justify-center items-center flex-col text-[14px] rounded-lg border-2 border-[#171717] bg-[#090909BF] ">
          <p className="text-gray-400">Price</p>
          <p className="text-white">$0.00170042</p>
        </div>
        <div className="h-[66px] flex justify-center items-center flex-col text-[14px] rounded-lg border-2 border-[#171717] bg-[#090909BF] ">
          <p className="text-gray-400">5m</p>
          <p className="text-green-400">+0.13%</p>
        </div>
        <div className="h-[66px] flex justify-center items-center flex-col text-[14px] rounded-lg border-2 border-[#171717] bg-[#090909BF] ">
          <p className="text-gray-400">1h</p>
          <p className="text-red-400">-0.19%</p>
        </div>
        <div className="h-[66px] flex justify-center items-center flex-col text-[14px] rounded-lg border-2 border-[#171717] bg-[#090909BF] ">
          <p className="text-gray-400">1h</p>
          <p className="text-red-400">-0.19%</p>
        </div>
      </div>

      <Section title="Previous streams" items={previous} />
      <Section title="Featured clips" items={clips} />

      <div className="bg-[#090909BF] border border-[#171717] p-4 rounded-2xl text-sm ">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-2 space-x-2">
            <button className="px-3 flex items-center gap-2  py-[7px] font-[600] border-2 border-[#171717] bg-black rounded-md">
              <AiOutlineGlobal size={18} />
              ftpnsol
            </button>
            <button className="px-3 flex items-center gap-2  py-[7px] border-2 font-[600] border-[#171717] bg-black rounded-md">
              <BsTwitterX />
              ftpnsol.net
            </button>
          </div>
          <div className="text-[#9CA3AF] flex items-center gap-2 text-[12px] font-[600] ">
            <button className="flex items-center gap-2 border-none ">
              View on Advanced <AiOutlineSliders size={20} />
            </button>

            <button className="flex items-center gap-2 border-none ">
              Trade on MEXC <BsBoxArrowUpRight size={12} />
            </button>
          </div>
        </div>
        <button className="text-[#D1D5DB] mt-3 text-[14px]">
          SFTP turns every trade creator rewards into meals for people across
          Los Angeles and Worldwide. We livestream every drop so more.
        </button>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-400">see all</p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-3">
          {items.map((item, i) => (
            <div key={i} className="w-56 space-y-1 flex-none">
              <div className="bg-gray-800 rounded-lg">
                <video
                  src={item.video}
                  className="h-full w-full rounded-lg object-cover"
                  controls
                />
              </div>
              <p className="text-xs text-white">{item.title}</p>
              <p className="text-gray-400 text-xs">{item.day}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
