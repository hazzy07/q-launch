import React, { useState } from "react";

export default function ToggleBtn({ label, defaultSet= true }) {
  const [enabled, setEnabled] = useState(defaultSet);
  return (
    <div className="flex items-center gap-3 justify-between text-white text-sm">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 rounded-full transition-colors duration-300 ${
          enabled ? "bg-[#fff]" : "bg-[#3f3f46]"
        } relative`}
      >
        <span
          className={`absolute top-[2px] ${
            enabled ? "left-[22px]" : "left-[2px]"
          } w-4 h-4 bg-black rounded-full transition-all duration-300`}
        ></span>
      </button>
      <span>{label}</span>
    </div>
  );
}
