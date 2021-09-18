/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
  },
  images: {
    domains: ['apod.nasa.gov'],
  },
  reactStrictMode: true,
}
