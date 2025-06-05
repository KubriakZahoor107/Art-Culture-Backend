/** @type {import('next').NextConfig} */
const config = {
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  pwa: {
    dest: 'public',
  },
  experimental: {
    appDir: true,
  },
}

export default config
