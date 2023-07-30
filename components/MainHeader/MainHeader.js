import React from "react";
import { IconLinkedin } from "../icons";
import { IconGithub } from "../icons";
import { IconDocuments } from "../icons";
import { LightBlur } from "../LightBlur";
import { SocialButton } from "../SocialButton";

function MainHeader() {
  return (
    <section className="flex justify-between py-4">
      <section className="relative flex flex-col justify-center items-start max-w-fit">
        <span className="text-[2rem]">HI THERE! I’M</span>
        <h1 className="text-[4rem] font-bold leading-[4rem]">
          <span className="text-gradient">ILAN</span> FRITZLER
        </h1>
        <p className="text-[2.5rem] font-bold">Full Stack Developer</p>
        <LightBlur hexColor={"#3500CD"} />
      </section>

      {/* Social networks */}
      <section className="relative flex flex-col justify-center items-start gap-2 font-medium max-w-max m-40 my-0">
        <h2>Social Networks</h2>
        <div className="flex justify-between items-center gap-2">
          <SocialButton
            label={"Linkedin"}
            icon={<IconLinkedin />}
            link={"https://www.linkedin.com/in/ilan-fritzler/"}
          />
          <SocialButton
            label={"Github"}
            icon={<IconGithub />}
            link={"https://github.com/ifritzler"}
          />
        </div>
        <SocialButton
          label={"Download my CV - EN"}
          icon={<IconDocuments />}
          link={"/files/Curriculum - EN.pdf"}
          download={true}
        />
        <SocialButton
          label={"Download my CV - ES"}
          icon={<IconDocuments />}
          link={"/files/Curriculum - ES.pdf"}
          download={true}
        />
        <LightBlur hexColor={"red"} />
      </section>
    </section>
  );
}

export default MainHeader;
