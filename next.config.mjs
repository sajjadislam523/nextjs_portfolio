// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: [
//                 {
//                     loader: "@svgr/webpack",
//                     options: {
//                         typescript: true,
//                         dimensions: false,
//                         svgoConfig: {
//                             plugins: [
//                                 {
//                                     name: "preset-default",
//                                     params: {
//                                         overrides: {
//                                             removeViewBox: false,
//                                         },
//                                     },
//                                 },
//                                 "removeDimensions",
//                             ],
//                         },
//                     },
//                 },
//             ],
//         });

//         return config;
//     },
// };

// export default nextConfig;

const nextConfig = {
    webpack: (config) => {
        // Add rule for SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack", "url-loader"],
        });

        return config;
    },
    reactStrictMode: true,
};
export default nextConfig;
