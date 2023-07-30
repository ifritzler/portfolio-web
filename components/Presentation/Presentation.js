import React from "react";

function Presentation() {
  return (
    <section>
      <div className="flex flex-col gap-6 max-w-lg">
        <div>
          <h2 className="font-semibold leading-6">Welcome to my portfolio!</h2>
          <p className="max-w-lg">
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
    </section>
  );
}

export default Presentation;
