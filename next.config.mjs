import withLess from 'next-with-less';

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  images: {
    domains: [],
  },
});

export default nextConfig;
