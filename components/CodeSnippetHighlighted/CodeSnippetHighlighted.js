import { JetBrains_Mono } from "next/font/google";
import { IconJavascript } from "../icons";
import CodeSnippet from "./CodeSnippet.mdx";
import { MDXProvider } from "@mdx-js/react";
import { rehypePrism } from "rehype-prism";
import "./style.css";

const jetbrainsFont = JetBrains_Mono({ display: "swap", subsets: ["latin"] });

function PreElement({ children }) {
  return (
    <div
      className={`relative flex flex-col justify-center bg-[#1B1C1B] p-6 rounded-2xl lg:self-stretch flex-1 max-w-lg ${jetbrainsFont.className} leading-6 text-white`}
    >
      {children}
    </div>
  );
}

function CodeSnippetHighlighted() {
  return (
    <div className={jetbrainsFont.className}>
      <MDXProvider components={{ code: rehypePrism, }}>
        <CodeSnippet />
      </MDXProvider>
    </div>
  );
}

export default CodeSnippetHighlighted;
