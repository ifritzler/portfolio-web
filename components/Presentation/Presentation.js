"use client";
import { CodeSnippetHighlighted } from "../CodeSnippetHighlighted";
import { motion } from "framer-motion";

function Presentation() {
  return (
    <section className="flex flex-col items-center justify-between gap-12 mt-4 lg:flex-row lg:gap-24 max-w-7xl">
      <div className="flex flex-col items-center flex-1 w-full gap-6">
        <div className="relative text-center lg:text-start">
          <h2 className="font-semibold leading-6">Welcome to my portfolio!</h2>
          <p className="max-w-md font-light leading-7">
            If you are a recruiter or someone who is interested in my profile, I
            invite you to take a look around and learn more about me and my
            work. If you like what you see, feel free to reach out and start a
            conversation with me. I look forward to connecting with you!
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.8,
          }}
          className="flex p-4 justify-center items-center w-full rounded-2xl bg-[#FF3162]"
        >
          <a href="#" className="font-semibold text-white">
            Contact me
          </a>
        </motion.button>
      </div>
      <CodeSnippetHighlighted />
    </section>
  );
}

export default Presentation;
