module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        passthroughFileCopy: true,
        templateFormats: ["html", "md", "css"],
        dir: {
            input: "src",
            output: "_site",
            include: "includes"
        }
    }
}