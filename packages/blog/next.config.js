/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
};

module.exports = nextConfig;
