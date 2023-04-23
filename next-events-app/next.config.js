/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    firebaseURL:
      'https://nextjs-d69a4-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
  },
  serverRuntimeConfig: {
    mongoConnectionString:
      'mongodb+srv://user1:Y7pRbuTy5BR05V97@cluster0.b2j2h.mongodb.net/',
  },
};

module.exports = nextConfig;
