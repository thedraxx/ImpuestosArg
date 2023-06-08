/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com', "upload.wikimedia.org", "hbomax-images.warnermediacdn.com", "static.vecteezy.com", "seeklogo.com"],
    },
}

module.exports = nextConfig
