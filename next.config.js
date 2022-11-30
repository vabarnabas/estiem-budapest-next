/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["hu-HU", "en-US"],
    defaultLocale: "hu-HU",
    localeDetection: false,
  },
}

module.exports = nextConfig
