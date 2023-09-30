/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/id/**",
      },
    ],
  },
};

module.exports = nextConfig;
// https://picsum.photos/id/
// https://www.etharcor.com/medias/article/small/332/whatsapp-image-2022-04-13-at-11-19-20-am.jpeg
// https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/369737386_267095672766263_6147565913946621154_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEcHgD-EX7zM91k3IY2yYqt63vkYtG2mCXre-Ri0baYJbkPTcsAGByRIpmpL1irnZEj9ZsQ6aA-OiM2-Alz8MrQ&_nc_ohc=odYoYJkGVqYAX9Ny1HK&_nc_ht=scontent.famm10-1.fna&oh=00_AfC63OdA1GIKaraEphDfJAiN4ZKK4wSAM2lYs-0Y85xm4w&oe=650A2D31
