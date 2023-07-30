"use client";

function LightBlur({ hexColor, position}) {
  return (
    <div
      className={`absolute w-[166px] h-[166px] blur-[170px] ${position === "right" ? "right-0" : "left-0"} -z-50`}
      style={{ backgroundColor: hexColor }}
    ></div>
  );
}

export default LightBlur;
