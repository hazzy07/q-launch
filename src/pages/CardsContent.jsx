import { useLocation } from "react-router-dom";
import { FiEyeOff } from "react-icons/fi";
import { FaSearch, FaRegStar } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import TradingChart from "../components/ReuseableComponent/TradingChart";
import CommentTabs from "../components/cardsContent/CommentTabs";
import FeatureCards from "../components/cardsContent/FeatureCards";
import LiveChat from "../components/cardsContent/LiveChat";
export default function CardsContent() {
  const location = useLocation();
  const { title, image } = location.state || {}; // get data from navigation

  return (
    <div className="w-full text-[#F8FAFC] items-start xl:p-8 justify-center flex lg:gap-4">
      <div className="xl:flex-1 lg:max-w-[918px]">
        <div className="border-2 border-[#171717] p-3 rounded-lg flex items-center justify-between space-x-3 col-span-12">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt={title}
              className="w-[100px] h-[100px] rounded-lg object-cover"
            />
            <div>
              <h2 className="text-[20px] font-[700]">{title}</h2>
              <p className="text-[12px] flex font-[700]">
                FTP
                <span className="flex items-center rounded-md bg-[#2B313B] px-2 font-[600] text-[#9BA2AE] ml-1">
                  <FaRegCopy /> J2ea...launch
                </span>
              </p>

              <div className="flex text-[11px] text-[#9CA3AF] gap-1 items-center mt-1">
                <span>Some Time</span>
                <FiEyeOff />
                <FaSearch />
                <FaRegStar />
              </div>

              <div className="flex gap-2 items-center mt-1">
                <img
                  src={image}
                  alt={title}
                  className="w-5 h-5 rounded-full object-cover "
                />
                <p className=" text-[12px] text-[#9CA3AF] ">
                  {title.toLowerCase().replace(/\s/g, "")}
                </p>
                <p className="text-[12px] text-[#9CA3AF]">2mo ago</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2  items-center">
            <div className="bg-[#171717] flex items-center  h-[30px] px-2 rounded-sm">
              <FaRegStar />
            </div>
            <button className="bg-white  text-black font-[600] w-[54px] h-[30px] text-xs rounded">
              Share
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-[16px] lg:text-[20px] font-[700] mt-5">
            $FTP - 11/2 - SUNDAY EVENT AT MAC ARTHUR PARK - FOOD - HAIRCUTS -
            HYGIENE PRODUCTS
          </h1>
          <p className=" text-[14px] font-[400] text-[#9DA3AE] ">
            Started 2d ago
          </p>

          <div className="p-5 h-[633px] flex flex-col border-2 mt-5 border-[#171717] bg-[#090909BF] rounded-lg ">
            <div className="flex items-center justify-between ">
              <div className="mb-4">
                <p className=" text-[14px] font-[400] text-[#9BA2AE] ">
                  Market Cap
                </p>
                <h3 className=" text-[30px] font-[700]">$1.7M</h3>

                <p className="text-[14px] font-[400] text-[#F7525F] ">
                  -$75.6K (-4.26%) <span className="text-[#9DA3AE] ">24hr</span>
                </p>
              </div>

              <div className="flex items-center text-[12px] font-[600] text-[#4B5563] gap-2">
                <div className=" bg-[#4B5563] rounded-lg h-[7px] w-[200px]  ">
                  <span className="bg-[#fff] block rounded-lg h-[7px] w-[30px]"></span>
                </div>
                <p>
                  ATH <span className=" text-[#F8F8F8] ">$12.6M</span>
                </p>
              </div>
            </div>
            <TradingChart />
          </div>
        </div>
        <FeatureCards />
        <CommentTabs />
      </div>
      <div className="lg:max-w-[358px] lg:flex-1 rounded-lg">
        <LiveChat />
      </div>
    </div>
  );
}
