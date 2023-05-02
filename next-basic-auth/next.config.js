/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    mongoConnectionString:
      'mongodb+srv://user1:fs12W0Fs5nH3fb3b@cluster0.b2j2h.mongodb.net/next-basic-auth?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
