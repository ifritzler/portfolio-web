import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";
import { IconJavascript } from "../icons";

const jetbrainsFont = JetBrains_Mono({ display: "swap", subsets: ["latin"] });

function CodeSnippetHighlighted() {
  return (
    <div
      className={`relative flex flex-col justify-center bg-[#1B1C1B] p-6 rounded-2xl flex-1 max-w-lg ${jetbrainsFont.className} leading-6`}
    >
      <IconJavascript className="absolute top-4 right-4 text-yellow-400 w-11 h-11"/>
      <div className="flex gap-6">
        <span className="w-[10px]">1</span>
        <p>
          <span className="text-[#9747FF]">const</span> WEB_INFO_URL ={" "}
          <span className="text-[#B59B13]">process</span>.env.WEB_INFO_URL;
        </p>
      </div>
      <div className="flex gap-6">
        <span className="w-[10px]">2</span>
        <p>
          <span className="text-[#9747FF]">const</span> response ={" "}
          <span className="text-[#B59B13]">fetch</span>(WEB_INFO_URL);
        </p>
      </div>
      <div className="flex gap-6">
        <span className="w-[10px]">3</span>
        <p>
          <span className="text-[#B59B13]">console</span>.log(
          <span className="text-[#7BD153]">
            &apos;Let the magic begin! 🪄🧙‍♂️&apos;
          </span>
          );
        </p>
      </div>
    </div>
  );
}

export default CodeSnippetHighlighted;
