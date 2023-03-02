const eleventySass = require("eleventy-sass")

const config = {
    dir: {
        input: "src",
        includes: "_includes",
        output: "_site"
    }
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass)
    eleventyConfig.addPassthroughCopy("src/assets")
    return config
}