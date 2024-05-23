module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:3000",
        port: "",
        pathname: "public",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
      },
    ],
  },
};
