
import React,{useState} from 'react'
import { RxCaretDown } from "react-icons/rx";

export default function AccordionItem({ title, children, defaultOpen = false, className }) {
    const [open, setOpen] = useState(defaultOpen);

  return (
     <div className={``}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-4 ${className}  w-full  text-[12px] ${  open ? "text-[#fff]" : " text-[#F8F1FC]" } `}
      >
        {title}
        <RxCaretDown
          size={21}
          className={`transition-transform  duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="pt-3">{children}</div>}
    </div>
  )
}
