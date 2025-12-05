import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function Dropdown({ labelTitle, label, options, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {labelTitle && (
        <label className="font-[500] text-[15px] text-[#141A26]">
          {labelTitle}
        </label>
      )}

      <button
        type="button"
        className={`w-full mt-2 border text-[#000] h-[40px] border-[#D9D9D9] rounded-md px-4 gap-2 font-[500] text-[14px] bg-[#F3F3F3] flex justify-between items-center ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        {isOpen ? (
          <FaCaretUp size={18} className="text-[#8A8D93]" />
        ) : (
          <FaCaretDown size={18} className="text-[#8A8D93]" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute w-full  whitespace-nowrap border border-[#D9D9D9] rounded-md mt-1 bg-white z-10 overflow-y-auto shadow-sm">
          {options.map((option) => (
            <li
              key={option.value}
              className="flex items-center  text-[13px]  overflow-hidden  text-[#000] font-[500] gap-2  p-2  cursor-pointer hover:bg-[#b7b6b664]"
              onClick={() => setIsOpen(false)}
            >
              {option.icon && <img src={option.icon} alt="" className="w-5 h-5" />}
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
