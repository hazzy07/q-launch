import React, { useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import AccordionItem from "../components/ReuseableComponent/Accordian";
import { FaLink } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
export default function CreateCoin() {
  const [preview, setPreview] = useState(null);

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  return (
    <div className="w-full min-h-screen bg-black text-[#F8FAFC] p-8 pt-0 justify-center flex gap-10">
      <div className="flex-1 max-w-[750px]">
        <h2 className="font-[700] text-[16px] mb-3">Create new coin</h2>
        <h2 className="font-[700] text-[16px] mb-2">Create details</h2>

        <p className="text-[12px] font-[400] text-[#9DA3AE] mb-6">
          Choose carefully, these can't be changed once the coin is created
        </p>

        <div className="bg-[#090909BF] border-2 border-[#222] rounded-xl p-5 mb-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-[600] mb-1">Coin name</label>
              <input
                className="bg-[#0d0d0d] border border-[#333] rounded-lg px-3 py-2 text-[14px]"
                placeholder="Name your coin"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-[600] mb-1">Ticker</label>
              <input
                className="bg-[#0d0d0d] border border-[#333] rounded-lg px-3 py-2 text-[14px]"
                placeholder="Add a coin ticker (e.g. DOGE)"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] font-[600] mb-1">
              Description (Optional)
            </label>
            <textarea
              className="bg-[#0d0d0d] border border-[#333] rounded-lg px-3 py-2 h-[90px] text-[14px]"
              placeholder="Write a short description"
            />
          </div>

          <AccordionItem
            title={
              <span className="flex gap-3">
                <FaLink size={18} /> Add social links (Optional)
              </span>
            }
            children={
              <>
                <div className="grid grid-cols-1 mb-3 md:grid-cols-2 gap-4">
                  <div className="flex flex-col  gap-1">
                    <label className="text-[13px]">Website</label>
                    <input
                      type="text"
                      className="bg-[#0d0d0d] border border-[#333] placeholder-[] rounded-lg px-3 py-2 text-[14px]"
                      placeholder="Add URL"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[13px]">X</label>
                    <input
                      className="bg-[#0d0d0d] border border-[#333] placeholder-[#9CA3AF] rounded-lg px-3 py-2 text-[14px]"
                      placeholder="Add URL"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px]">Telegram</label>
                    <input
                      type="text"
                      className="bg-[#0d0d0d] border border-[#333] placeholder-[] rounded-lg px-3 py-2 text-[14px]"
                      placeholder="Add URL"
                    />
                  </div>
                </div>
              </>
            }
          />
        </div>

        <div className="bg-[#090909BF] border-2 border-[#222] rounded-xl p-5 mb-8">
          <div className="border border-[#333] border-dashed rounded-xl h-[320px] flex flex-col justify-center items-center text-center p-6">
            <div className="text-[40px] mb-2">
              <FaRegImages />
            </div>
            <p className="text-[16px] text-[#F8FAFC] font-[600] mb-2">
              Select video or image to upload
              <br />
              <span className=" font-[400] ">or drag and drop it here</span>
            </p>
            <label className="bg-white text-black mt-2 px-4 h-[40px] flex items-center justify-center font-[600] text-[14px]  rounded cursor-pointer  ">
              Select file
              <input type="file" className="hidden" onChange={handleFile} />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-5 mt-6 text-[13px] text-gray-400">
            <div>
              <span>
                <IoDocumentOutline size={22} />
              </span>
              <p className="font-[700] text-[14px] my-2 text-white">
                File size and type
              </p>
              <ul className="list-disc text-[12px] font-[400] text-[#E8E8E8] ">
                <li>
                  Image - max 15mb. '.jpg', '.gif' or '.png' <br /> recommended
                </li>
                <li>Video - max 30mb. '.mp4' recommended</li>
              </ul>
            </div>
            <div>
              <span>
                < FaRegImage size={22} />
              </span>
              <p className="font-[700] text-[14px] my-2 text-white">
                Resolution and aspect ratio
              </p>
              <ul className="list-disc text-[12px] font-[400] text-[#E8E8E8] ">
                <li>
                  Image, min 1000x1000px, 1:1 square <br /> recommended
                </li>
                <li>Video, 16:9 or 9:16, 1080px recommended</li>
              </ul>
            </div>
          </div>

          <AccordionItem
            title={<span>Add banner (Optional)</span>}
            children={
              <>
                <div className="grid grid-cols-1 mb-3 md:grid-cols-2 gap-4">
                  <div className="flex flex-col  gap-1">
                    <label className="text-[13px]">Website</label>
                    <input
                      type="text"
                      className="bg-[#0d0d0d] border border-[#333] placeholder-[] rounded-lg px-3 py-2 text-[14px]"
                      placeholder="Add URL"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[13px]">X</label>
                    <input
                      className="bg-[#0d0d0d] border border-[#333] placeholder-[#9CA3AF] rounded-lg px-3 py-2 text-[14px]"
                      placeholder="Add URL"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px]">Telegram</label>
                    <input
                      type="text"
                      className="bg-[#0d0d0d] border border-[#333] placeholder-[] rounded-lg px-3 py-2 text-[14px]"
                      placeholder="Add URL"
                    />
                  </div>
                </div>
              </>
            }
          />
        </div>

        <div className="bg-[#090909BF] border-2 border-[#222] rounded-xl p-4 text-[12px] font-[400] text-[#E8E8E8] mb-8">
          Coin data (social links, banner, etc) can only be added now, and can't
          be changed or edited after creation
        </div>

        <button className="bg-white w-[271px] h-[40px] text-black  rounded-md text-[14px] font-[600]">
          Create coin
        </button>
      </div>

      <div>
        <p className=" my-3 font-[700] text-[18px] ">Preview</p>
        <div className="w-[230px] h-[300px] bg-[#090909BF] border-2 border-[#171717] rounded-xl flex items-center justify-center text-[14px] text-[#E8E8E8] font-[400] p-4">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <p className="text-center text-[#E8E8E8] p-3">
              A preview of how the coin will look like
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
