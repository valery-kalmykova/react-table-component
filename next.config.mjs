/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://yandex.ru",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
