/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname:
          "supabasekong-kpyha8soqce8k5ymlm2izzi5.173.212.218.142.sslip.io",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  async rewrites() {
    const supabaseUrl = (process.env.SUPABASE_URL || "http://supabasekong-kpyha8soqce8k5ymlm2izzi5.173.212.218.142.sslip.io").replace(/\/$/, "");
    return [
      {
        source: "/supabase-storage/:path*",
        destination: `${supabaseUrl}/storage/:path*`,
      },
    ];
  },
};

export default nextConfig;
