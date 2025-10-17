import React from "react";

export default {
  title: "Image and multimedia/<img>",
};

export const small = () => (
  <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
);

small.storyName = "small";

export const big = () => (
  <img src="https://holidaycss.js.org/2048x1080.svg" alt="Placeholder" />
);

big.storyName = "big";
big.parameters = {
  chromatic: {
    viewports: [320, 1200],
  },
};
