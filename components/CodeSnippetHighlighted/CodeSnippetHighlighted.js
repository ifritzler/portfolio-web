import { JetBrains_Mono } from "next/font/google";
import { IconJavascript } from "../icons";
import CodeSnippet from "./CodeSnippet.mdx";
import { MDXProvider } from "@mdx-js/react";
import { rehypePrism } from "rehype-prism";

const jetbrainsFont = JetBrains_Mono({ display: "swap", subsets: ["latin"] });

function CodeSnippetHighlighted() {
  return (
    <div>
      <MDXProvider components={{ code: rehypePrism }}>
        <CodeSnippet />
      </MDXProvider>
    </div>
  );
}

export default CodeSnippetHighlighted;
