/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["js", "jsx", "mdx"],
};

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [require("remark-prism")],
    },
  });
module.exports = withMDX(nextConfig);
