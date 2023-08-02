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
    }, {margin: "-150px"});
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 transition duration-700 -translate-x-full sm:flex-row"
      id="projects-section"
    >
      <div className="order-2 max-w-lg md:order-1">
        <h2 className="text-3xl font-bold">PROJECTS</h2>
        <p className="max-w-md font-light leading-7">
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
