"use client";
import { animate, inView } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { LightBlur } from "../LightBlur";

function ProyectsHeader() {
  useEffect(() => {
    const projectSection = document.getElementById("projects-section");
    inView(projectSection, (info) => {
      const animation = animate(info.target, { translateX: 0 });
      return (leaveInfo) => animation.stop();
    });
  }, []);

  return (
    <section
      className="flex flex-col sm:flex-row transition duration-700 p-8 gap-16 justify-center items-center -translate-x-full md:mt-16"
      id="projects-section"
    >
      <div className="max-w-lg order-2 md:order-1">
        <h2 className="font-bold text-3xl">PROJECTS</h2>
        <p className="leading-7 font-light max-w-md">
          Here, you can explore my public projects and their implementations. If
          you happen to be a technical lead or software engineer and notice any
          mistakes or areas for improvement, I would greatly appreciate your
          feedback and would love to stay in touch!
        </p>
      </div>
      <Image
        src="/images/ProfilePic.jpg"
        alt="Profile picture"
        width={270}
        height={270}
        className="rounded-full order-1 md:order-2 w-44 h-44 md:w-[270px] md:h-[270px]"
      />
      <LightBlur hexColor={"orange"} position={"right"} />
    </section>
  );
}

export default ProyectsHeader;
