module.exports = {
    typescript: true,
    dimensions: false,
    ref: true,
    svgoConfig: {
        plugins: [
            {
                name: "preset-default",
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
            "removeDimensions",
        ],
    },
};
