import React from "react";

export default {
  title: "Image and multimedia/<img>",
};

export const small = {
  render: () => (
    <img src="https://holidaycss.js.org/150.svg" alt="Placeholder" />
  ),

  name: "small",
};

export const big = {
  render: () => (
    <img src="https://holidaycss.js.org/2048x1080.svg" alt="Placeholder" />
  ),

  name: "big",

  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
  },
};
