import Image from "next/image";
import React from "react";

function ProyectsHeader() {
  return (
    <section className="flex p-8 gap-16 justify-center items-center">
      <div className="max-w-lg">
        <h2 className="font-bold text-3xl">PROJECTS</h2>
        <p className="leading-7 font-light max-w-md">
          Here, you can explore my public projects and their implementations. If
          you happen to be a technical lead or software engineer and notice any
          mistakes or areas for improvement, I would greatly appreciate your
          feedback and would love to stay in touch!
        </p>
      </div>
      <Image src="/images/ProfilePic.jpg" alt="Profile picture" width={270} height={270} className="rounded-full"/>
    </section>
  );
}

export default ProyectsHeader;
