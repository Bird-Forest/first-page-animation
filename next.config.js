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
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "public",
      },
    ],
  },
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
