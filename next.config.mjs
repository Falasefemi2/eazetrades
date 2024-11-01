/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-cdn.ubuy.co.in',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;