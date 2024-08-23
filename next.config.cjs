import withLess from 'next-with-less';
import withPWA from 'next-pwa';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
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
  pwa: {
    dest: 'public',
    // Optional settings
    register: true,
    skipWaiting: true,
  },
};

export default withPWA(withLess(nextConfig));
