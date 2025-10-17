module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("1024x150.svg");
  eleventyConfig.addPassthroughCopy("1440x150.svg");
  eleventyConfig.addPassthroughCopy("150.svg");
  eleventyConfig.addPassthroughCopy("1920x1080.svg");
  eleventyConfig.addPassthroughCopy("2048x1080.svg");
  eleventyConfig.addPassthroughCopy("320.svg");
  eleventyConfig.addPassthroughCopy("320x150.svg");
  eleventyConfig.addPassthroughCopy("70x36.svg");
  eleventyConfig.addPassthroughCopy("768x150.svg");
  eleventyConfig.addPassthroughCopy("nyan-cat.mp4");
  eleventyConfig.addPassthroughCopy("sample.pdf");
  eleventyConfig.addPassthroughCopy("t-rex-roar.mp3");

  return {
    dir: {
      input: "site",
    },
  };
};
