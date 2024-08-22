import withLess from 'next-with-less';

// Define your Next.js configuration using ES module syntax
const nextConfig = {
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
};

export default withLess(nextConfig);
