/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    firebaseURL:
      'https://nextjs-d69a4-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
  },
};

module.exports = nextConfig;
