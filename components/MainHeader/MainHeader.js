"use client";
import { IconLinkedin } from "../icons";
import { IconGithub } from "../icons";
import { IconDocuments } from "../icons";
import { LightBlur } from "../LightBlur";
import { SocialButton } from "../SocialButton";
import { motion } from "framer-motion";

function MainHeader() {
  const name = "ILAN";
  const lastname = "FRITZLER";
  return (
    <section className="flex flex-col justify-between w-full py-4 lg:flex-row max-w-7xl">
      <section className="relative flex flex-col items-center justify-center mx-auto lg:items-start lg:mx-0 max-w-fit">
        <span className="text-[1.5rem] sm:text-[2rem]">HI THERE! I’M</span>
        <h1 className="text-[2.5rem] sm:text-[4rem] font-bold leading-[4rem]">
          <motion.span>
            {name.split("").map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: idx * 0.2 }}
              >
                <span className="text-gradient">{letter}</span>
              </motion.span>
            ))}
          </motion.span>{" "}
          <motion.span>
            {lastname.split("").map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: idx * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <motion.p
          className="text-[1.5rem] sm:text[2.5rem] font-semibold opacity-0"
          initial={{ translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Full Stack Developer
        </motion.p>
        <LightBlur hexColor={"#3500CD"} position={"right"} />
      </section>

      {/* Social networks */}
      <section className="relative flex flex-col items-center justify-center gap-2 mx-auto my-0 mt-8 font-medium max-w-max lg:mg-40 lg:mx-0">
        <h2 className="text-center">Please check my social Networks!</h2>
        <div className="flex items-center justify-between gap-2">
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
        <LightBlur hexColor={"red"} position={"right"} />
      </section>
    </section>
  );
}

export default MainHeader;
