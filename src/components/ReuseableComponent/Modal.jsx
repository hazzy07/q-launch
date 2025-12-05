import React from "react";

export default function Modal({
isOpen,
onClose,
title,
titleClass,
message,
footer,
maxwidth,
position
}) {
if (!isOpen) return null;

return (
<div
className={`fixed inset-0 z-[300] bg-[#000000d8] flex items-center justify-center ${position}`}
onClick={onClose}
>
<div
className={`relative w-full ${maxwidth} m-5 max-h-[90vh] bg-[#090909] rounded-lg shadow-xl flex flex-col`}
// onClick={(e) => e.stopPropagation()}
>
{title && <div className={titleClass}>{title}</div>}

    <div className="p-5 custom-scrollbar overflow-y-auto flex-grow">
      {message}
    </div>

    <div>{footer}</div>
  </div>
</div>


);
}