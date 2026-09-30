// Static export so the site can be hosted on GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set by the deploy workflow to "/<repo-name>".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};
