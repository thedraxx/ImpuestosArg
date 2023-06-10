/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', "1000marcas.net", "www.lavoz.com.ar", "play-lh.googleusercontent.com", 'res.cloudinary.com', "upload.wikimedia.org", "hbomax-images.warnermediacdn.com", "static.vecteezy.com", "seeklogo.com"],
    },
}

module.exports = nextConfig
