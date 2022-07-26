// eslint-disable-next-line no-undef
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors. Only used because Vercel keeps throwing errors for type mismatch.
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
