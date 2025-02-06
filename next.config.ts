import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStringMode: true,
  i18n: {
    localeDetection: true,
    locales: ['en', 'fr', 'de', 'es', 'pt'],
    defaultLocale: 'en',
  }
  /* config options here */
};

export default nextConfig;
