/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
    COPY_URL: process.env.COPY_URL
  },
  images: {
    domains: ['apod.nasa.gov'],
  },
  reactStrictMode: true,
}
