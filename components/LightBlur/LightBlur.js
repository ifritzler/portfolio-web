"use client";

function LightBlur({ hexColor }) {
  return (
    <div
      className={`absolute w-[166px] h-[166px] blur-[170px] right-0 -z-50`}
      style={{ backgroundColor: hexColor }}
    ></div>
  );
}

export default LightBlur;
