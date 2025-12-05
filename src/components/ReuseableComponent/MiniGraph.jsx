import React from "react";

export default function MiniGraph({ data }) {
  if (!data || data.length === 0) return null;

  const width = 80;
  const height = 30;

  const max = Math.max(...data);
  const min = Math.min(...data);

  const scaleX = index => (index / (data.length - 1)) * width;
  const scaleY = value => height - ((value - min) / (max - min)) * height;

  const points = data.map((v, i) => `${scaleX(i)},${scaleY(v)}`).join(" ");

  return (
    <div className="">
      <svg width={width} height={height} className="overflow-visible">
        <polyline
          points={points}
          fill="none"
          stroke="#78f7b8"
          strokeWidth="2"
        />
        <polygon
          points={
            points +
            ` ${width},${height} 0,${height}`
          }
          fill="#78f7b8"
          opacity="0.15"
        />
      </svg>
    </div>
  );
}
