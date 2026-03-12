const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
