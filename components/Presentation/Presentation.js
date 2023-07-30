import React from "react";
import { CodeSnippetHighlighted } from "../CodeSnippetHighlighted";

function Presentation() {
  return (
    <section className="flex justify-between gap-24">
      <div className="flex flex-col gap-6 flex-1 max-w-lg">
        <div>
          <h2 className="font-semibold leading-6">Welcome to my portfolio!</h2>
          <p className="max-w-md font-light leading-7">
            If you are a recruiter or someone who is interested in my profile, I
            invite you to take a look around and learn more about me and my
            work. If you like what you see, feel free to reach out and start a
            conversation with me. I look forward to connecting with you!
          </p>
        </div>
        <button className="flex p-4 justify-center items-center w-full rounded-2xl bg-[#FF3162]">
          <span className="font-semibold text-white">Contact me</span>
        </button>
      </div>
      <CodeSnippetHighlighted />
    </section>
  );
}

export default Presentation;
