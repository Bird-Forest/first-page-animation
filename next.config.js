module.exports = {
  experimental: {
    // You may not need this, it's just to support moduleResolution: 'node16'
    extensionAlias: {
      ".js": [".tsx", ".ts", ".jsx", ".js"],
    },
    swcMinify: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
      },
    ],
  },

  // webpack: (config) => {
  //   config.resolve.alias.canvas = false;

  //   return config;
  // },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.node/,
  //     use: "raw-loader",
  //   });
  //   return config;
  // },
  // experimental: {
  //   serverComponentsExternalPackages: ["@react-pdf/renderer"],
  // },
};

// // @ts-check

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost:3000",
//         port: "",
//         pathname: "public",
//       },
//       {
//         protocol: "https",
//         hostname: "cdn.pixabay.com",
//         port: "",
//       },
//     ],
//   },

//   webpack: (config) => {
//     config.resolve.alias.canvas = false;

//     return config;
//   },
// };

// export default nextConfig;
